import {Injectable} from "@angular/core";
import {apiEndPoint} from "../../AppConfig";
import {Http} from "@angular/http";
import {Product} from "../../products-module/model/Product";
import {Order} from "../model/Order";
/**
 * Created by yubar on 4/5/17.
 */

@Injectable()
export class OrderService {
  serverUrl:string = apiEndPoint;
  url:string = "orders";
  order:Order = new Order();

  constructor(private http:Http) {}

  createOrder(order:Order):Promise<Order> {
    return this.http.post(this.serverUrl + this.url, order)
      .toPromise()
      .then(resp => resp.json() as Order);
  }

  getProducts():Promise<Product[]> {
    return this.http.get(this.serverUrl + this.url + "/products")
      .toPromise()
      .then(resp => resp.json() as Product[]);
  }
}
