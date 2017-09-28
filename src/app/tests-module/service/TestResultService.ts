import {TestResult} from "../model/TestResult";
/**
 * Created by yubar on 7/20/17.
 */

export interface TestResultService {

  getTestResults(id:number, specification: TestResultSpecification): Promise<TestResult[]>

}

export class TestResultSpecification {
  types:string[] = [];
  values:string[] = [];
}
