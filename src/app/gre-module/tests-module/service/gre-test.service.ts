import {Injectable} from "@angular/core";
import {environment} from "../../../../environments/environment";
import {Test} from "../model/Test";
import {TestSection} from "../model/TestSection";
import {Question} from "../../questions-module/model/question";
import {QuestionFactory} from "../../questions-module/service/question-factory.service";
import {AuthHttp} from "angular2-jwt";
/**
 * Created by Yubar on 3/17/2017.
 */

@Injectable()
export class GRETestService {

  constructor(private http:AuthHttp) {}

  getTests():Promise<Test[]> {
    return this.http.get(environment.apiEndPoint + "/gre-service/tests")
      .toPromise()
      .then(response => response.json() as Test[]);
  }

  getTest(id:number):Promise<Test> {
    return this.http.get(environment.apiEndPoint + "/gre-service/tests/" + id)
      .toPromise()
      .then(response => response.json() as Test);
  }

  getTestSection(id:number): Promise<TestSection> {
    return this.http.get(environment.apiEndPoint + "/gre-service/test-sections/" + id)
      .toPromise()
      .then(resp => {
        let testSection:TestSection = resp.json();
        let questions: Question[] = [];
        testSection.answeredQuestions.forEach(question => {
          let q:Question = QuestionFactory.createQuestion(question.questionType);
          q.copy(question);
          q.prepare();
          questions.push(q);
        });
        testSection.answeredQuestions = questions;
        return testSection;
      });
  }

  createTest(test:Test): Promise<Test> {
    return this.http.post(environment.apiEndPoint + "/gre-service/tests", test)
      .toPromise()
      .then(response => {
        let test:Test = response.json() as Test;
        this.prepareNewTest(test);
        return test;
      });
  }

  private prepareNewTest(test:Test):void {
    test.testSections.forEach(testSection => {
      let questions: Question[] = [];
      testSection.answeredQuestions.forEach(question => {
        let q:Question = QuestionFactory.createQuestion(question.questionType);
        q.copy(question);
        questions.push(q);
      });
      testSection.answeredQuestions = questions;
    });
  }

  getCurrentTest():Promise<Test> {
    return this.http.get(environment.apiEndPoint + "/gre-service/tests/current")
      .toPromise()
      .then(response => {
        if (! response.text())
          return null;
        let test:Test = response.json() as Test;
        if (test && test.testSections) {
          test.testSections.forEach(testSection => {
            let questions: Question[] = [];
            testSection.answeredQuestions.forEach(question => {
              let q:Question = QuestionFactory.createQuestion(question.questionType);
              q.copy(question);
              q.prepare();
              questions.push(q);
            });
            testSection.answeredQuestions = questions;
          });
        }
        return test;
      });
  }

  createNextSection(id:number, answers:any): Promise<TestSection> {
    return this.http.post(environment.apiEndPoint + "/gre-service/tests/" + id + "/test-sections", answers)
      .toPromise()
      .then(response => {
        let testSection:TestSection = response.json() as TestSection;
        let questions: Question[] = [];
        testSection.answeredQuestions.forEach(question => {
          let q:Question = QuestionFactory.createQuestion(question.questionType);
          q.copy(question);
          questions.push(q);
        });
        testSection.answeredQuestions = questions;
        return testSection;
      });
  }

  seeQuestion(id:number):Promise<void> {
    return this.http.put(environment.apiEndPoint + "/gre-service/answered-questions/" + id + "/see", null)
      .toPromise();
  }

  answerQuestion(id:number, answer:string): Promise<void> {
    return this.http.put(environment.apiEndPoint + "/gre-service/answered-questions/" + id + "/answer", answer)
      .toPromise();
  }

  markQuestion(id:number):Promise<void> {
    return this.http.put(environment.apiEndPoint + "/gre-service/answered-questions/" + id + "/mark", null)
      .toPromise();
  }

  unMarkQuestion(id:number):Promise<void> {
    return this.http.put(environment.apiEndPoint + "/gre-service/answered-questions/" + id + "/unMark", null)
      .toPromise();
  }

  finishTest(id:number, answers:any):Promise<Date> {
    return this.http.post(environment.apiEndPoint + "/gre-service/tests/" + id + "/finish", answers)
      .toPromise();
  }

  commentTest(id:number, comment:string):Promise<void> {
    return this.http.patch(environment.apiEndPoint + "/gre-service/tests/" + id + "/comment", {comment: comment})
      .toPromise();
  }

}
