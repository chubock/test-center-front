import {Injectable} from "@angular/core";
import {apiEndPoint} from "../../AppConfig";
import {Http} from "@angular/http";
import Order = jasmine.Order;
/**
 * Created by yubar on 4/5/17.
 */

@Injectable()
export class OrderService {
  serverUrl:string = apiEndPoint;
  url:string = "orders";

  constructor(private http:Http) {}

  createOrder(order:Order):Promise<Order> {
    return this.http.post(this.serverUrl + this.url, order)
      .toPromise()
      .then(resp => resp.json() as Order);
  }
}
