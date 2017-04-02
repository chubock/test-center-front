import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import {AbstractQuestionService} from "../../../../questions-module/service/AbstractQuestionService";
import {WritingQuestion} from "../model/WritingQuestion";

/**
 * Created by Yubar on 1/19/2017.
 */

@Injectable()
export class WritingQuestionService extends AbstractQuestionService<WritingQuestion>{

  protected get url(): string{
    return this.serverUrl + "/writingQuestions";
  }

  constructor(protected http:Http){
    super();
  }

  newInstance():WritingQuestion{
    return new WritingQuestion();
  };

}