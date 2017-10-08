import {Injectable} from "@angular/core";
import {AuthHttp} from "angular2-jwt";

import 'rxjs/add/operator/toPromise';

import {QuantitativeMultipleAnswerQuestion} from "../model/quantitative-multiple-answer-question";
import {AbstractQuestionService} from "./abstract-question.service";
import {environment} from "../../../../environments/environment";

/**
 * Created by Yubar on 1/19/2017.
 */

@Injectable()
export class QuantitativeMultipleAnswerQuestionService extends AbstractQuestionService<QuantitativeMultipleAnswerQuestion>{

  protected get url(): string{
    return environment.apiEndPoint + "/gre-service/question/quantitative-multiple-answer";
  }

  constructor(protected http:AuthHttp){
    super();
  }

  newInstance():QuantitativeMultipleAnswerQuestion{
    return new QuantitativeMultipleAnswerQuestion();
  };

}
