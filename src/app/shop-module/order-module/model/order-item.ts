import {Product} from "../../products-module/model/product";
/**
 * Created by yubar on 4/5/17.
 */

export class OrderItem {
  product:Product;
  count:number = 1;
  productType:string;
  productCount:number;
  productPrice:number;
  productDiscount:number;

  constructor(product:Product) {
    this.product = product;
    this.productType = product.type;
    this.productCount = product.count;
    this.productPrice = product.price;
    this.productDiscount = product.discount;
  }
}
