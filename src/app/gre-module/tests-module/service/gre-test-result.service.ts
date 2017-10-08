import {Injectable} from "@angular/core";
import {URLSearchParams} from "@angular/http";
import {TestResult} from "../model/TestResult";
import {environment} from "../../../../environments/environment";
import {AuthHttp} from "angular2-jwt";
/**
 * Created by yubar on 7/20/17.
 */

@Injectable()
export class GRETestResultService {

  constructor(private http:AuthHttp) {}

  getTestResults(id:number, specification:TestResultSpecification):Promise<TestResult[]> {
    let params: URLSearchParams = new URLSearchParams;
    if (specification){
      specification.types.forEach(type => params.append("types", type));
      specification.values.forEach(type => params.append("values", type));
    }
    return this.http.get(environment.apiEndPoint + "/gre-service/tests/" + id + "/answered-questions/result", {search:params})
      .toPromise()
      .then(resp => resp.json() as TestResult[]);
  }
}

export class TestResultSpecification {
  types:string[] = [];
  values:string[] = [];
}
