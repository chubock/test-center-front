import {Directive, Renderer, ElementRef, Input} from "@angular/core";
/**
 * Created by Yubar on 1/12/2017.
 */
@Directive({
  selector : '[autoFocus]'
})
export class FocusDirective {
  constructor(public renderer: Renderer, public elementRef: ElementRef) {}

  @Input()
  set autoFocus(value :boolean) {
    if(value) {
      this.renderer.invokeElementMethod(
        this.elementRef.nativeElement, 'focus', []);
    }
  }
}
