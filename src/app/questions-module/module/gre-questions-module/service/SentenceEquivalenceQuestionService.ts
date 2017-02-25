import {Injectable, Inject} from "@angular/core";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import {AbstractQuestionService} from "../../../../questions-module/service/AbstractQuestionService";
import {SentenceEquivalenceQuestion} from "../model/SentenceEquivalenceQuestion";

/**
 * Created by Yubar on 1/19/2017.
 */

@Injectable()
export class SentenceEquivalenceQuestionService extends AbstractQuestionService<SentenceEquivalenceQuestion>{

  protected get url(): string{
    return this.serverUrl + "/sentenceEquivalenceQuestions";
  }

  constructor(protected http:Http){
    super();
  }

  newInstance():SentenceEquivalenceQuestion{
    return new SentenceEquivalenceQuestion();
  };

}
