import {Directive, ElementRef, Renderer, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class Highlight {
  @HostListener('mouseenter') mouseover(){
    this.backgroundColor = 'yellow';
  };
  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor = 'tomato';
  };
  @HostListener('click', ['$event'])
  onClick(event) {
    console.log("Event Target" + event.target);
  }
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }
  private backgroundColor = 'white';
  constructor( private elementRef: ElementRef, private renderer: Renderer) {
      // this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'backgroundColor' , 'yellow')
  }


}
