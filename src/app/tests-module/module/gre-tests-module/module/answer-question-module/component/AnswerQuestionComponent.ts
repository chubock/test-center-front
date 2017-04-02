import {Input, Output, EventEmitter} from "@angular/core";
import {apiEndPoint} from "../../../../../../AppConfig";
/**
 * Created by Yubar on 3/21/2017.
 */

export abstract class AnswerQuestionComponent<T> {

  @Input() question: T;
  @Input() mode: string = "ANSWER";
  @Output() answerChanged:EventEmitter<String> = new EventEmitter<String>();
  direction:string;
  serverUrl:string = apiEndPoint;

  abstract onAnswerChanged(): void;
}
