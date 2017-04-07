import {Component, OnInit} from "@angular/core";
import {Product} from "../../../products-module/model/Product";
import {Order} from "../../model/Order"
import {OrderService} from "../../service/OrderService";

/**
 * Created by yubar on 4/5/17.
 */

@Component({
  selector: 'shopping-component',
  templateUrl: './shopping-component.html'
})
export class ShoppingComponent implements OnInit{

  products:Product[];
  order:Order;

  constructor(private orderService:OrderService) {}

  ngOnInit():void {
    this.orderService.getProducts().then(products => this.products = products);
    this.order = this.orderService.order;
  }

}
