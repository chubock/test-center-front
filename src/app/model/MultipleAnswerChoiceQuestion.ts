import {ChoiceQuestion} from "./ChoiceQuestion";
import {ChangeDetectorRef, ApplicationRef, NgZone} from "@angular/core";
import {log} from "util";
/**
 * Created by Yubar on 1/7/2017.
 */

export class MultipleAnswerChoiceQuestion extends ChoiceQuestion{

  constructor(text: string = "", numberOfChoices: number = 3, public maxAnswerCount:number = null) {
    super(text, numberOfChoices);
  }

  get answers(): number[] {
    var answers = [];
    this.choices.forEach(choice => {
      if (choice.answer)
        answers.push(choice.number);
    });
    return answers;
  }

  get selects(): number[] {
    var selects = [];
    this.choices.forEach(choice => {
      if (choice.selected)
        selects.push(choice.number);
    });
    return selects;
  }

  copy(question: MultipleAnswerChoiceQuestion): void {
    super.copy(question);
    question.maxAnswerCount = this.maxAnswerCount;
  }

}
