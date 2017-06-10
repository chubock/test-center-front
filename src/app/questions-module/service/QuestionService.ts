import {Question} from "../model/Question";

import 'rxjs/add/operator/toPromise';
import {Page} from "../../shared-module/model/Page";
import {QuestionSpecification} from "./QuestionSpecification";

/**
 * Created by Yubar on 1/19/2017.
 */

export interface QuestionService<T extends Question>{

  get(specification:QuestionSpecification, page:number, size:number):Promise<Page<T>>;
  save(question: Question): Promise<T>;
  remove(id:number): Promise<any>;

}
