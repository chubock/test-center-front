import {Http, URLSearchParams} from "@angular/http";
import {apiEndPoint} from "../../AppConfig";
import {Product} from "../model/Product";
import {Page} from "../../shared-module/model/Page";
import {Injectable} from "@angular/core";
/**
 * Created by yubar on 4/4/17.
 */

@Injectable()
export class ProductService {

  url:string = "/products";
  serverUrl = apiEndPoint;

  constructor(private http:Http) {}

  getProducts(page:number, size:number):Promise<Page<Product>> {

    let params: URLSearchParams = new URLSearchParams;
    params.set("page", page.toString());
    params.set("size", size.toString());

    return this.http.get(this.serverUrl + this.url, {search: params, withCredentials: true})
      .toPromise().then(resp => resp.json() as Page<Product>)
  }

  getProduct(id:number):Promise<Product> {
    return this.http.get(this.serverUrl + this.url + "/" + id, {withCredentials: true})
      .toPromise().then(resp => resp.json() as Product);
  }

  saveProduct(product:Product):Promise<Product> {
    return this.http.post(this.serverUrl + this.url, product, {withCredentials: true})
      .toPromise().then(resp => resp.json() as Product);
  }

}
