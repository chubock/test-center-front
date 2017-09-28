import {Component, OnInit} from "@angular/core";
import {GRETestResultService} from "../../service/GRETestResultService";
import {ActivatedRoute} from "@angular/router";
import {TestResultSpecification} from "../../../../service/TestResultService";
import {TestResult} from "../../../../model/TestResult";
/**
 * Created by yubar on 7/20/17.
 */

@Component({
  selector: 'gre-test-results-component',
  templateUrl: './gre-test-results-component.html'
})
export class GRETestResultsComponent implements OnInit{

  specification:TestResultSpecification = new TestResultSpecification();
  testResults:TestResult[] = [];
  diagrams:any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private testResultsService:GRETestResultService){}

  ngOnInit():void {
    let id:number = this.activatedRoute.snapshot.params['id'];
    this.testResultsService.getTestResults(id, this.specification).then(testResults => {
      this.testResults = testResults;
      this.createDiagrams();
    });
  }

  selectData(event:any, diagram:number):void {
    this.specification.types.push(this.testResults[diagram].type);
    this.specification.values.push(this.testResults[diagram].items[event.element._index].label);
    this.ngOnInit();
  }

  removeFromSpecification(index:number) {
    this.specification.types.splice(index, 1);
    this.specification.values.splice(index, 1);
    this.ngOnInit();
  }

  selectFromSpecification(index:number) {
    if (index < this.specification.types.length - 1) {
      this.specification.types.splice(index + 1, this.specification.types.length - index - 1);
      this.specification.values.splice(index + 1, this.specification.values.length - index - 1);
      this.ngOnInit();
    }
  }

  private createDiagrams():void {
    this.diagrams = [];
    this.testResults.forEach(testResult => this.createDiagram(testResult));
  }

  private createDiagram(testResult:TestResult): any {
    let diagram:any = {};
    diagram.labels = testResult.items.map(item => item.label);
    diagram.datasets = [];
    diagram.type = "pie";
    diagram.option = {legend: {display: testResult.items.length < 5, position: "right", usePointStyle: true}, title: {text: testResult.type, display:true}};
    diagram.datasets.push({data: testResult.items.map(item => item.count), backgroundColor: testResult.items.map(item => this.getRandomColor())});
    this.diagrams.push(diagram);
  }

  private getRandomColor():string {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++)
      color += letters[Math.floor(Math.random() * 16)];
    return color;
  }


}
