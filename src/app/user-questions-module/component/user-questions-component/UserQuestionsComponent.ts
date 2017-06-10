import {Component, OnInit} from "@angular/core";
import {UserQuestionSpecification, UserQuestionsService} from "../../service/UserQuestionsService";
import {Question} from "../../../questions-module/model/Question";
import {Page} from "../../../shared-module/model/Page";
import {paginationLinksCount} from "../../../AppConfig";
import {LoginService} from "../../../login-module/service/LoginService";
/**
 * Created by yubar on 6/2/17.
 */


@Component({
  selector: 'user-questions',
  templateUrl: './user-questions-component.html'
})
export class UserQuestionsComponent implements OnInit{

  questionTypes:string[] =["GRE_DATA_INTERPRETATION_SET_MULTIPLE_ANSWER", "GRE_DATA_INTERPRETATION_SET_NUMERIC", "GRE_DATA_INTERPRETATION_SET_SINGLE_ANSWER", "GRE_NUMERIC", "GRE_NUMERIC_FRACTION", "GRE_QUANTITATIVE_COMPARISON", "GRE_QUANTITATIVE_MULTIPLE_ANSWER", "GRE_QUANTITATIVE_SINGLE_ANSWER", "GRE_READING_COMPREHENSION_SELECT_IN_PASSAGE", "GRE_READING_COMPREHENSION_MULTIPLE_ANSWER", "GRE_READING_COMPREHENSION_SINGLE_ANSWER", "GRE_SENTENCE_EQUIVALENCE", "GRE_TEXT_COMPLETION_ONE_BLANK", "GRE_TEXT_COMPLETION_TWO_BLANK", "GRE_TEXT_COMPLETION_THREE_BLANK", "GRE_WRITING_ARGUMENT", "GRE_WRITING_ISSUE"];
  page:Page<Question> = new Page<Question>(1);
  paginationLinksCount:number = paginationLinksCount;
  currentPage:number;
  specification:UserQuestionSpecification = new UserQuestionSpecification();

  constructor(private userQuestionsService:UserQuestionsService, public loginService:LoginService){}

  ngOnInit():void {
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

  loadQuestions(page:number = 0):void {
    this.userQuestionsService.getQuestions(page, this.page.size, this.specification).then(page => this.page = page);
  }

  scoreChanged(question:Question):void {
    this.userQuestionsService.scoreQuestion(question);
  }
}
