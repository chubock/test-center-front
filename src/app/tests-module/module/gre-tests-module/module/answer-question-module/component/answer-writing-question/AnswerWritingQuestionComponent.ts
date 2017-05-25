import {Component} from "@angular/core";
import {WritingQuestion} from "../../../../../../../questions-module/module/gre-questions-module/model/WritingQuestion";
import {AnswerQuestionComponent} from "../AnswerQuestionComponent";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "answer-writing-question",
  templateUrl: "./answer-writing-question-component.html"
})
export class AnswerWritingQuestionComponent extends AnswerQuestionComponent<WritingQuestion> {

  cutBuffer:string;
  undoBuffer:string[] = [];
  redoBuffer:string[] = [];
  lastActionDate:Date = new Date();

  onAnswerChanged(): void {
    this.answerChanged.emit(this.question.answer);
  }

  cut(start:number, end:number):void {
    this.cutBuffer = this.question.answer.slice(start, end);
    this.undoBuffer.push(this.question.answer);
    this.question.answer = this.question.answer.slice(0, start) + this.question.answer.slice(end, this.question.answer.length);
    this.onAnswerChanged();
  }

  paste(start:number, end:number):void {
    this.undoBuffer.push(this.question.answer);
    this.question.answer = this.question.answer.slice(0, start) + this.cutBuffer + this.question.answer.slice(end, this.question.answer.length);
    this.cutBuffer = null;
    this.onAnswerChanged();
  }

  undo():void {
    this.redoBuffer.push(this.question.answer);
    this.question.answer = this.undoBuffer.pop();
    this.onAnswerChanged();
  }

  redo():void {
    this.undoBuffer.push(this.question.answer);
    this.question.answer = this.redoBuffer.pop();
    this.onAnswerChanged();
  }

  handleBackspace(key):boolean {
    let currentDate:Date = new Date();
    if ((key.keyCode > 15 && key.keyCode < 21) || (key.keyCode == 27) || (key.keyCode > 32 && key.keyCode < 41) || (key.keyCode == 45) || (key.keyCode > 90 && key.keyCode < 94) || (key.keyCode > 111 && key.keyCode < 124) || (key.keyCode > 143 && key.keyCode < 146))
      return true;
    if (key.keyCode == 32 || key.keyCode == 13 || currentDate.getSeconds() - this.lastActionDate.getSeconds() > 1) {
      this.undoBuffer.push(this.question.answer);
      this.redoBuffer.forEach(text => this.undoBuffer.push(text));
      this.redoBuffer = [];
      this.onAnswerChanged();
    }
    this.lastActionDate = currentDate;
  }

}
