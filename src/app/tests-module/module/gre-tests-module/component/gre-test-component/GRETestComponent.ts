import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Test} from "../../../../model/Test";
import {GRETestService} from "../../service/GRETestService";
import {Question} from "../../../../../questions-module/model/Question";
import {TestSection, greSections} from "../../../../model/TestSection";
/**
 * Created by Yubar on 4/1/2017.
 */

@Component({
  selector: 'gre-test-component',
  templateUrl: './gre-test-component.html'
})
export class GRETestComponent implements OnInit{

  test:Test;
  currentQuestion:Question;
  currentSection: TestSection;
  currentSectionType: string;
  sectionLabel:string;

  constructor(private activatedRoute: ActivatedRoute, private testService:GRETestService){}

  ngOnInit():void {
    let id:number = this.activatedRoute.snapshot.params['id'];
    this.testService.getTest(id).then(test => {
      this.test = test;
      this.currentSection = test.testSections[0];
      this.currentSectionType = test.sectionTypes[0];
      this.sectionLabel = greSections[this.currentSectionType].label;
      this.testService.getTestSection(this.currentSection.id).then(testSection => {
        this.currentSection.answeredQuestions = testSection.answeredQuestions;
        this.currentQuestion = this.currentSection.answeredQuestions[0];
      })
    });
  }

  isFirstQuestion():boolean {
    return this.currentSection.answeredQuestions.indexOf(this.currentQuestion) == 0;
  }

  isLastQuestion():boolean {
    return this.currentSection.answeredQuestions.indexOf(this.currentQuestion) == this.currentSection.answeredQuestions.length - 1;
  }

  nextQuestion():void {
    if (!this.isLastQuestion())
      this.currentQuestion = this.currentSection.answeredQuestions[this.currentSection.answeredQuestions.indexOf(this.currentQuestion) + 1];
  }

  previousQuestion():void {
    if (!this.isFirstQuestion())
      this.currentQuestion = this.currentSection.answeredQuestions[this.currentSection.answeredQuestions.indexOf(this.currentQuestion) - 1];
  }

  isFirstSection():boolean {
    return this.test.testSections.indexOf(this.currentSection) == 0;
  }

  isLastSection():boolean {
    return this.test.testSections.indexOf(this.currentSection) == this.test.testSections.length - 1;
  }

  nextSection():void {
    if (! this.isLastSection()) {
      let nextSection: TestSection = this.test.testSections[this.test.testSections.indexOf(this.currentSection) + 1];
      this.currentSectionType = this.test.sectionTypes[this.test.sectionTypes.indexOf(this.currentSectionType) + 1];
      this.sectionLabel = greSections[this.currentSectionType].label;
      if (!nextSection.answeredQuestions || nextSection.answeredQuestions.length == 0)
        this.testService.getTestSection(nextSection.id).then(testSection => {
          nextSection.answeredQuestions = testSection.answeredQuestions;
          this.currentSection = nextSection;
          this.currentQuestion = this.currentSection.answeredQuestions[0];
        });
      else {
        this.currentSection = nextSection;
        this.currentQuestion = this.currentSection.answeredQuestions[0];
      }
    }
  }

  previousSection():void {
    if (! this.isFirstSection()) {
      let previousSection: TestSection = this.test.testSections[this.test.testSections.indexOf(this.currentSection) - 1];
      this.currentSectionType = this.test.sectionTypes[this.test.sectionTypes.indexOf(this.currentSectionType) - 1];
      this.sectionLabel = greSections[this.currentSectionType].label;
      if (!previousSection.answeredQuestions || previousSection.answeredQuestions.length == 0)
        this.testService.getTestSection(previousSection.id).then(testSection => {
          previousSection.answeredQuestions = testSection.answeredQuestions;
          this.currentSection = previousSection;
          this.currentQuestion = this.currentSection.answeredQuestions[this.currentSection.answeredQuestions.length - 1];
        });
      else {
        this.currentSection = previousSection;
        this.currentQuestion = this.currentSection.answeredQuestions[this.currentSection.answeredQuestions.length - 1];
      }
    }
  }

}
