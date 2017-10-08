import {Injectable} from "@angular/core";
import {AuthHttp} from "angular2-jwt";

import 'rxjs/add/operator/toPromise';

import {DataInterpretationSetQuestion} from "../model/data-interpretation-set-question";
import {AbstractQuestionService} from "./abstract-question.service";
import {environment} from "../../../../environments/environment";

/**
 * Created by Yubar on 1/19/2017.
 */

@Injectable()
export class DataInterpretationSetQuestionService extends AbstractQuestionService<DataInterpretationSetQuestion>{

  protected get url(): string{
    return environment.apiEndPoint + "/gre-service/question/data-interpretation-set";
  }

  constructor(protected http:AuthHttp){
    super();
  }

  newInstance():DataInterpretationSetQuestion{
    return new DataInterpretationSetQuestion();
  };

}
