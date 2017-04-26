import {Component} from "@angular/core";
/**
 * Created by Yubar on 1/26/2017.
 */

@Component({
  selector: 'gre-questions-manager',
  templateUrl: './gre-questions-component.html',
  styles: ['.nav-pills a, .dropdown-menu a {cursor: pointer}']
})
export class GREQuestionsComponent {
  type:string = "numeric";
}
