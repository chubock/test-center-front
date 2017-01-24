import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import {AbstractQuestionService} from "./AbstractQuestionService";
import {QuantitativeMultipleAnswerQuestion} from "../../model/question/QuantitativeMultipleAnswerQuestion";

/**
 * Created by Yubar on 1/19/2017.
 */

@Injectable()
export class QuantitativeMultipleAnswerQuestionService extends AbstractQuestionService<QuantitativeMultipleAnswerQuestion>{

  protected get url(): string{
    return "http://localhost:8080/quantitativeMultipleAnswerQuestions";
  }

  constructor(protected http:Http){
    super();
  }

  newInstance():QuantitativeMultipleAnswerQuestion{
    return new QuantitativeMultipleAnswerQuestion();
  };

}
