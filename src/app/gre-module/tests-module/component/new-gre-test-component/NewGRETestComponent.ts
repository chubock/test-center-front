import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Test} from "../../model/Test";
import {greSections, TestSection} from "../../model/TestSection";
import {Question} from "../../../questions-module/model/question";
import {Timer} from "../../../../shared-module/model/timer";
import {GRETestService} from "../../service/gre-test.service";
/**
 * Created by Yubar on 3/19/2017.
 */

@Component({
  selector: 'new-gre-test-component',
  templateUrl: './new-gre-test-component.html',
  styleUrls: ['./style.css']
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
  view:string = "MAIN";
  selectedQuestion:Question;

  constructor(private testService:GRETestService, private activatedRoute:ActivatedRoute, private router:Router){
    testService.getCurrentTest().then(test => {
      if (test) {
        this.test = test;
        this.currentSectionType = test.sectionTypes[test.testSections.length - 1];
        this.currentSection = test.testSections[test.testSections.length - 1];
        this.prepareParents();
        this.sectionTimer  = new Timer(this.currentSection.remainingSeconds, true);
        this.sectionLabel = greSections[this.currentSectionType].label;
        this.currentQuestion = this.currentSection.answeredQuestions[this.currentSection.lastQuestionNumber - 1];
        this.seeQuestion();
      } else {
        this.start();
      }
    })
  }

  start():void {
    this.testService.createTest(this.test).then(test => {
      this.test = test;
      this.currentSectionType = this.test.sectionTypes[0];
      this.currentSection = this.test.testSections[0];
      this.prepareParents();
      this.sectionTimer  = new Timer(greSections[this.currentSectionType].time * 60, true);
      this.sectionLabel = greSections[this.currentSectionType].label;
      this.currentQuestion = this.currentSection.answeredQuestions[0];
      this.seeQuestion();
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

  seeQuestion():void {
    this.testService.seeQuestion(this.currentQuestion.id).then(e => {
      if (this.currentQuestion.status == "NOT_SEEN")
        this.currentQuestion.status = "NOT_ANSWERED";
    });
  }

  toggleMark(): void {
    if (this.currentQuestion.marked)
      this.testService.unMarkQuestion(this.currentQuestion.id).then(e => this.currentQuestion.marked = false);
    else
      this.testService.markQuestion(this.currentQuestion.id).then(e => this.currentQuestion.marked = true);
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
    if (! this.isLastQuestion()){
      this.currentQuestion = this.currentSection.answeredQuestions[this.currentSection.answeredQuestions.indexOf(this.currentQuestion) + 1];
      this.seeQuestion();
    }
  }

  goToSelectedQuestion():void {
    if (this.selectedQuestion) {
      this.view = "MAIN";
      this.currentQuestion = this.selectedQuestion;
      this.seeQuestion();
    }
  }

  previousQuestion():void {
    if (! this.isFirstQuestion()){
      this.currentQuestion = this.currentSection.answeredQuestions[this.currentSection.answeredQuestions.indexOf(this.currentQuestion) - 1];
      this.seeQuestion();
    }
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
        this.seeQuestion();
      });
  }

  finishTest(): Promise<void> {
    return this.testService.finishTest(this.test.id, this.answers).then(endDate => this.test.endDate = endDate);
  }

  commentTest():void {
    this.testService.commentTest(this.test.id, this.test.comment);
    this.router.navigate(['/']);
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
