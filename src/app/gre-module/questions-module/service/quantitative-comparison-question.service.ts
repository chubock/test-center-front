import {Injectable} from "@angular/core";
import {AuthHttp} from "angular2-jwt";

import 'rxjs/add/operator/toPromise';

import {QuantitativeComparisonQuestion} from "../model/quantitative-comparison-question";
import {AbstractQuestionService} from "./abstract-question.service";
import {environment} from "../../../../environments/environment";

/**
 * Created by Yubar on 1/19/2017.
 */

@Injectable()
export class QuantitativeComparisonQuestionService extends AbstractQuestionService<QuantitativeComparisonQuestion>{

  protected get url(): string{
    return environment.apiEndPoint + "/gre-service/question/quantitative-comparison";
  }

  constructor(protected http:AuthHttp){
    super();
  }

  newInstance():QuantitativeComparisonQuestion{
    return new QuantitativeComparisonQuestion();
  };

}
