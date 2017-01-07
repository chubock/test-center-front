import {Component} from '@angular/core';
import {Choice} from "./model/Choice";
import {SingleAnswerChoiceQuestion} from "./model/SingleAnswerChoiceQuestion";
import {MultipleAnswerChoiceQuestion} from "./model/MultipleAnswerChoiceQuestion";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  singleAnswerChoiceQuestion: SingleAnswerChoiceQuestion;
  multipleAnswerChoiceQuestion: MultipleAnswerChoiceQuestion;

  constructor() {
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
  }
}
