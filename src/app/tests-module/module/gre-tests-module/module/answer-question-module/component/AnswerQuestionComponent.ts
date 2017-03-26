import {Input, Output, EventEmitter} from "@angular/core";
/**
 * Created by Yubar on 3/21/2017.
 */

export abstract class AnswerQuestionComponent<T> {

  @Input() question: T;
  @Input() mode: string = "ANSWER";
  @Output() answerChanged:EventEmitter<String> = new EventEmitter<String>();

  abstract onAnswerChanged(): void;
}
