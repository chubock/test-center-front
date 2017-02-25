import {Headers, RequestOptions, Http} from "@angular/http";
import {Injectable} from "@angular/core";

import 'rxjs/add/operator/toPromise';
import {apiEndPoint} from "../../AppConfig";

/**
 * Created by Yubar on 1/25/2017.
 */

@Injectable()
export class FileService {

  private url:string = apiEndPoint + '/files';

  constructor(protected http:Http){}

  upload(file: File): Promise<number> {
    let formData:FormData = new FormData();
    formData.append('file', file, file.name);
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.url, formData, options)
      .toPromise()
      .then(response => {
        return response.json() as number;
      });
  }

}
