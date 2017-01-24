import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import {AbstractQuestionService} from "./AbstractQuestionService";
import {ReadingComprehensionMultipleAnswerQuestion} from "../../model/question/ReadingComprehensionMultipleAnswerQuestion";

/**
 * Created by Yubar on 1/19/2017.
 */

@Injectable()
export class ReadingComprehensionMultipleAnswerQuestionService extends AbstractQuestionService<ReadingComprehensionMultipleAnswerQuestion>{

  protected get url(): string{
    return "http://localhost:8080/readingComprehensionMultipleAnswerQuestions";
  }

  constructor(protected http:Http){
    super();
  }

  newInstance():ReadingComprehensionMultipleAnswerQuestion{
    return new ReadingComprehensionMultipleAnswerQuestion();
  };

}
