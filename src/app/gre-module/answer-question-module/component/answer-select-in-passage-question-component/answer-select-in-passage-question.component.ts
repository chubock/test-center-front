import {Component, OnInit} from "@angular/core";
import {AnswerQuestionComponent} from "../answer-question.component";
import {DomSanitizer} from "@angular/platform-browser";
import {PassageParagraph, SelectInPassageQuestion} from "../../../questions-module/model/select-in-passage-question";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "answer-select-in-passage-question",
  templateUrl: "./answer-select-in-passage-question.component.html",
  styleUrls: ['./style.css']
})
export class AnswerSelectInPassageQuestionComponent extends AnswerQuestionComponent<SelectInPassageQuestion> implements OnInit{

  constructor(sanitizer:DomSanitizer){
    super(sanitizer);
  }

  paragraphs:PassageParagraph[]= [];

  ngOnInit():void {
    this.paragraphs = [];
    let matchResult = this.question.text.match(/<p>(.*?)<\/p>/g);
    if (matchResult == null)
      return;
    let index = 0;
    for (let i=0; i< matchResult.length; i++) {
      let paragraph = new PassageParagraph(matchResult[i].substring(3, matchResult[i].length - 4), index);
      this.paragraphs.push(paragraph);
      index += paragraph.choicesCount;
    }
  }

  onAnswerChanged(): void {
    if (this.question.selected != null)
      this.answerChanged.emit(this.question.selected + "");
  }

  answer(number:number):void {
    if (this.mode == "ANSWER"){
      this.question.selected = number;
      this.onAnswerChanged()
    }
  }

}
