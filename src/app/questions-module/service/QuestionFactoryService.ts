import {Question} from "../model/Question";
import {DataInterpretationMultipleAnswerQuestion} from "../module/gre-questions-module/model/DataInterpretationMultipleAnswerQuestion";
import {DataInterpretationSetQuestion} from "../module/gre-questions-module/model/DataInterpretationSetQuestion";
import {DataInterpretationNumericQuestion} from "../module/gre-questions-module/model/DataInterpretationNumericQuestion";
import {DataInterpretationSingleAnswerQuestion} from "../module/gre-questions-module/model/DataInterpretationSingleAnswerQuestion";
import {NumericQuestion} from "../module/gre-questions-module/model/NumericQuestion";
import {QuantitativeComparisonQuestion} from "../module/gre-questions-module/model/QuantitativeComparisonQuestion";
import {QuantitativeMultipleAnswerQuestion} from "../module/gre-questions-module/model/QuantitativeMultipleAnswerQuestion";
import {QuantitativeSingleAnswerQuestion} from "../module/gre-questions-module/model/QuantitativeSingleAnswerQuestion";
import {ReadingComprehensionQuestion} from "../module/gre-questions-module/model/ReadingComprehensionQuestion";
import {SelectInPassageQuestion} from "../module/gre-questions-module/model/SelectInPassageQuestion";
import {ReadingComprehensionMultipleAnswerQuestion} from "../module/gre-questions-module/model/ReadingComprehensionMultipleAnswerQuestion";
import {ReadingComprehensionSingleAnswerQuestion} from "../module/gre-questions-module/model/ReadingComprehensionSingleAnswerQuestion";
import {SentenceEquivalenceQuestion} from "../module/gre-questions-module/model/SentenceEquivalenceQuestion";
import {TextCompletionQuestion} from "../module/gre-questions-module/model/TextCompletionQuestion";
import {WritingQuestion} from "../module/gre-questions-module/model/WritingQuestion";
/**
 * Created by Yubar on 3/24/2017.
 */

export class QuestionFactory {

  public static valueOf(questionType: string) : Question {
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
