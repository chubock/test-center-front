import {Injectable} from "@angular/core";
import {AuthHttp} from "angular2-jwt";

import 'rxjs/add/operator/toPromise';

import {QuantitativeSingleAnswerQuestion} from "../model/quantitative-single-answer-question";
import {AbstractQuestionService} from "./abstract-question.service";
import {environment} from "../../../../environments/environment";

/**
 * Created by Yubar on 1/19/2017.
 */

@Injectable()
export class QuantitativeSingleAnswerQuestionService extends AbstractQuestionService<QuantitativeSingleAnswerQuestion>{

  protected get url(): string{
    return environment.apiEndPoint + "/gre-service/question/quantitative-single-answer";
  }

  constructor(protected http:AuthHttp){
    super();
  }

  newInstance():QuantitativeSingleAnswerQuestion{
    return new QuantitativeSingleAnswerQuestion();
  };

}
