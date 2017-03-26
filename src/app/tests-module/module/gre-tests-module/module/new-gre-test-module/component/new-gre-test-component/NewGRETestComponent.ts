import {Component} from "@angular/core";
import {Test} from "../../../../../../model/Test";
import {GRETestService} from "../../../../service/GRETestService";
import {TestSection} from "../../../../../../model/TestSection";
import {Question} from "../../../../../../../questions-module/model/Question";
/**
 * Created by Yubar on 3/19/2017.
 */

@Component({
  selector: 'new-gre-test-component',
  templateUrl: './new-gre-test-component.html'
  // template: 'New GRE Test Component'
})
export class NewGRETestComponent {

  test:Test = new Test();
  currentSectionType: string;
  currentSection: TestSection;
  currentQuestion: Question;

  constructor(private testService:GRETestService){}

  start():void {
    this.testService.createTest(this.test).then(test => {
      this.test = test;
      this.currentSectionType = test.sectionTypes[0];
      this.currentSection = test.testSections[0];
      this.currentQuestion = this.currentSection.answeredQuestions[0];
    });
  }

  answerChanged(answer:string) {
    this.testService.answerQuestion(this.currentQuestion.id, answer);
  }

  isLastSection(): boolean {
    return this.test.sectionTypes.indexOf(this.currentSectionType) == this.test.sectionTypes.length - 1;
  }

  isFirstQuestion(): boolean {
    return this.currentSection.answeredQuestions.indexOf(this.currentQuestion) == 0;
  }

  isLastQuestion(): boolean {
    return this.currentSection.answeredQuestions.indexOf(this.currentQuestion) == this.currentSection.answeredQuestions.length - 1;
  }

  nextQuestion():void {
    if (! this.isLastQuestion())
      this.currentQuestion = this.currentSection.answeredQuestions[this.currentSection.answeredQuestions.indexOf(this.currentQuestion) + 1];
  }

  previousQuestion():void {
    if (! this.isFirstQuestion())
      this.currentQuestion = this.currentSection.answeredQuestions[this.currentSection.answeredQuestions.indexOf(this.currentQuestion) - 1];
  }

  nextSection(): void {
    if (! this.isLastSection())
      this.testService.createNextSection(this.test.id).then(testSection => {
        this.test.testSections.push(testSection);
        this.currentSectionType = this.test.sectionTypes[this.test.sectionTypes.indexOf(this.currentSectionType) + 1];
        this.currentSection = this.test.testSections[this.test.testSections.indexOf(this.currentSection) + 1];
        this.currentQuestion = this.currentSection.answeredQuestions[0];
      });
  }

}
