import {Component, Input} from "@angular/core";
import {SelectInPassageQuestion, PassageParagraph} from "../../model/select-in-passage-question";
import {AbstractQuestionComponent} from "../abstract-question.component";
import {FileService} from "../../../../shared-module/service/file.service";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "select-in-passage-question",
  templateUrl: "./select-in-passage-question.component.html",
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
