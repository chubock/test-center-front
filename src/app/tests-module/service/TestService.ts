import {Test} from "../model/Test";
import {TestSection} from "../model/TestSection";
/**
 * Created by Yubar on 3/17/2017.
 */

export interface TestService {

  getTests(): Promise<Test[]>;
  getTest(id:number): Promise<Test>;
  createTest(test:Test): Promise<Test>;
  createNextSection(id:number): Promise<TestSection>;
  answerQuestion(id:number, answer:string): Promise<void>;

}
