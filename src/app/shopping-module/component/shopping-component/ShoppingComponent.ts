import {Component, OnInit} from "@angular/core";
import {Product} from "../../../products-module/model/Product";
import {Order} from "../../model/Order"
import {OrderService} from "../../service/OrderService";
import {Router} from "@angular/router";

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
