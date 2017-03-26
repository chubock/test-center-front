import {TestSection} from "./TestSection";
/**
 * Created by Yubar on 3/17/2017.
 */

export class Test {

  id:number;
  date: Date;
  difficulty:string = "MEDIUM";
  intelligentType:string = "INTELLIGENT";
  testSections:TestSection[] = [];
  sectionTypes:string[] = [];

}
