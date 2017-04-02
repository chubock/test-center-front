import {Component, DoCheck, OnInit} from "@angular/core";
import {
  SelectInPassageQuestion,
  PassageParagraph
} from "../../../../../../../questions-module/module/gre-questions-module/model/SelectInPassageQuestion";
import {AnswerQuestionComponent} from "../AnswerQuestionComponent";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "answer-select-in-passage-question",
  templateUrl: "./answer-select-in-passage-question-component.html",
  styles: ['.choice-text{cursor: pointer}', '.choice-text-selected{font-weight: bolder}']
})
export class AnswerSelectInPassageQuestionComponent extends AnswerQuestionComponent<SelectInPassageQuestion> implements OnInit{

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

}
