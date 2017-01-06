import {Component, Input, OnInit} from "@angular/core";
import {ChoiceQuestion} from "../model/ChoiceQuestion";
import {Choice} from "../model/Choice";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "choice-question",
  templateUrl: "../template/choice-question-component.html",
  styles: [`.control-text{padding-top: 7px;}`]
})
export class ChoiceQuestionComponent implements OnInit{
  @Input() question: ChoiceQuestion = null;
  @Input() numberOfChoices: number = 3;
  @Input() multipleAnswer: boolean = false;
  @Input() dynamicChoices: boolean = false;
  @Input() mode:string = "EDIT";
  
  constructor() {}
  
  ngOnInit():void {
    if (this.question == null) {
      this.question = new ChoiceQuestion();
      for (var i=0; i< this.numberOfChoices; i++)
        this.question.pushChoice();
    }
  }
  
}
