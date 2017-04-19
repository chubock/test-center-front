import {Component} from "@angular/core";
import {Test} from "../../../../../../model/Test";
import {GRETestService} from "../../../../service/GRETestService";
import {TestSection, greSections} from "../../../../../../model/TestSection";
import {Question} from "../../../../../../../questions-module/model/Question";
import {Timer} from "../../../../../../../shared-module/model/Timer";
/**
 * Created by Yubar on 3/19/2017.
 */

@Component({
  selector: 'new-gre-test-component',
  templateUrl: './new-gre-test-component.html'
})
export class NewGRETestComponent {

  test:Test = new Test();
  currentSectionType: string;
  currentSection: TestSection;
  currentQuestion: Question;
  sectionTimer:Timer;
  breakTimer:Timer;
  sectionLabel:string;
  answers = {};

  constructor(private testService:GRETestService){
    testService.getCurrentTest().then(test => {
      if (test) {
        this.test = test;
        this.currentSectionType = test.sectionTypes[test.testSections.length - 1];
        this.currentSection = test.testSections[test.testSections.length - 1];
        this.prepareParents();
        this.sectionTimer  = new Timer(this.currentSection.remainingSeconds, true);
        this.sectionLabel = greSections[this.currentSectionType].label;
        this.currentQuestion = this.currentSection.answeredQuestions[this.currentSection.lastQuestionNumber - 1];
      } else {
        this.start();
      }
    })
  }

  start():void {
    this.testService.createTest(this.test).then(test => {
      this.test = test;
      this.currentSectionType = test.sectionTypes[0];
      this.currentSection = test.testSections[0];
      this.prepareParents();
      this.sectionTimer  = new Timer(greSections[this.currentSectionType].time * 60, true);
      this.sectionLabel = greSections[this.currentSectionType].label;
      this.currentQuestion = this.currentSection.answeredQuestions[0];
    });
  }

  prepareParents():void {
    let parent:any = null;
    let questions:any[] = this.currentSection.answeredQuestions;
    for (let i=0; i< questions.length; i++) {
      if (questions[i].parent) {
        questions[i].parent.number = questions[i].number;
        questions[i].parent.lastNumber = questions[i].number;
        if (parent && parent.id == questions[i].parent.id) {
          questions[i].parent = parent;
          parent.lastNumber++;
        } else {
          parent = questions[i].parent;
        }
      }
    }
  }

  answerChanged(answer:string) {
    this.answers[this.currentQuestion.id] = answer;
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

  nextSection(): Promise<void> {
    if (! this.isLastSection())
      return this.testService.createNextSection(this.test.id, this.answers).then(testSection => {
        this.answers = {};
        this.test.testSections.push(testSection);
        this.currentSectionType = this.test.sectionTypes[this.test.sectionTypes.indexOf(this.currentSectionType) + 1];
        this.currentSection = this.test.testSections[this.test.testSections.indexOf(this.currentSection) + 1];
        this.prepareParents();
        this.sectionTimer  = new Timer(greSections[this.currentSectionType].time * 60, true);
        this.sectionLabel = greSections[this.currentSectionType].label;
        this.currentQuestion = this.currentSection.answeredQuestions[0];
      });
  }

  finishTest(): Promise<void> {
    return this.testService.finishTest(this.test.id, this.answers).then(endDate => this.test.endDate = endDate);
  }

  sectionTimeEnded():void {
    if (this.isLastSection()) {
      this.finishTest();
    } else {
      this.breakTimer  = new Timer(greSections[this.currentSectionType].breakTime * 60, true);
    }
  }

  endBreak(): void {
    this.nextSection().then(e => this.breakTimer = null);
  }

}
