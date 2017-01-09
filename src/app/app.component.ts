import {Component} from '@angular/core';
import {Choice} from "./model/Choice";
import {SingleAnswerChoiceQuestion} from "./model/SingleAnswerChoiceQuestion";
import {MultipleAnswerChoiceQuestion} from "./model/MultipleAnswerChoiceQuestion";
import {WritingQuestion} from "./model/WritingQuestion";
import {NumericQuestion} from "./model/NumericQuestion";
import {SelectInPassageQuestion} from "./model/SelectInPassageQuestion";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  singleAnswerChoiceQuestion: SingleAnswerChoiceQuestion;
  multipleAnswerChoiceQuestion: MultipleAnswerChoiceQuestion;
  writingQuestion: WritingQuestion;
  numericQuestion: NumericQuestion;
  fractionNumericQuestion: NumericQuestion;
  selectInPassageQuestion: SelectInPassageQuestion;

  constructor() {

    this.selectInPassageQuestion = new SelectInPassageQuestion("This is a sample Question");

    this.singleAnswerChoiceQuestion = new SingleAnswerChoiceQuestion("This is a sample Question Choice");
    this.singleAnswerChoiceQuestion.choices[0].text = "This is first choice";
    this.singleAnswerChoiceQuestion.choices[1].text = "This is second choice";
    this.singleAnswerChoiceQuestion.choices[2].text = "This is third choice";
    this.singleAnswerChoiceQuestion.answer = 1;
    this.singleAnswerChoiceQuestion.selected = 2;

    this.multipleAnswerChoiceQuestion = new MultipleAnswerChoiceQuestion("This is a sample Question Choice");
    this.multipleAnswerChoiceQuestion.choices[0].text = "This is first choice";
    this.multipleAnswerChoiceQuestion.choices[1].text = "This is second choice";
    this.multipleAnswerChoiceQuestion.choices[2].text = "This is third choice";
    this.multipleAnswerChoiceQuestion.answers = [1, 2];
    this.multipleAnswerChoiceQuestion.selects = [0, 1];

    this.writingQuestion = new WritingQuestion("This is a sample Question Choice");

    this.numericQuestion = new NumericQuestion("This is a sample Question Choice");
    this.numericQuestion.nominatorAnswer = 10;
    this.fractionNumericQuestion = new NumericQuestion("This is a sample Question Choice", true);
    this.fractionNumericQuestion.nominatorAnswer = 2;
    this.fractionNumericQuestion.denominatorAnswer = 3;

  }
}
