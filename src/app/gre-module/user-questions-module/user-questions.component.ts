import {Component, OnInit} from "@angular/core";
import {Page} from "../../shared-module/model/page";
import {Question} from "../questions-module/model/question";
import {environment} from "../../../environments/environment";
import {AuthorityService} from "../../shared-module/service/authority.service";
import {UserQuestionSpecification, UserQuestionsService} from "./user-questions.service";
/**
 * Created by yubar on 6/2/17.
 */


@Component({
  selector: 'user-questions',
  templateUrl: './user-questions.component.html'
})
export class UserQuestionsComponent implements OnInit{

  questionTypes:string[] =["GRE_DATA_INTERPRETATION_SET_MULTIPLE_ANSWER", "GRE_DATA_INTERPRETATION_SET_NUMERIC", "GRE_DATA_INTERPRETATION_SET_SINGLE_ANSWER", "GRE_NUMERIC", "GRE_NUMERIC_FRACTION", "GRE_QUANTITATIVE_COMPARISON", "GRE_QUANTITATIVE_MULTIPLE_ANSWER", "GRE_QUANTITATIVE_SINGLE_ANSWER", "GRE_READING_COMPREHENSION_SELECT_IN_PASSAGE", "GRE_READING_COMPREHENSION_MULTIPLE_ANSWER", "GRE_READING_COMPREHENSION_SINGLE_ANSWER", "GRE_SENTENCE_EQUIVALENCE", "GRE_TEXT_COMPLETION_ONE_BLANK", "GRE_TEXT_COMPLETION_TWO_BLANK", "GRE_TEXT_COMPLETION_THREE_BLANK", "GRE_WRITING_ARGUMENT", "GRE_WRITING_ISSUE"];
  page:Page<Question> = new Page<Question>(1);
  paginationLinksCount:number = environment.paginationLinksCount;
  currentPage:number;
  specification:UserQuestionSpecification = new UserQuestionSpecification();
  allUsers:boolean = false;

  constructor(private userQuestionsService:UserQuestionsService, public authorityService:AuthorityService){}

  ngOnInit():void {
    this.loadQuestions();
    this.allUsers = this.authorityService.hasAnyRole('TEACHER', 'ADMIN');
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
    if (this.allUsers)
      this.userQuestionsService.getAllQuestions(page, this.page.size, this.specification).then(page => this.page = page);
    else
      this.userQuestionsService.getAllQuestions(page, this.page.size, this.specification).then(page => this.page = page);
  }

  scoreChanged(question:Question):void {
    this.userQuestionsService.scoreQuestion(question);
  }
}
