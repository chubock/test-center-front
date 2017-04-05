import {Product} from "../../products-module/model/Product";
/**
 * Created by yubar on 4/5/17.
 */

export class OrderItem {
  product:Product;
  count:number;
  productType:string;
  productCount:number;
  productPrice:number;
  productDiscount:number;
}
