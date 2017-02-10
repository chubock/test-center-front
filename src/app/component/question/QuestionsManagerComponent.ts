import {Input, Component} from "@angular/core";
/**
 * Created by Yubar on 1/26/2017.
 */

@Component({
  selector: 'questions-manager',
  templateUrl: './questions-manager-component.html',
  styles: ['.nav-pills a, .dropdown-menu a {cursor: pointer}']
})
export class QuestionsManagerComponent {
  type:string = "numeric";
}
