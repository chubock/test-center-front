import {Component, OnInit} from "@angular/core";
import {ProductService} from "../../service/ProductService";
import {Product} from "../../model/Product";
import {Page} from "../../../shared-module/model/Page";
/**
 * Created by yubar on 2/19/17.
 */

@Component({
  selector: 'products-component',
  templateUrl: './products-component.html'
})
export class ProductsComponent implements OnInit{

  products:Page<Product> = new Page<Product>();
  currentPage:number;

  constructor(private productService:ProductService){}

  ngOnInit():void {
    this.loadProducts();
  }

  loadProducts(page:number = 0):void {
    this.productService.getProducts(page, this.products.size)
      .then(page => this.products = page);
  }

}
