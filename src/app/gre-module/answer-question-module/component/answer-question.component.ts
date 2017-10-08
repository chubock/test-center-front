import {Input, Output, EventEmitter} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
import {Question} from "../../questions-module/model/question";
import {environment} from "../../../../environments/environment";


/**
 * Created by Yubar on 3/21/2017.
 */

export abstract class AnswerQuestionComponent<T extends Question> {

  @Input() score:boolean = false;
  @Input() question: T;
  @Input() mode: string = "ANSWER";
  @Output() answerChanged:EventEmitter<String> = new EventEmitter<String>();
  @Output() scoreChanged:EventEmitter<Question> = new EventEmitter<Question>();
  serverUrl:string = environment.apiEndPoint;

  constructor(private sanitizer:DomSanitizer){}

  abstract onAnswerChanged(): void;

  getDocument() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.serverUrl + 'files/' + this.question.document);
  }

  scoreQuestion():void {
    this.scoreChanged.emit(this.question);
  }
}
