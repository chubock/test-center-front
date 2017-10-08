import {Injectable} from "@angular/core";
import {AuthHttp} from "angular2-jwt";

import 'rxjs/add/operator/toPromise';

import {WritingQuestion} from "../model/writing-question";
import {AbstractQuestionService} from "./abstract-question.service";
import {environment} from "../../../../environments/environment";

/**
 * Created by Yubar on 1/19/2017.
 */

@Injectable()
export class WritingQuestionService extends AbstractQuestionService<WritingQuestion>{

  protected get url(): string{
    return environment.apiEndPoint + "/gre-service/question/writing";
  }

  constructor(protected http:AuthHttp){
    super();
  }

  newInstance():WritingQuestion{
    return new WritingQuestion();
  };

}
