import {Question} from "../../../../questions-module/model/Question";
import {DataInterpretationNumericQuestion} from "./DataInterpretationNumericQuestion";
import {DataInterpretationMultipleAnswerQuestion} from "./DataInterpretationMultipleAnswerQuestion";
import {DataInterpretationSingleAnswerQuestion} from "./DataInterpretationSingleAnswerQuestion";
import {DataInterpretationSetQuestionItem} from "./DataInterpretationSetQuestionItem";
/**
 * Created by Yubar on 1/27/2017.
 */

export class DataInterpretationSetQuestion extends Question {

  numericQuestions: DataInterpretationNumericQuestion[] = [];
  multipleAnswerQuestions: DataInterpretationMultipleAnswerQuestion[] = [];
  singleAnswerQuestions: DataInterpretationSingleAnswerQuestion[] = [];
  items: DataInterpretationSetQuestionItem[] = [];

  pushQuestion(question: DataInterpretationSetQuestionItem): void {
    question.setNumber(this.numericQuestions.length + this.multipleAnswerQuestions.length + this.singleAnswerQuestions.length);
    switch (question.type()) {
      case "numeric-answer":
        this.numericQuestions.push(question as DataInterpretationNumericQuestion);
        break;
      case "multiple-answer":
        this.multipleAnswerQuestions.push(question as DataInterpretationMultipleAnswerQuestion);
        break;
      case "single-answer":
        this.singleAnswerQuestions.push(question as DataInterpretationSingleAnswerQuestion);
    }
    this.items.push(question);
  }

  removeQuestion(number: number): void {
    this.items.splice(number, 1);
    for (let i=0; i< this.numericQuestions.length; i++)
      if (this.numericQuestions[i].number == number){
        this.numericQuestions.splice(i, 1);
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
    this.numericQuestions.forEach(question => {
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

  copy(question: DataInterpretationSetQuestion): void {

    super.copy(question);
    this.items = [];
    this.numericQuestions = [];
    this.multipleAnswerQuestions = [];
    this.singleAnswerQuestions = [];
    question.numericQuestions.forEach(numericQuestion => {
      let q = new DataInterpretationNumericQuestion();
      q.copy(numericQuestion);
      this.numericQuestions.push(q);
      this.items.push(q);
    });
    question.multipleAnswerQuestions.forEach(multipleAnswerQuestion => {
      let q = new DataInterpretationMultipleAnswerQuestion();
      q.copy(multipleAnswerQuestion);
      this.multipleAnswerQuestions.push(q);
      this.items.push(q);
    });
    question.singleAnswerQuestions.forEach(singleAnswerQuestion => {
      let q = new DataInterpretationSingleAnswerQuestion();
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
    ret.numericQuestions = this.numericQuestions;
    ret.singleAnswerQuestions = this.singleAnswerQuestions;
    ret.multipleAnswerQuestions = this.multipleAnswerQuestions;
    return ret;
  }

}
