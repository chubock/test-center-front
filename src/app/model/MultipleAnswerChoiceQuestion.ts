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

}
