import {Injectable} from "@angular/core";
import {AuthHttp} from "angular2-jwt";

import 'rxjs/add/operator/toPromise';

import {NumericQuestion} from "../model/numeric-question";
import {AbstractQuestionService} from "./abstract-question.service";
import {environment} from "../../../../environments/environment";

/**
 * Created by Yubar on 1/19/2017.
 */

@Injectable()
export class NumericQuestionService extends AbstractQuestionService<NumericQuestion>{

  protected get url(): string{
    return environment.apiEndPoint + "/gre-service/question/numeric";
  }

  constructor(protected http:AuthHttp){
    super();
  }

  newInstance():NumericQuestion{
    return new NumericQuestion();
  };

}
