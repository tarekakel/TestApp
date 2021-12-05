import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[limit-to]',
  host: {
    '(keypress)': '_onKeypress($event)',
  },
})
export class LimitToDirective {
  @Input('limit-to') limitTo: string | number | undefined;
  _onKeypress(e: {
    target: { value: string | any[] };
    preventDefault: () => void;
  }): void {
    const limit = +this.limitTo!;
    if (e.target.value.length === limit) e.preventDefault();
  }
}
