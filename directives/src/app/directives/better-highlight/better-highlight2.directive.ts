import { Directive, ElementRef, HostBinding, HostListener, OnInit, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appBetterHighlight2]'
})
export class BetterHighlight2Directive implements OnInit {
  @Input() defaultHighlightColor: string;
  @Input() defaultColor: string;
  @Input() highlightColor: string;
  @Input() onHoverColor: string;
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor;
    this.color = this.onHoverColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultHighlightColor;
    this.color = this.defaultColor;
  }
}
