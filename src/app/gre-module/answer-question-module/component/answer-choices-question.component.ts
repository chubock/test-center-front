import {AnswerQuestionComponent} from "./answer-question.component";
import {DomSanitizer} from "@angular/platform-browser";
import {ChoiceQuestion} from "../../questions-module/model/choice-question";
/**
 * Created by Yubar on 3/21/2017.
 */

export abstract class AnswerChoicesQuestionComponent<T extends ChoiceQuestion> extends AnswerQuestionComponent<T> {
  multipleAnswer:boolean = false;

  constructor(sanitizer:DomSanitizer){
    super(sanitizer);
  }


}
