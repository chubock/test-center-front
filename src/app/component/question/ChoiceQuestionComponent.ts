import {QuestionComponent} from "./QuestionComponent";
import {ChoiceQuestion} from "../../model/question/ChoiceQuestion";
/**
 * Created by yubar on 1/8/17.
 */
export abstract class ChoiceQuestionComponent<T extends ChoiceQuestion> extends QuestionComponent<T>{
}
