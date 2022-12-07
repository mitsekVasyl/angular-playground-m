import { Directive, ElementRef, HostBinding, HostListener, OnInit, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appBetterHighlight2]'
})
export class BetterHighlight2Directive implements OnInit {
  @Input() defaultHighlightColor: string;
  @Input() highlightColor: string;
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.defaultHighlightColor = 'transparent'
  }



  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultHighlightColor;
  }
}
