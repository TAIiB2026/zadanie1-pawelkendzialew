import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appPodkreslenie]',
  standalone: false
})
export class PodkreslenieDirective {

  @HostBinding('style.textDecoration') textDecoration: string = 'none';

  @HostListener('mouseenter') onMouseEnter() {
    this.textDecoration = 'underline';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.textDecoration = 'none';
  }
}