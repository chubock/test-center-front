import {ChoiceQuestion} from "./ChoiceQuestion";
/**
 * Created by Yubar on 1/7/2017.
 */

export class SingleAnswerChoiceQuestion extends ChoiceQuestion {
  
  selected: number;
  answer: number;
  
  constructor(text: string = "", numberOfChoices: number = 3) {
    super(text, numberOfChoices);
  }
  
}
