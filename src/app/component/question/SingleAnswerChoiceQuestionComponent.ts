import {Component, Input} from "@angular/core";
import {SingleAnswerChoiceQuestion} from "../../model/question/SingleAnswerChoiceQuestion";
import {ChoiceQuestionComponent} from "./ChoiceQuestionComponent";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "single-answer-choice-question",
  templateUrl: "./choice-question-component.html"
})
export class SingleAnswerChoiceQuestionComponent<T extends SingleAnswerChoiceQuestion> extends ChoiceQuestionComponent<SingleAnswerChoiceQuestion>{

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
