import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[OnlyEnglish]',
})
export class OnlyEnglishDirective {
  @Input() OnlyEnglish: boolean | undefined;

  constructor(private el: ElementRef) {}

  @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('keydown', ['$event']) onKeyDown(
    event: KeyboardEvent
  ): false | undefined {
    let e = <KeyboardEvent>event;

    if (e.ctrlKey && (e.keyCode == 88 || e.keyCode == 67 || e.keyCode == 86)) {
      return false;
    }
    if (this.OnlyEnglish) {
      if (e.keyCode == 59 || e.keyCode == 186) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + ';';
      }
      if (e.keyCode == 65 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'a';
      }
      if (e.shiftKey && e.keyCode == 65) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'A';
      }

      if (e.keyCode == 66 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'b';
      }
      if (e.shiftKey && e.keyCode == 66) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'B';
      }
      if (e.keyCode == 67 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'c';
      }
      if (e.shiftKey && e.keyCode == 67) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'C';
      }
      if (e.keyCode == 68 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'd';
      }
      if (e.shiftKey && e.keyCode == 68) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'D';
      }
      if (e.keyCode == 69 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'e';
      }
      if (e.shiftKey && e.keyCode == 69) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'E';
      }
      if (e.keyCode == 70 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'f';
      }
      if (e.shiftKey && e.keyCode == 70) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'F';
      }
      if (e.keyCode == 71 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'g';
      }
      if (e.shiftKey && e.keyCode == 71) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'G';
      }
      if (e.keyCode == 72 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'h';
      }
      if (e.shiftKey && e.keyCode == 72) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'H';
      }
      if (e.keyCode == 73 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'i';
      }
      if (e.shiftKey && e.keyCode == 73) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'I';
      }
      if (e.keyCode == 74 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'j';
      }
      if (e.shiftKey && e.keyCode == 74) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'J';
      }
      if (e.keyCode == 75 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'k';
      }
      if (e.shiftKey && e.keyCode == 75) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'K';
      }
      if (e.keyCode == 76 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'l';
      }
      if (e.shiftKey && e.keyCode == 76) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'L';
      }
      if (e.keyCode == 77 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'm';
      }
      if (e.shiftKey && e.keyCode == 77) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'M';
      }
      if (e.keyCode == 78 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'n';
      }
      if (e.shiftKey && e.keyCode == 78) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'N';
      }
      if (e.keyCode == 79 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'o';
      }
      if (e.shiftKey && e.keyCode == 79) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'O';
      }
      if (e.keyCode == 80 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'p';
      }
      if (e.shiftKey && e.keyCode == 80) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'P';
      }
      if (e.keyCode == 81 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'q';
      }
      if (e.shiftKey && e.keyCode == 81) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'Q';
      }
      if (e.keyCode == 82 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'r';
      }
      if (e.shiftKey && e.keyCode == 82) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'R';
      }
      if (e.keyCode == 83 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 's';
      }
      if (e.shiftKey && e.keyCode == 83) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'S';
      }
      if (e.keyCode == 84 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 't';
      }
      if (e.shiftKey && e.keyCode == 84) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'T';
      }
      if (e.keyCode == 85 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'u';
      }
      if (e.shiftKey && e.keyCode == 85) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'U';
      }
      if (e.keyCode == 86 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'v';
      }
      if (e.shiftKey && e.keyCode == 86) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'V';
      }
      if (e.keyCode == 87 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'w';
      }
      if (e.shiftKey && e.keyCode == 87) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'W';
      }
      if (e.keyCode == 88 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'x';
      }
      if (e.shiftKey && e.keyCode == 88) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'X';
      }
      if (e.keyCode == 89 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'y';
      }
      if (e.shiftKey && e.keyCode == 89) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'Y';
      }
      if (e.keyCode == 90 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'z';
      }
      if (e.shiftKey && e.keyCode == 90) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'Z';
      }
      if (e.keyCode == 188) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + ',';
      }
      if (e.keyCode == 190 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + '.';
      }
      if (e.keyCode == 191 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + '/';
      }
      if (e.shiftKey && e.keyCode == 191) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + '?';
      }

      if (e.shiftKey && e.keyCode == 192) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + '~';
      }
      if (e.keyCode == 192 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + '`';
      }
      if (e.keyCode == 219 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + '[';
      }
      if (e.shiftKey && e.keyCode == 219) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + '{';
      }
      if (e.keyCode == 221 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + ']';
      }
      if (e.shiftKey && e.keyCode == 221) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + '}';
      }
      if (e.keyCode == 222) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + "'";
      }
    }
  }
}
