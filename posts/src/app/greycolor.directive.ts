import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGreycolor]'
})
export class GreycolorDirective {

  constructor( private ref: ElementRef) {
  }

  ngOnInit(){
    this.ref.nativeElement.style.color = 'lightgrey'
  }

}
