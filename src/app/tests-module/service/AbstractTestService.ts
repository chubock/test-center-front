import {TestService} from "./TestService";
import {Headers, Http} from "@angular/http";
import {apiEndPoint} from "../../AppConfig";
import {Test} from "../model/Test";
import {TestSection} from "../model/TestSection";
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
      .toPromise();
  }

  getTest(id:number):Promise<Test> {
    return this.http.get(this.url + "/" + id)
      .toPromise();
  }

  createTest(test:Test): Promise<Test> {
    return this.http.post(this.url, test)
      .toPromise();
  }

  createNextSection(id:number): Promise<TestSection> {
    return this.http.put(this.url + "/" + id + "/testSections", null)
      .toPromise();
  }

  answerQuestion(id:number, answer:string): Promise<void> {
    return this.http.put(this.url + "/question/" + id + "/answer", answer)
      .toPromise();
  }

}
