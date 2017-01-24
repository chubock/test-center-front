import {Page} from "../../model/Page";
import {OnInit} from "@angular/core";
import {QuestionService} from "../../service/question/QuestionService";
import {Question} from "../../model/question/Question";
/**
 * Created by Yubar on 1/20/2017.
 */

export abstract class QuestionsComponent<T extends Question> implements OnInit{
  page:Page<Question> = new Page<Question>();
  currentPage:number;
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
