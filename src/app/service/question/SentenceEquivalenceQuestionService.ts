import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import {AbstractQuestionService} from "./AbstractQuestionService";
import {SentenceEquivalenceQuestion} from "../../model/question/SentenceEquivalenceQuestion";

/**
 * Created by Yubar on 1/19/2017.
 */

@Injectable()
export class SentenceEquivalenceQuestionService extends AbstractQuestionService<SentenceEquivalenceQuestion>{

  protected get url(): string{
    return "http://localhost:8080/sentenceEquivalenceQuestions";
  }

  constructor(protected http:Http){
    super();
  }

  newInstance():SentenceEquivalenceQuestion{
    return new SentenceEquivalenceQuestion();
  };

}
