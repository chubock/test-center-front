import {Injectable} from "@angular/core";
import {Http, URLSearchParams} from "@angular/http";
import {Question} from "../../questions-module/model/Question";
import {Page} from "../../shared-module/model/Page";
import {QuestionFactory} from "../../questions-module/service/QuestionFactoryService";
import {environment} from "../../../environments/environment";
/**
 * Created by yubar on 6/2/17.
 */

@Injectable()
export class UserQuestionsService {
  url:string = environment.apiEndPoint + "answered-questions";

  constructor(private http:Http){}

  getQuestions(page:number = 0, size:number = 5, specification:UserQuestionSpecification): Promise<Page<Question>> {
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
      .get(this.url, {search: params, withCredentials: true})
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

  scoreQuestion(question:Question):Promise<void> {
    return this.http.patch(this.url, {id: question.id, score: question.score, comment:question.comment}, {withCredentials: true})
      .toPromise();
  }

}

export class UserQuestionSpecification {
  difficulties:string[] = [];
  difficultyLevels:string[] = [];
  marked:string = null;
  statuses:string[] = [];
  questionTypes:string[] = [];
}
