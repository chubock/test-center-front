import {OrderItem} from "./OrderItem";
/**
 * Created by yubar on 4/5/17.
 */

export class Order {
  id:number;
  orderDate:Date;
  orderItems:OrderItem[] = [];
}
