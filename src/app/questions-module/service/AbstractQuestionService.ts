import {QuestionService} from "./QuestionService";
import {Headers, Http, URLSearchParams} from "@angular/http";
import {Page} from "../../shared-module/model/Page";
import {Question} from "../model/Question";
import {apiEndPoint} from "../../AppConfig";
/**
 * Created by Yubar on 1/20/2017.
 */

export abstract class AbstractQuestionService<T extends Question> implements QuestionService<T>{

  protected http:Http;
  protected serverUrl:string = apiEndPoint;

  protected abstract get url(): string;

  abstract newInstance():T;

  get(page:number = 0, size:number = 5): Promise<Page<T>> {

    let params: URLSearchParams = new URLSearchParams;
    params.set("page", page.toString());
    params.set("size", size.toString());

    return this.http
      .get(this.url, {search: params, withCredentials: true})
      .toPromise()
      .then(response => {
        let page:Page<T> = response.json() as Page<T>;
        let content = [];
        page.content.forEach(obj => {
          let question = this.newInstance();
          question.copy(obj);
          content.push(question);
        });
        page.content = content;
        return page;
      });
  }

  save(question: T): Promise<T> {
    return this.http
      .put(this.url, question, {withCredentials: true})
      .toPromise()
      .then(response => {
        var ret = this.newInstance();
        ret.copy(response.json());
        return ret;
      });
  }

  remove(id:number):Promise<any> {
    return this.http.delete(this.url + "/" + id, {withCredentials: true})
      .toPromise();
  }
}
