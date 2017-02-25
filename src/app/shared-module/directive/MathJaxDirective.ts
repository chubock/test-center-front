import {Directive, Input, ElementRef} from "@angular/core";
/**
 * Created by Yubar on 1/27/2017.
 */

declare var MathJax: {
  Hub: {
    Queue: (param: Object[]) => void;
  }
};

@Directive({
  selector: '[mathJax]'
})
export class MathJaxDirective {
  @Input('mathJax') texExpression:string;

  constructor(private el: ElementRef) {
  }

  ngOnChanges() {
    this.el.nativeElement.innerHTML = this.texExpression;
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.el.nativeElement]);
  }
}
