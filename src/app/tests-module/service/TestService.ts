import {Test} from "../model/Test";
import {TestSection} from "../model/TestSection";
/**
 * Created by Yubar on 3/17/2017.
 */

export interface TestService {

  getTests(): Promise<Test[]>;
  getTest(id:number): Promise<Test>;
  getTestSection(id:number): Promise<TestSection>;
  createTest(test:Test): Promise<Test>;
  getCurrentTest():Promise<Test>;
  createNextSection(id:number, answers:any): Promise<TestSection>;
  seeQuestion(id:number):Promise<void>;
  answerQuestion(id:number, answer:string): Promise<void>;
  markQuestion(id:number):Promise<void>;
  unMarkQuestion(id:number):Promise<void>;
  finishTest(id:number, answers:any): Promise<Date>;
  commentTest(id:number, comment:string): Promise<void>;

}
