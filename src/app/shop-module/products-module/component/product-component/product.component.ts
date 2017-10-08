import {Component} from "@angular/core";
import {Product} from "../../model/product";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {AlertsService} from "../../../../shared-module/service/alerts.service";
import {Alert} from "../../../../shared-module/model/alert";
/**
 * Created by yubar on 4/4/17.
 */

@Component({
  selector: 'product-component',
  templateUrl: './product.component.html'
})
export class ProductComponent {

  product:Product = new Product();

  constructor(private activatedRoute:ActivatedRoute, private productService:ProductService, private alertService:AlertsService) {}

  ngOnInit():void {
    let id: number = this.activatedRoute.snapshot.params['id'];
    if (id)
      this.productService.getProduct(id).then(product => this.product = product);
  }

  save():void {
    this.productService.saveProduct(this.product).then(product => {
      this.product = product;
      this.alertService.newAlert(new Alert("Product Saved Successfully"))
    })
  }



}
