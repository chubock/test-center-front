import {Component, Directive} from '@angular/core';
import {ChoiceQuestion} from "./model/ChoiceQuestion";
import {Choice} from "./model/Choice";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  question: ChoiceQuestion;

  constructor() {
    this.question = new ChoiceQuestion("This is a sample Question Choice");
    this.question.pushChoice(new Choice("This is first choice"));
    this.question.pushChoice(new Choice("This is second choice"));
    this.question.pushChoice(new Choice("This is third choice"));
    this.question.answers = [1,2];
    this.question.selects = [0,1];
  }
}
