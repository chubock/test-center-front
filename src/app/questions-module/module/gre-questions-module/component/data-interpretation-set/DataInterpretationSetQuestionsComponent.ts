import {Component} from "@angular/core";
import {AbstractQuestionListComponent} from "../../../../component/helper/AbstractQuestionListComponent";
import {DataInterpretationSetQuestion} from "../../model/DataInterpretationSetQuestion";
import {Page} from "../../../../../shared-module/model/Page";
import {DataInterpretationSetQuestionService} from "../../service/DataInterpretationSetQuestionService";
/**
 * Created by Yubar on 1/20/2017.
 */

@Component({
  selector: "data-interpretation-set-questions",
  templateUrl: "../../../../component/helper/question-list-component.html"
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
