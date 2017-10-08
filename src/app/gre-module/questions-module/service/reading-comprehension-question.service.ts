import {Injectable} from "@angular/core";
import {AuthHttp} from "angular2-jwt";

import 'rxjs/add/operator/toPromise';

import {ReadingComprehensionQuestion} from "../model/reading-comprehension-question";
import {AbstractQuestionService} from "./abstract-question.service";
import {environment} from "../../../../environments/environment";

/**
 * Created by Yubar on 1/19/2017.
 */

@Injectable()
export class ReadingComprehensionQuestionService extends AbstractQuestionService<ReadingComprehensionQuestion>{

  protected get url(): string{
    return environment.apiEndPoint + "/gre-service/question/reading-comprehension";
  }

  constructor(protected http:AuthHttp){
    super();
  }

  newInstance():ReadingComprehensionQuestion{
    return new ReadingComprehensionQuestion();
  };

}
