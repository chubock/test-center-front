import {Component} from "@angular/core";
import {DataInterpretationSetQuestion} from "../../model/data-interpretation-set-question";
import {DataInterpretationSetQuestionService} from "../../service/data-interpretation-set-question.service";
import {AbstractQuestionListComponent} from "../abstract-question-list.component";
import {Page} from "../../../../shared-module/model/page";
/**
 * Created by Yubar on 1/20/2017.
 */

@Component({
  selector: "data-interpretation-set-questions",
  templateUrl: "../question-list.component.html"
})
export class DataInterpretationSetQuestionsComponent extends AbstractQuestionListComponent<DataInterpretationSetQuestion>{

  page:Page<DataInterpretationSetQuestion> = new Page<DataInterpretationSetQuestion>();
  currentPage:number;
  question:DataInterpretationSetQuestion;

  constructor(protected questionService: DataInterpretationSetQuestionService) {
    super();
  }

  create(): void {
    this.question = new DataInterpretationSetQuestion("This is a simple Data Interpretation Set question.");
  }

  get type():string {
    return "data-interpretation-set";
  }

}
