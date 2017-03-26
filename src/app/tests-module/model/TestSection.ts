import {Question} from "../../questions-module/model/Question";
import {Test} from "./Test";
/**
 * Created by Yubar on 3/17/2017.
 */

export class TestSection {

  id:number;
  number:number;
  answeredQuestions: Question[] = [];
  test:Test;

}
