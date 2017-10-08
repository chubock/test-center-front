import {Injectable} from "@angular/core";
import {AuthHttp} from "angular2-jwt";

import 'rxjs/add/operator/toPromise';

import {TextCompletionQuestion} from "../model/text-completion-question";
import {AbstractQuestionService} from "./abstract-question.service";
import {environment} from "../../../../environments/environment";

/**
 * Created by Yubar on 1/19/2017.
 */

@Injectable()
export class TextCompletionQuestionService extends AbstractQuestionService<TextCompletionQuestion>{

  protected get url(): string{
    return environment.apiEndPoint + "/gre-service/question/text-completion";
  }

  constructor(protected http:AuthHttp){
    super();
  }

  newInstance():TextCompletionQuestion{
    return new TextCompletionQuestion();
  };

}
