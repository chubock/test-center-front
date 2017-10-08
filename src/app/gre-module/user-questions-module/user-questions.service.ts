import {Injectable} from "@angular/core";
import {URLSearchParams} from "@angular/http";
import {Page} from "../../shared-module/model/page";
import {environment} from "../../../environments/environment";
import {Question} from "../questions-module/model/question";
import {QuestionFactory} from "../questions-module/service/question-factory.service";
import {AuthHttp} from "angular2-jwt";
/**
 * Created by yubar on 6/2/17.
 */

@Injectable()
export class UserQuestionsService {

  constructor(private http:AuthHttp){}

  private getQuestions(page:number = 0, size:number = 5, specification:UserQuestionSpecification, url:string): Promise<Page<Question>> {
    let params: URLSearchParams = new URLSearchParams;
    params.set("page", page.toString());
    params.set("size", size.toString());
    params.set("sort", "id");
    if (specification) {
      specification.difficulties.forEach(difficulty => params.append("difficulties", difficulty));
      specification.difficultyLevels.forEach(difficultyLevel => params.append("difficultyLevels", difficultyLevel));
      if (specification.marked)
        params.set("marked", specification.marked == 'true' ? "true" : "false");
      specification.statuses.forEach(status => params.append("statuses", status));
      specification.questionTypes.forEach(questionType => params.append("questionTypes", questionType));
    }
    return this.http
      .get(url, {search: params})
      .toPromise()
      .then(response => {
        let page:Page<Question> = response.json() as Page<Question>;
        let content = [];
        page.content.forEach(obj => {
          let question = QuestionFactory.createQuestion(obj.questionType);
          question.copy(obj);
          question.prepare();
          content.push(question);
        });
        page.content = content;
        return page;
      });
  }

  getUserQuestions(page:number = 0, size:number = 5, specification:UserQuestionSpecification): Promise<Page<Question>> {
    return this.getQuestions(page, size, specification, environment.apiEndPoint + "/gre-service/answered-questions");
  }

  getAllQuestions(page:number = 0, size:number = 5, specification:UserQuestionSpecification): Promise<Page<Question>> {
    return this.getQuestions(page, size, specification, environment.apiEndPoint + "/gre-service/answered-questions");
  }

  scoreQuestion(question:Question):Promise<void> {
    return this.http.patch(
      environment.apiEndPoint + "/gre-service/answered-questions/" + question.id + "/score",
      {id: question.id, score: question.score, comment:question.comment}
      ).toPromise();
  }

}

export class UserQuestionSpecification {
  difficulties:string[] = [];
  difficultyLevels:string[] = [];
  marked:string = null;
  statuses:string[] = [];
  questionTypes:string[] = [];
}
