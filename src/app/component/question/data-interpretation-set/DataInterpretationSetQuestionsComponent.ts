import {NumericQuestionService} from "../../../service/question/NumericQuestionService";
import {Component} from "@angular/core";
import {Page} from "../../../model/Page";
import {QuestionsComponent} from "../QuestionsComponent";
import {NumericQuestion} from "../../../model/question/NumericQuestion";
import {DataInterpretationSetQuestion} from "../../../model/question/DataInterpretationSetQuestion";
import {DataInterpretationSetQuestionService} from "../../../service/question/DataInterpretationSetQuestionService";
/**
 * Created by Yubar on 1/20/2017.
 */

@Component({
  selector: "data-interpretation-set-questions",
  templateUrl: "../questions-component.html"
})
export class DataInterpretationSetQuestionsComponent extends QuestionsComponent<DataInterpretationSetQuestion>{

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
