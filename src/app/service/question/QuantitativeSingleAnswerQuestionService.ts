import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import {AbstractQuestionService} from "./AbstractQuestionService";
import {QuantitativeSingleAnswerQuestion} from "../../model/question/QuantitativeSingleAnswerQuestion";

/**
 * Created by Yubar on 1/19/2017.
 */

@Injectable()
export class QuantitativeSingleAnswerQuestionService extends AbstractQuestionService<QuantitativeSingleAnswerQuestion>{

  protected get url(): string{
    return this.serverUrl + "/quantitativeSingleAnswerQuestions";
  }

  constructor(protected http:Http){
    super();
  }

  newInstance():QuantitativeSingleAnswerQuestion{
    return new QuantitativeSingleAnswerQuestion();
  };

}
