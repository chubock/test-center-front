import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import {AbstractQuestionService} from "./AbstractQuestionService";
import {SelectInPassageQuestion} from "../../model/question/SelectInPassageQuestion";

/**
 * Created by Yubar on 1/19/2017.
 */

@Injectable()
export class SelectInPassageQuestionService extends AbstractQuestionService<SelectInPassageQuestion>{

  protected get url(): string{
    return "http://localhost:8080/selectInPassageQuestions";
  }

  constructor(protected http:Http){
    super();
  }

  newInstance():SelectInPassageQuestion{
    return new SelectInPassageQuestion();
  };

}
