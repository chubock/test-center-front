import {Component} from "@angular/core";
import {SentenceEquivalenceQuestion} from "../../model/sentence-equivalence-question";
import {SentenceEquivalenceQuestionService} from "../../service/sentence-equivalence-question.service";
import {AbstractQuestionListComponent} from "../abstract-question-list.component";
import {Page} from "../../../../shared-module/model/page";
/**
 * Created by Yubar on 1/20/2017.
 */

@Component({
  selector: "sentence-equivalence-questions",
  templateUrl: "../question-list.component.html"
})
export class SentenceEquivalenceQuestionsComponent extends AbstractQuestionListComponent<SentenceEquivalenceQuestion>{

  page:Page<SentenceEquivalenceQuestion> = new Page<SentenceEquivalenceQuestion>();
  currentPage:number;
  question:SentenceEquivalenceQuestion;

  constructor(protected questionService: SentenceEquivalenceQuestionService) {
    super();
  }

  create(): void {
    let question = new SentenceEquivalenceQuestion("This is a simple Sentence Equivalence question");
    question.choices[0].text = "First";
    question.choices[1].text = "Second";
    question.choices[2].text = "Third";
    question.choices[3].text = "Fourth";
    question.choices[4].text = "Fifth";
    question.choices[5].text = "sixth";
    this.question = question;
  }

  get type():string {
    return "sentence-equivalence";
  }

}
