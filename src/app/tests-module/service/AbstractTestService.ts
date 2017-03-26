import {TestService} from "./TestService";
import {Headers, Http} from "@angular/http";
import {apiEndPoint} from "../../AppConfig";
import {Test} from "../model/Test";
import {TestSection} from "../model/TestSection";
import {QuestionFactory} from "../../questions-module/service/QuestionFactoryService";
import {Question} from "../../questions-module/model/Question";
/**
 * Created by Yubar on 3/17/2017.
 */

export abstract class AbstractTestService implements TestService {

  private headers = new Headers({'Content-Type': 'application/json'});
  protected http:Http;
  protected serverUrl:string = apiEndPoint;

  protected abstract get url(): string;

  getTests():Promise<Test[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json() as Test[]);
  }

  getTest(id:number):Promise<Test> {
    return this.http.get(this.url + "/" + id)
      .toPromise()
      .then(response => {
        let test:Test = response.json() as Test;
        test.testSections.forEach(testSection => {
          let questions: Question[] = [];
          testSection.answeredQuestions.forEach(question => {
            let q:Question = QuestionFactory.valueOf(question.questionType);
            q.copy(question);
            questions.push(q);
          });
          testSection.answeredQuestions = questions;
        });
        return test;
      });
  }

  createTest(test:Test): Promise<Test> {
    return this.http.post(this.url, test)
      .toPromise()
      .then(response => {
        let test:Test = response.json() as Test;
        test.testSections.forEach(testSection => {
          let questions: Question[] = [];
          testSection.answeredQuestions.forEach(question => {
            let q:Question = QuestionFactory.valueOf(question.questionType);
            q.copy(question);
            questions.push(q);
          });
          testSection.answeredQuestions = questions;
        });
        return test;
      });
  }

  createNextSection(id:number): Promise<TestSection> {
    return this.http.post(this.url + "/" + id + "/testSections", null)
      .toPromise()
      .then(response => {
        let testSection:TestSection = response.json() as TestSection;
        let questions: Question[] = [];
        testSection.answeredQuestions.forEach(question => {
          let q:Question = QuestionFactory.valueOf(question.questionType);
          q.copy(question);
          questions.push(q);
        });
        testSection.answeredQuestions = questions;
        return testSection;
      });
  }

  answerQuestion(id:number, answer:string): Promise<void> {
    return this.http.put(this.url + "/question/" + id + "/answer", answer)
      .toPromise();
  }

}
