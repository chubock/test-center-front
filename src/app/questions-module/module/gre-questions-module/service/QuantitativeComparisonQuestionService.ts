import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import {AbstractQuestionService} from "../../../../questions-module/service/AbstractQuestionService";
import {QuantitativeComparisonQuestion} from "../model/QuantitativeComparisonQuestion";

/**
 * Created by Yubar on 1/19/2017.
 */

@Injectable()
export class QuantitativeComparisonQuestionService extends AbstractQuestionService<QuantitativeComparisonQuestion>{

  protected get url(): string{
    return this.serverUrl + "admin/quantitativeComparisonQuestions";
  }

  constructor(protected http:Http){
    super();
  }

  newInstance():QuantitativeComparisonQuestion{
    return new QuantitativeComparisonQuestion();
  };

}
