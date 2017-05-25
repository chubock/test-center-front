/**
 * Created by Yubar on 4/9/2017.
 */

export class User {
  username:string;
  password:string;
  lastName:string;
  firstName:string;
  gender:string = "MALE";
  enabled:boolean = false;
  accountExpired:boolean = false;
  credentialExpired:boolean = false;
  locked:boolean = false;
  freeGreTestCount:number = 0;
  greTestCount:number = 0;
}
