 import {Input} from "@angular/core";
import {SingleAnswerChoiceQuestion} from "../../model/SingleAnswerChoiceQuestion";
import {AbstractChoiceQuestionComponent} from "./AbstractChoiceQuestionComponent";
/**
 * Created by Yubar on 1/5/2017.
 */

export class SingleAnswerChoiceQuestionComponent<T extends SingleAnswerChoiceQuestion> extends AbstractChoiceQuestionComponent<SingleAnswerChoiceQuestion>{

  @Input() question: SingleAnswerChoiceQuestion = new SingleAnswerChoiceQuestion();
  backup: SingleAnswerChoiceQuestion = new SingleAnswerChoiceQuestion();

  ngOnInit():void {
    this.question.prepare();
    super.ngOnInit();
  }

  save(): void {
    this.questionService.save(this.question).then((question) => {
      question.prepare();
      this.backup = question;
      this.cancel();
      this.onSave.emit(question);
    });
  }

}
