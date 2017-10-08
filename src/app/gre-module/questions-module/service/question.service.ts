import {Question} from "../model/question";

import 'rxjs/add/operator/toPromise';
import {QuestionSpecification} from "./question-specification";
import {Page} from "../../../shared-module/model/page";

/**
 * Created by Yubar on 1/19/2017.
 */

export interface QuestionService<T extends Question>{

  get(specification:QuestionSpecification, page:number, size:number):Promise<Page<T>>;
  save(question: Question): Promise<T>;
  remove(id:number): Promise<any>;

}
