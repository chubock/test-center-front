import {Injectable} from "@angular/core";
import {Product} from "../../products-module/model/product";
import {Order} from "../model/order";
import {OrderItem} from "../model/order-item";
import {environment} from "../../../../environments/environment";
import {AuthHttp} from "angular2-jwt";
/**
 * Created by yubar on 4/5/17.
 */

@Injectable()
export class OrderService {
  order:Order = new Order();

  constructor(private http:AuthHttp) {}

  createOrder():Promise<Order> {
    return this.http.post(environment.apiEndPoint + "/shop-service/orders", this.order)
      .toPromise()
      .then(resp => resp.json() as Order);
  }

  getProducts():Promise<Product[]> {
    return this.http.get(environment.apiEndPoint + "/shop-service/products")
      .toPromise()
      .then(resp => resp.json().content as Product[]);
  }

  getProduct(id:number):Promise<Product> {
    return this.http.get(environment.apiEndPoint + "/shop-service/products/" + id)
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
