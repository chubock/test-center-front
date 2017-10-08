import {AbstractQuestionComponent} from "./abstract-question.component";
import {ChoiceQuestion} from "../model/choice-question";
/**
 * Created by yubar on 1/8/17.
 */
export abstract class AbstractChoiceQuestionComponent<T extends ChoiceQuestion> extends AbstractQuestionComponent<T>{
}
