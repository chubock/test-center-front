import {Component, Input} from "@angular/core";
import {AbstractQuestionComponent} from "../../../../../questions-module/component/helper/AbstractQuestionComponent";
import {SelectInPassageQuestion} from "../../model/SelectInPassageQuestion";
import {FileService} from "../../../../../shared-module/service/FileService";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "select-in-passage-question",
  templateUrl: "./select-in-passage-question-component.html",
  styles: ['.choice-text{cursor: pointer}', '.choice-text-selected{font-weight: bolder}']
})
export class SelectInPassageQuestionComponent extends AbstractQuestionComponent<SelectInPassageQuestion>{

  nested:boolean = true;
  @Input() question: SelectInPassageQuestion = new SelectInPassageQuestion();
  @Input() backup: SelectInPassageQuestion = new SelectInPassageQuestion();
  paragraphs:PassageParagraph[]= [];

  constructor(protected fileService: FileService) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.questionTextChangedListener(this.question.text);
  }

  questionTextChangedListener(text:string): void {
    this.paragraphs = [];
    var matchResult = text.match(/<p>(.*?)<\/p>/g);
    if (matchResult == null)
      return;
    var index = 0;
    for (var i=0; i< matchResult.length; i++) {
      var paragraph = new PassageParagraph(matchResult[i].substring(3, matchResult[i].length - 4), index);
      this.paragraphs.push(paragraph);
      index += paragraph.choicesCount;
    }
    if (index <= this.question.answer)
      this.question.answer = null;
  }

  cancel(): void {
    if (confirm("Are you sure ? ")) {
      this.onDelete.emit(this.question);
    }
  }

}

class PassageTextFraction {
  constructor(public text:string, public number:number){};
}

class PassageParagraph {
  textFractions:PassageTextFraction[] = [];

  constructor(text:string, index:number) {
    var matchResult = text.match(/<u>(.*?)<\/u>/g);
    if (matchResult == null || matchResult.length == 0) {
      this.textFractions.push(new PassageTextFraction(text, -1));
    } else {
      var indexOf = text.indexOf(matchResult[0]);
      if (indexOf != 0)
        this.textFractions.push(new PassageTextFraction(text.substring(0, indexOf), -1));
      var lastIndex = indexOf + matchResult[0].length;
      this.textFractions.push(new PassageTextFraction(text.substring(indexOf + 3, lastIndex - 4), index));
      for (var i=1; i< matchResult.length; i++) {
        indexOf = text.indexOf(matchResult[i]);
        this.textFractions.push(new PassageTextFraction(text.substring(lastIndex, indexOf), -1));
        lastIndex = indexOf + matchResult[i].length;
        this.textFractions.push(new PassageTextFraction(text.substring(indexOf + 3, lastIndex - 4), index + i));
      }
      if (lastIndex != text.length)
        this.textFractions.push(new PassageTextFraction(text.substring(lastIndex), -1));
    }
  };

  get choicesCount():number {
    var ret = 0;
    this.textFractions.forEach(function (item) {
      if (item.number != -1)
        ret ++;
    });
    return ret;
  }
}
