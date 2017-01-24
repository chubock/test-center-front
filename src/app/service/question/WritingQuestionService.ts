import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import {AbstractQuestionService} from "./AbstractQuestionService";
import {WritingQuestion} from "../../model/question/WritingQuestion";

/**
 * Created by Yubar on 1/19/2017.
 */

@Injectable()
export class WritingQuestionService extends AbstractQuestionService<WritingQuestion>{

  protected get url(): string{
    return "http://localhost:8080/writingQuestions";
  }

  constructor(protected http:Http){
    super();
  }

  newInstance():WritingQuestion{
    return new WritingQuestion();
  };

}
