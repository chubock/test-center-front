import {Page} from "../../../shared-module/model/Page";
import {OnInit} from "@angular/core";
import {QuestionService} from "../../service/QuestionService";
import {Question} from "../../model/Question";
import {QuestionSpecification} from "../../service/QuestionSpecification";
import {environment} from "../../../../environments/environment";
/**
 * Created by Yubar on 1/20/2017.
 */

export abstract class AbstractQuestionListComponent<T extends Question> implements OnInit{
  page:Page<Question> = new Page<Question>();
  currentPage:number;
  paginationLinksCount:number = environment.paginationLinksCount;
  question:Question;
  protected questionService: QuestionService<T>;
  specification:QuestionSpecification = new QuestionSpecification();

  ngOnInit(): void {
    this.loadQuestions();
  }

  filterChangeListener(filters:string[], filter:string) {
    let idx:number = filters.indexOf(filter);
    if (idx == -1)
      filters.push(filter);
    else
      filters.splice(idx, 1);
    this.loadQuestions();
  }

  loadQuestions(page:number = 0): void {
    this.questionService.get(this.specification, page, this.page.size).then(page => {
      this.page = page;
      this.question = null;
    });
  }

  abstract create(): void ;

  cancel(): void {
    this.question = null;
  }
}
