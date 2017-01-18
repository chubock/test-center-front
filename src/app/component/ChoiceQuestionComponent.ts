import {QuestionComponent} from "./QuestionComponent";
import {Input} from "@angular/core";
/**
 * Created by yubar on 1/8/17.
 */
export abstract class ChoiceQuestionComponent extends QuestionComponent{

  @Input() dynamicChoices: boolean = false;

  get multipleChoice(): boolean {
    return false;
  }

  get editableChoices(): boolean {
    return true;
  }

  get dynamicMaxAnswerCount(): boolean {
    return false;
  }

}
