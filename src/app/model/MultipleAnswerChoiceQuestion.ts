import {ChoiceQuestion} from "./ChoiceQuestion";
/**
 * Created by Yubar on 1/7/2017.
 */

export class MultipleAnswerChoiceQuestion extends ChoiceQuestion{

  answers: number[] = [];
  selects: number[] = [];

  constructor(text: string = "", numberOfChoices: number = 3) {
    super(text, numberOfChoices);
  }

  get multipleChoice(): boolean {
    return true;
  }

  isSelected(key:number): boolean {
    return this.selects.indexOf(key) != -1;
  }

  isAnswer(key:number): boolean {
    return this.answers.indexOf(key) != -1;
  }

  copy(question: MultipleAnswerChoiceQuestion): void {
    super.copy(question);
    question.answers.length = 0;
    question.selects.length = 0;
    this.answers.forEach(answer => question.answers.push(answer));
    this.selects.forEach(selected => question.selects.push(selected));
  }

}
