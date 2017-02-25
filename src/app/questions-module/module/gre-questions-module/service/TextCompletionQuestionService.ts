import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import {AbstractQuestionService} from "../../../../questions-module/service/AbstractQuestionService";
import {TextCompletionQuestion} from "../model/TextCompletionQuestion";

/**
 * Created by Yubar on 1/19/2017.
 */

@Injectable()
export class TextCompletionQuestionService extends AbstractQuestionService<TextCompletionQuestion>{

  protected get url(): string{
    return this.serverUrl + "/textCompletionQuestions";
  }

  constructor(protected http:Http){
    super();
  }

  newInstance():TextCompletionQuestion{
    return new TextCompletionQuestion();
  };

}
