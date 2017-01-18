import {Component} from '@angular/core';
import {SingleAnswerChoiceQuestion} from "./model/SingleAnswerChoiceQuestion";
import {MultipleAnswerChoiceQuestion} from "./model/MultipleAnswerChoiceQuestion";
import {WritingQuestion} from "./model/WritingQuestion";
import {NumericQuestion} from "./model/NumericQuestion";
import {SelectInPassageQuestion} from "./model/SelectInPassageQuestion";
import {TextCompletionQuestion} from "./model/TextCompletionQuestion";
import {QuantitativeComparisonQuestion} from "./model/QuantitativeComparisonQuestion";
import {QuantitativeSingleAnswerQuestion} from "./model/QuantitativeSingleAnswerQuestion";
import {QuantitativeMultipleAnswerQuestion} from "./model/QuantitativeMultipleAnswerQuestion";
import {ReadingComprehensionSingleAnswerQuestion} from "./model/ReadingComprehensionSingleAnswerQuestion";
import {ReadingComprehensionMultipleAnswerQuestionComponent} from "./component/ReadingComprehensionMultipleAnswerQuestionComponent";
import {ReadingComprehensionMultipleAnswerQuestion} from "./model/ReadingComprehensionMultipleAnswerQuestion";
import {SentenceEquivalenceQuestion} from "./model/SentenceEquivalenceQuestion";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  singleAnswerChoiceQuestion: SingleAnswerChoiceQuestion;
  multipleAnswerChoiceQuestion: MultipleAnswerChoiceQuestion;
  writingQuestion: WritingQuestion;
  numericQuestion: NumericQuestion;
  fractionNumericQuestion: NumericQuestion;
  selectInPassageQuestion: SelectInPassageQuestion;
  textCompletionQuestion: TextCompletionQuestion;
  quantitativeComparisonQuestion: QuantitativeComparisonQuestion;
  quantitativeSingleAnswerQuestion: QuantitativeSingleAnswerQuestion;
  quantitativeMultipleAnswerQuestion: QuantitativeMultipleAnswerQuestion;
  readingComprehensionSingleAnswerQuestion: ReadingComprehensionSingleAnswerQuestion;
  readingComprehensionMultipleAnswerQuestion: ReadingComprehensionMultipleAnswerQuestion;
  sentenceEquivalenceQuestion: SentenceEquivalenceQuestion;

  constructor() {

    this.sentenceEquivalenceQuestion = new SentenceEquivalenceQuestion("This is a simple Sentence Equivalence question");
    this.sentenceEquivalenceQuestion.choices[0].text = "First";
    this.sentenceEquivalenceQuestion.choices[1].text = "Second";
    this.sentenceEquivalenceQuestion.choices[2].text = "Third";
    this.sentenceEquivalenceQuestion.choices[3].text = "Fourth";
    this.sentenceEquivalenceQuestion.choices[4].text = "Fifth";
    this.sentenceEquivalenceQuestion.choices[5].text = "sixth";

    this.quantitativeSingleAnswerQuestion = new QuantitativeSingleAnswerQuestion("This is a simple quantitative single answer question");
    this.quantitativeSingleAnswerQuestion.choices[0].text = "First Choice";
    this.quantitativeSingleAnswerQuestion.choices[1].text = "Second Choice";
    this.quantitativeSingleAnswerQuestion.choices[2].text = "Third Choice";
    this.quantitativeSingleAnswerQuestion.choices[3].text = "Fourth Choice";
    this.quantitativeSingleAnswerQuestion.choices[4].text = "Fifth Choice";

    this.quantitativeMultipleAnswerQuestion = new QuantitativeMultipleAnswerQuestion("This is a simple quantitative multiple answer question");
    this.quantitativeMultipleAnswerQuestion.choices[0].text = "First Choice";
    this.quantitativeMultipleAnswerQuestion.choices[1].text = "Second Choice";
    this.quantitativeMultipleAnswerQuestion.choices[2].text = "Third Choice";

    this.readingComprehensionSingleAnswerQuestion = new ReadingComprehensionSingleAnswerQuestion("This is a simple Reading Comprehension single answer question");
    this.readingComprehensionSingleAnswerQuestion.choices[0].text = "First Choice";
    this.readingComprehensionSingleAnswerQuestion.choices[1].text = "Second Choice";
    this.readingComprehensionSingleAnswerQuestion.choices[2].text = "Third Choice";
    this.readingComprehensionSingleAnswerQuestion.choices[3].text = "Fourth Choice";
    this.readingComprehensionSingleAnswerQuestion.choices[4].text = "Fifth Choice";

    this.readingComprehensionMultipleAnswerQuestion = new ReadingComprehensionMultipleAnswerQuestion("This is a simple Reading Comprehension multiple answer question");
    this.readingComprehensionMultipleAnswerQuestion.choices[0].text = "First Choice";
    this.readingComprehensionMultipleAnswerQuestion.choices[1].text = "Second Choice";
    this.readingComprehensionMultipleAnswerQuestion.choices[2].text = "Third Choice";

    this.quantitativeComparisonQuestion = new QuantitativeComparisonQuestion("X + 2", "X * 2");

    this.textCompletionQuestion = new TextCompletionQuestion("Sample Text Completion Question");
    this.textCompletionQuestion.questions[0].choices[0].text = "First";
    this.textCompletionQuestion.questions[0].choices[1].text = "Second";
    this.textCompletionQuestion.questions[0].choices[2].text = "Third";
    this.textCompletionQuestion.questions[0].choices[3].text = "Fourth";
    this.textCompletionQuestion.questions[0].choices[4].text = "Fifth";
    this.textCompletionQuestion.questions[0].answer = 0;
    this.textCompletionQuestion.questions[0].selected = 0;

    this.selectInPassageQuestion = new SelectInPassageQuestion("<p><u>This</u> is a <u>sample Question</u></p>");
    this.selectInPassageQuestion.answer = 1;
    this.selectInPassageQuestion.selected = 0;

    this.singleAnswerChoiceQuestion = new SingleAnswerChoiceQuestion("This is a sample Question Choice");
    this.singleAnswerChoiceQuestion.choices[0].text = "This is first choice";
    this.singleAnswerChoiceQuestion.choices[1].text = "This is second choice";
    this.singleAnswerChoiceQuestion.choices[2].text = "This is third choice";
    this.singleAnswerChoiceQuestion.answer = 1;
    this.singleAnswerChoiceQuestion.selected = 2;

    this.multipleAnswerChoiceQuestion = new MultipleAnswerChoiceQuestion("This is a sample Question Choice", 3, 2);
    this.multipleAnswerChoiceQuestion.choices[0].text = "This is first choice";
    this.multipleAnswerChoiceQuestion.choices[1].text = "This is second choice";
    this.multipleAnswerChoiceQuestion.choices[2].text = "This is third choice";
    this.multipleAnswerChoiceQuestion.choices[1].answer = true;
    this.multipleAnswerChoiceQuestion.choices[2].answer = true;
    this.multipleAnswerChoiceQuestion.choices[0].selected = true;
    this.multipleAnswerChoiceQuestion.choices[1].selected = true;

    this.writingQuestion = new WritingQuestion("This is a sample Question Choice");

    this.numericQuestion = new NumericQuestion("This is a sample Question Choice");
    this.numericQuestion.nominatorAnswer = 10;
    this.numericQuestion.nominator = 5;
    this.fractionNumericQuestion = new NumericQuestion("This is a sample Question Choice", true);
    this.fractionNumericQuestion.nominatorAnswer = 2;
    this.fractionNumericQuestion.denominatorAnswer = 3;
    this.fractionNumericQuestion.nominator = 2;
    this.fractionNumericQuestion.denominator = 5;

  }
}
