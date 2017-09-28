import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import {AbstractQuestionService} from "../../../../questions-module/service/AbstractQuestionService";
import {QuantitativeMultipleAnswerQuestion} from "../model/QuantitativeMultipleAnswerQuestion";

/**
 * Created by Yubar on 1/19/2017.
 */

@Injectable()
export class QuantitativeMultipleAnswerQuestionService extends AbstractQuestionService<QuantitativeMultipleAnswerQuestion>{

  protected get url(): string{
    return this.serverUrl + "admin/quantitativeMultipleAnswerQuestions";
  }

  constructor(protected http:Http){
    super();
  }

  newInstance():QuantitativeMultipleAnswerQuestion{
    return new QuantitativeMultipleAnswerQuestion();
  };

}
