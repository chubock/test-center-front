import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import {AbstractQuestionService} from "./AbstractQuestionService";
import {ReadingComprehensionSingleAnswerQuestion} from "../../model/question/ReadingComprehensionSingleAnswerQuestion";

/**
 * Created by Yubar on 1/19/2017.
 */

@Injectable()
export class ReadingComprehensionSingleAnswerQuestionService extends AbstractQuestionService<ReadingComprehensionSingleAnswerQuestion>{

  protected get url(): string{
    return "http://localhost:8080/readingComprehensionSingleAnswerQuestions";
  }

  constructor(protected http:Http){
    super();
  }

  newInstance():ReadingComprehensionSingleAnswerQuestion{
    return new ReadingComprehensionSingleAnswerQuestion();
  };

}
