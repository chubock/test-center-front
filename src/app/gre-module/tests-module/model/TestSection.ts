import {Test} from "./Test";
import {Question} from "../../questions-module/model/question";
/**
 * Created by Yubar on 3/17/2017.
 */

export class TestSection {

  id:number;
  number:number;
  answeredQuestions: Question[] = [];
  test:Test;
  remainingSeconds:number;
  lastQuestionNumber:number;

}

export let greSections = {
  "GRE_ANALYTICAL_WRITING_ISSUE": {label: "Analytical Writing / Analyze & Issue", time: 1, breakTime: 1},
  "GRE_ANALYTICAL_WRITING_ARGUMENT": {label: "Analytical Writing / Analyze & Argument", time: 30, breakTime: 10},
  "GRE_VERBAL_REASONING_1": {label: "Verbal Reasoning", time: 30, breakTime: 1},
  "GRE_VERBAL_REASONING_2": {label: "Verbal Reasoning", time: 30, breakTime: 1},
  "GRE_VERBAL_UNSCORE": {label: "Verbal Reasoning", time: 30, breakTime: 1},
  "GRE_QUANTITATIVE_REASONING_1": {label: "Quantitative Reasoning", time: 35, breakTime: 1},
  "GRE_QUANTITATIVE_REASONING_2": {label: "Quantitative Reasoning", time: 35, breakTime: 1},
  "GRE_QUANTITATIVE_UNSCORE": {label: "Quantitative Reasoning", time: 35, breakTime: 1}
};
