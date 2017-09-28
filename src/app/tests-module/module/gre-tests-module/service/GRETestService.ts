import {Http} from "@angular/http";
import {AbstractTestService} from "../../../service/AbstractTestService";
import {Injectable} from "@angular/core";
/**
 * Created by Yubar on 3/17/2017.
 */

@Injectable()
export class GRETestService extends AbstractTestService {

  protected get url(): string {
    return this.serverUrl + "/student/tests/gre";
  }

  constructor(protected http:Http) {
    super();
  }

}
