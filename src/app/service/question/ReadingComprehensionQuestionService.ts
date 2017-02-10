import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import {AbstractQuestionService} from "./AbstractQuestionService";
import {ReadingComprehensionQuestion} from "../../model/question/ReadingComprehensionQuestion";

/**
 * Created by Yubar on 1/19/2017.
 */

@Injectable()
export class ReadingComprehensionQuestionService extends AbstractQuestionService<ReadingComprehensionQuestion>{

  protected get url(): string{
    return this.serverUrl + "/readingComprehensionQuestions";
  }

  constructor(protected http:Http){
    super();
  }

  newInstance():ReadingComprehensionQuestion{
    return new ReadingComprehensionQuestion();
  };

}
