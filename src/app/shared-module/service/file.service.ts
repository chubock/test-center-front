import {Headers, RequestOptions} from "@angular/http";
import {Injectable} from "@angular/core";

import 'rxjs/add/operator/toPromise';
import {environment} from "../../../environments/environment";
import {AuthHttp} from "angular2-jwt";

/**
 * Created by Yubar on 1/25/2017.
 */

@Injectable()
export class FileService {

  constructor(protected http:AuthHttp){}

  upload(file: File): Promise<number> {
    let formData:FormData = new FormData();
    formData.append('file', file, file.name);
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({headers: headers, withCredentials: true});
    return this.http.post(environment.apiEndPoint + "/file-service", formData, options)
      .toPromise()
      .then(response => {
        return response.json() as number;
      });
  }

}
