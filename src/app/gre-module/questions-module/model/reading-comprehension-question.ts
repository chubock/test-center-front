import {ReadingComprehensionSingleAnswerQuestion} from "./reading-comprehension-single-answer-question";
import {ReadingComprehensionMultipleAnswerQuestion} from "./reading-comprehension-multiple-answer-question";
import {SelectInPassageQuestion} from "./select-in-passage-question";
import {InnerQuestion} from "./inner-question";
import {Question} from "./question";
/**
 * Created by Yubar on 1/27/2017.
 */

export class ReadingComprehensionQuestion extends Question {

  type:string = "MEDIUM";
  selectInPassageQuestions: SelectInPassageQuestion[] = [];
  multipleAnswerQuestions: ReadingComprehensionMultipleAnswerQuestion[] = [];
  singleAnswerQuestions: ReadingComprehensionSingleAnswerQuestion[] = [];
  items: InnerQuestion<ReadingComprehensionQuestion>[] = [];

  pushQuestion(question: InnerQuestion<ReadingComprehensionQuestion>): void {
    question.setNumber(this.selectInPassageQuestions.length + this.multipleAnswerQuestions.length + this.singleAnswerQuestions.length);
    switch (question.type()) {
      case "select-in-passage":
        this.selectInPassageQuestions.push(question as SelectInPassageQuestion);
        break;
      case "multiple-answer":
        this.multipleAnswerQuestions.push(question as ReadingComprehensionMultipleAnswerQuestion);
        break;
      case "single-answer":
        this.singleAnswerQuestions.push(question as ReadingComprehensionSingleAnswerQuestion);
    }
    this.items.push(question);
  }

  removeQuestion(number: number): void {
    this.items.splice(number, 1);
    for (let i=0; i< this.selectInPassageQuestions.length; i++)
      if (this.selectInPassageQuestions[i].number == number){
        this.selectInPassageQuestions.splice(i, 1);
        return this.shiftQuestionsFromNumber(number);
      }
    for (let i=0; i< this.multipleAnswerQuestions.length; i++)
      if (this.multipleAnswerQuestions[i].number == number){
        this.multipleAnswerQuestions.splice(i, 1);
        return this.shiftQuestionsFromNumber(number);
      }
    for (let i=0; i< this.singleAnswerQuestions.length; i++)
      if (this.singleAnswerQuestions[i].number == number){
        this.singleAnswerQuestions.splice(i, 1);
        return this.shiftQuestionsFromNumber(number);
      }
  }

  private shiftQuestionsFromNumber(number:number): void {
    this.selectInPassageQuestions.forEach(question => {
      if (question.number > number)
        question.number--;
    });
    this.multipleAnswerQuestions.forEach(question => {
      if (question.number > number)
        question.number--;
    });
    this.singleAnswerQuestions.forEach(question => {
      if (question.number > number)
        question.number--;
    });
  }

  copy(question: ReadingComprehensionQuestion): void {

    super.copy(question);
    this.items = [];
    this.selectInPassageQuestions = [];
    this.multipleAnswerQuestions = [];
    this.singleAnswerQuestions = [];
    if (question.selectInPassageQuestions)
      question.selectInPassageQuestions.forEach(selectInPassageQuestion => {
        let q = new SelectInPassageQuestion();
        q.copy(selectInPassageQuestion);
        this.selectInPassageQuestions.push(q);
        this.items.push(q);
      });
    if (question.multipleAnswerQuestions)
      question.multipleAnswerQuestions.forEach(multipleAnswerQuestion => {
        let q = new ReadingComprehensionMultipleAnswerQuestion();
        q.copy(multipleAnswerQuestion);
        this.multipleAnswerQuestions.push(q);
        this.items.push(q);
      });
    if (question.singleAnswerQuestions)
      question.singleAnswerQuestions.forEach(singleAnswerQuestion => {
        let q = new ReadingComprehensionSingleAnswerQuestion();
        q.copy(singleAnswerQuestion);
        this.singleAnswerQuestions.push(q);
        this.items.push(q);
      });
    this.items.sort((a, b) => {
      return a.getNumber() - b.getNumber();
    });
  }

  toJSON():any {
    let ret = super.toJSON();
    ret.selectInPassageQuestions = this.selectInPassageQuestions;
    ret.singleAnswerQuestions = this.singleAnswerQuestions;
    ret.multipleAnswerQuestions = this.multipleAnswerQuestions;
    return ret;
  }

}
