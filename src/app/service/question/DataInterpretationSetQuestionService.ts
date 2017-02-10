import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import {AbstractQuestionService} from "./AbstractQuestionService";
import {NumericQuestion} from "../../model/question/NumericQuestion";
import {DataInterpretationSetQuestion} from "../../model/question/DataInterpretationSetQuestion";

/**
 * Created by Yubar on 1/19/2017.
 */

@Injectable()
export class DataInterpretationSetQuestionService extends AbstractQuestionService<DataInterpretationSetQuestion>{

  protected get url(): string{
    return this.serverUrl + "/dataInterpretationSetQuestions";
  }

  constructor(protected http:Http){
    super();
  }

  newInstance():DataInterpretationSetQuestion{
    return new DataInterpretationSetQuestion();
  };

}
