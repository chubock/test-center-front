import {Question} from "./Question";
import {SingleAnswerChoiceQuestion} from "./SingleAnswerChoiceQuestion";
import {Choice} from "./Choice";
/**
 * Created by Yubar on 1/11/2017.
 */

export class TextCompletionQuestion extends Question {

  _questions:SingleAnswerChoiceQuestion[] = [];

  constructor(text:string = "") {
    super(text);
    this.pushQuestion(new SingleAnswerChoiceQuestion("", 5));
  }

  get questions(): SingleAnswerChoiceQuestion[] {
    return this._questions;
  }

  get matrix():Choice[][] {
    var ret = [];
    if (this.questions.length == 1) {
      for (var i=0; i< this.questions[0].choices.length; i++) {
        ret.push([]);
        ret[i].push(this.questions[0].choices[i]);
      }
    } else {
      for (var i=0; i<3; i++) {
        ret.push([]);
        for (var j=0; j< this.questions.length; j++)
          ret[i].push(this.questions[j].choices[i]);
      }
    }
    return ret;
  }

  pushQuestion(question:SingleAnswerChoiceQuestion = new SingleAnswerChoiceQuestion("", 3)): void {
    if (this.questions.length > 2)
      throw new Error("Invalid Operation");
    if (this.questions.length == 1) {
      this.questions[0].popChoice();
      this.questions[0].popChoice();
    }
    this.questions.push(question);
  }

  popQuestion(): SingleAnswerChoiceQuestion {
    if (this.questions.length < 2)
      throw new Error("Invalid Operation");
    var ret = this.questions[this.questions.length - 1];
    this.questions.splice(-1, 1);
    if (this.questions.length == 1) {
      this.questions[0].pushChoice();
      this.questions[0].pushChoice();
    }
    return ret;
  }

  copy(textCompletionQuestion: TextCompletionQuestion): void {
    super.copy(textCompletionQuestion);
    textCompletionQuestion.questions.length = 0;
    this.questions.forEach(question => {
      var q = new SingleAnswerChoiceQuestion();
      question.copy(q);
      textCompletionQuestion.questions.push(q);
    });
  }

}
