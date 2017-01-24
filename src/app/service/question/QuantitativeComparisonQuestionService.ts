import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import {AbstractQuestionService} from "./AbstractQuestionService";
import {QuantitativeComparisonQuestion} from "../../model/question/QuantitativeComparisonQuestion";

/**
 * Created by Yubar on 1/19/2017.
 */

@Injectable()
export class QuantitativeComparisonQuestionService extends AbstractQuestionService<QuantitativeComparisonQuestion>{

  protected get url(): string{
    return "http://localhost:8080/quantitativeComparisonQuestions";
  }

  constructor(protected http:Http){
    super();
  }

  newInstance():QuantitativeComparisonQuestion{
    return new QuantitativeComparisonQuestion();
  };

}
