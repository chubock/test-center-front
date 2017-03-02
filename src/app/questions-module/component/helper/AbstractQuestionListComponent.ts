import {Page} from "../../../shared-module/model/Page";
import {OnInit} from "@angular/core";
import {QuestionService} from "../../service/QuestionService";
import {Question} from "../../model/Question";
import {paginationLinksCount} from "../../../AppConfig";
/**
 * Created by Yubar on 1/20/2017.
 */

export abstract class AbstractQuestionListComponent<T extends Question> implements OnInit{
  page:Page<Question> = new Page<Question>();
  currentPage:number;
  paginationLinksCount:number = paginationLinksCount;
  question:Question;
  protected questionService: QuestionService<T>;

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions(page:number = 0): void {
    this.questionService.get(page, this.page.size).then(page => {
      this.page = page;
      this.question = null;
    });
  }

  abstract create(): void ;

  cancel(): void {
    this.question = null;
  }
}
