import {Question} from "../model/question";
import {DataInterpretationMultipleAnswerQuestion} from "../model/data-interpretation-multiple-answer-question";
import {DataInterpretationSetQuestion} from "../model/data-interpretation-set-question";
import {DataInterpretationNumericQuestion} from "../model/data-interpretation-numeric-question";
import {DataInterpretationSingleAnswerQuestion} from "../model/data-interpretation-single-answer-question";
import {QuantitativeComparisonQuestion} from "../model/quantitative-comparison-question";
import {QuantitativeMultipleAnswerQuestion} from "../model/quantitative-multiple-answer-question";
import {QuantitativeSingleAnswerQuestion} from "../model/quantitative-single-answer-question";
import {ReadingComprehensionQuestion} from "../model/reading-comprehension-question";
import {SelectInPassageQuestion} from "../model/select-in-passage-question";
import {ReadingComprehensionMultipleAnswerQuestion} from "../model/reading-comprehension-multiple-answer-question";
import {ReadingComprehensionSingleAnswerQuestion} from "../model/reading-comprehension-single-answer-question";
import {SentenceEquivalenceQuestion} from "../model/sentence-equivalence-question";
import {WritingQuestion} from "../model/writing-question";
import {TextCompletionQuestion} from "../model/text-completion-question";
import {NumericQuestion} from "../model/numeric-question";
/**
 * Created by Yubar on 3/24/2017.
 */

export class QuestionFactory {

  public static createQuestion(questionType: string) : Question {
    switch (questionType) {
      case "GRE_DATA_INTERPRETATION_SET_MULTIPLE_ANSWER":
        return new DataInterpretationMultipleAnswerQuestion();
      case "GRE_DATA_INTERPRETATION_SET":
        return new DataInterpretationSetQuestion();
      case "GRE_DATA_INTERPRETATION_SET_NUMERIC":
        return new DataInterpretationNumericQuestion();
      case "GRE_DATA_INTERPRETATION_SET_SINGLE_ANSWER":
        return new DataInterpretationSingleAnswerQuestion();
      case "GRE_NUMERIC":
      case "GRE_NUMERIC_FRACTION":
        return new NumericQuestion();
      case "GRE_QUANTITATIVE_COMPARISON":
        return new QuantitativeComparisonQuestion();
      case "GRE_QUANTITATIVE_MULTIPLE_ANSWER":
        return new QuantitativeMultipleAnswerQuestion();
      case "GRE_QUANTITATIVE_SINGLE_ANSWER":
        return new QuantitativeSingleAnswerQuestion();
      case "GRE_READING_COMPREHENSION_LONG":
      case "GRE_READING_COMPREHENSION_MEDIUM":
      case "GRE_READING_COMPREHENSION_SHORT":
      case "GRE_READING_COMPREHENSION_PARAGRAPH_ARGUMENT":
        return new ReadingComprehensionQuestion();
      case "GRE_READING_COMPREHENSION_SELECT_IN_PASSAGE":
        return new SelectInPassageQuestion();
      case "GRE_READING_COMPREHENSION_MULTIPLE_ANSWER":
        return new ReadingComprehensionMultipleAnswerQuestion();
      case "GRE_READING_COMPREHENSION_SINGLE_ANSWER":
        return new ReadingComprehensionSingleAnswerQuestion();
      case "GRE_SENTENCE_EQUIVALENCE":
        return new SentenceEquivalenceQuestion();
      case "GRE_TEXT_COMPLETION_ONE_BLANK":
      case "GRE_TEXT_COMPLETION_TWO_BLANK":
      case "GRE_TEXT_COMPLETION_THREE_BLANK":
        return new TextCompletionQuestion();
      case "GRE_WRITING_ARGUMENT":
      case "GRE_WRITING_ISSUE":
        return new WritingQuestion();
      default:
        alert(questionType);
        return null;
    }
  }

}
