import {Component, OnInit} from "@angular/core";
import {OrderService} from "../../service/order.service";
import {Order} from "../../model/order";
import {OrderItem} from "../../model/order-item";
import {AlertsService} from "../../../../shared-module/service/alerts.service";
import {Alert} from "../../../../shared-module/model/alert";
/**
 * Created by yubar on 4/5/17.
 */

@Component({
  selector: 'shopping-card-component',
  templateUrl: './shopping-card.component.html'
})
export class ShoppingCardComponent implements OnInit{

  order:Order;
  totalPrice:number = 0;

  constructor(private orderService:OrderService, private alertService:AlertsService) {}

  ngOnInit():void {
    this.order = this.orderService.order;
    this.calcTotalPrice();
  }

  calcTotalPrice():void {
    this.totalPrice = 0;
    this.order.orderItems.forEach(item => {
      let p = item.product.price;
      p *= (100 - item.product.discount);
      p /= 100;
      p *= item.count;
      this.totalPrice += p;
    });
  }

  remove(item:OrderItem):void {
    this.order.orderItems.splice(this.order.orderItems.indexOf(item), 1);
    this.calcTotalPrice();
  }

  register():void {
    this.orderService.createOrder().then(order => {
      this.alertService.newAlert(new Alert("Operation Succeed"));
    });
  }
}
