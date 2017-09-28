import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Product} from "../../products-module/model/Product";
import {Order} from "../model/Order";
import {OrderItem} from "../model/OrderItem";
import {environment} from "../../../environments/environment";
/**
 * Created by yubar on 4/5/17.
 */

@Injectable()
export class OrderService {
  serverUrl:string = environment.apiEndPoint;
  url:string = "students/orders";
  order:Order = new Order();

  constructor(private http:Http) {}

  createOrder():Promise<Order> {
    return this.http.post(this.serverUrl + this.url, this.order)
      .toPromise()
      .then(resp => resp.json() as Order);
  }

  getProducts():Promise<Product[]> {
    return this.http.get(this.serverUrl + this.url + "/products")
      .toPromise()
      .then(resp => resp.json() as Product[]);
  }

  getProduct(id:number):Promise<Product> {
    return this.http.get(this.serverUrl + this.url + "/products/" + id)
      .toPromise()
      .then(resp => resp.json() as Product);
  }

  addProduct(product:Product):void {
    let orderItem:OrderItem = null;
    this.order.orderItems.forEach(item => {
      if (item.product.id == product.id)
        orderItem = item;
    });
    if (orderItem)
      orderItem.count++;
    else {
      orderItem = new OrderItem(product);
      this.order.orderItems.push(orderItem);
    }
  }
}
