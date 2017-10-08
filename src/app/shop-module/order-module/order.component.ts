import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Product} from "../products-module/model/product";
import {Order} from "./model/order";
import {OrderService} from "./service/order.service";

/**
 * Created by yubar on 4/5/17.
 */

@Component({
  selector: 'shopping-component',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit{

  products:Product[];
  order:Order;

  constructor(private router:Router, private orderService:OrderService) {}

  ngOnInit():void {
    this.orderService.getProducts().then(products => this.products = products);
    this.order = this.orderService.order;
  }

  addProduct(product:Product):void {
    this.orderService.addProduct(product);
    this.router.navigate(["shopping", "card"]);
  }

}
