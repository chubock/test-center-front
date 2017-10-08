import {Injectable, Inject} from "@angular/core";
import {AuthHttp} from "angular2-jwt";

import 'rxjs/add/operator/toPromise';

import {SentenceEquivalenceQuestion} from "../model/sentence-equivalence-question";
import {AbstractQuestionService} from "./abstract-question.service";
import {environment} from "../../../../environments/environment";

/**
 * Created by Yubar on 1/19/2017.
 */

@Injectable()
export class SentenceEquivalenceQuestionService extends AbstractQuestionService<SentenceEquivalenceQuestion>{

  protected get url(): string{
    return environment.apiEndPoint + "/gre-service/question/sentence-equivalence";
  }

  constructor(protected http:AuthHttp){
    super();
  }

  newInstance():SentenceEquivalenceQuestion{
    return new SentenceEquivalenceQuestion();
  };

}
