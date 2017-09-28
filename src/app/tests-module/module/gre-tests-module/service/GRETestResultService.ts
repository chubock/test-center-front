import {AbstractTestResultService} from "../../../service/AbstractTestResultService";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
/**
 * Created by yubar on 7/20/17.
 */

@Injectable()
export class GRETestResultService extends AbstractTestResultService{

  protected url(id:number): string {
    return this.serverUrl + "/student/tests/gre/" + id + "/results";
  }


  constructor(protected http:Http) {
    super();
  }
}
