import {Component, OnInit} from "@angular/core";
import {Product} from "../../../products-module/model/Product";
import {ActivatedRoute, Router} from "@angular/router";
import {OrderService} from "../../service/OrderService";
import {Order} from "../../model/Order";
/**
 * Created by yubar on 4/8/17.
 */

@Component({
  templateUrl: './product-component.html'
})
export class ProductComponent implements OnInit{

  product:Product;
  order:Order;

  constructor(private activatedRoute:ActivatedRoute, private router:Router, private orderService:OrderService) {}

  ngOnInit():void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.order = this.orderService.order;
    this.orderService.getProduct(id).then(product => this.product = product);
  }

  addProduct():void {
    this.orderService.addProduct(this.product);
    this.router.navigate(["shopping", "card"]);
  }

}
