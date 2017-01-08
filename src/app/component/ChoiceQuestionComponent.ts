import {QuestionComponent} from "./QuestionComponent";
import {Input} from "@angular/core";
/**
 * Created by yubar on 1/8/17.
 */
export abstract class ChoiceQuestionComponent extends QuestionComponent{

  @Input() dynamicChoices: boolean = false;

  constructor() {super();}

}
