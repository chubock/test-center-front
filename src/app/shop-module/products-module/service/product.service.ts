import {URLSearchParams} from "@angular/http";
import {Product} from "../model/product";
import {Injectable} from "@angular/core";
import {environment} from "../../../../environments/environment";
import {Page} from "../../../shared-module/model/page";
import {AuthHttp} from "angular2-jwt";
/**
 * Created by yubar on 4/4/17.
 */

@Injectable()
export class ProductService {

  constructor(private http:AuthHttp) {}

  getProducts(page:number, size:number):Promise<Page<Product>> {

    let params: URLSearchParams = new URLSearchParams;
    params.set("page", page.toString());
    params.set("size", size.toString());

    return this.http.get(environment.apiEndPoint + "/shop-service/products", {search: params})
      .toPromise().then(resp => resp.json() as Page<Product>)
  }

  getProduct(id:number):Promise<Product> {
    return this.http.get(environment.apiEndPoint + "/shop-service/products/" + id)
      .toPromise().then(resp => resp.json() as Product);
  }

  saveProduct(product:Product):Promise<Product> {
    return this.http.post(environment.apiEndPoint + "/shop-service/products", product)
      .toPromise().then(resp => resp.json() as Product);
  }

}
