import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import {AbstractQuestionService} from "../../../../questions-module/service/AbstractQuestionService";
import {NumericQuestion} from "../model/NumericQuestion";

/**
 * Created by Yubar on 1/19/2017.
 */

@Injectable()
export class NumericQuestionService extends AbstractQuestionService<NumericQuestion>{

  protected get url(): string{
    return this.serverUrl + "admin/numericQuestions";
  }

  constructor(protected http:Http){
    super();
  }

  newInstance():NumericQuestion{
    return new NumericQuestion();
  };

}
