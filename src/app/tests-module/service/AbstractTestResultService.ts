import {TestResultService, TestResultSpecification} from "./TestResultService";
import {Http, URLSearchParams} from "@angular/http";
import {environment} from "../../../environments/environment";
import {TestResult} from "../model/TestResult";
/**
 * Created by yubar on 7/20/17.
 */

export abstract class AbstractTestResultService implements TestResultService {

  protected http:Http;
  protected serverUrl:string = environment.apiEndPoint;
  protected abstract url(id:number): string;

  getTestResults(id:number, specification:TestResultSpecification):Promise<TestResult[]> {
    let params: URLSearchParams = new URLSearchParams;
    if (specification){
      specification.types.forEach(type => params.append("types", type));
      specification.values.forEach(type => params.append("values", type));
    }
    return this.http.get(this.url(id), {search:params, withCredentials: true})
      .toPromise()
      .then(resp => resp.json() as TestResult[]);
  }

}
