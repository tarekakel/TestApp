import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[OnlyArabic]'
})
export class OnlyArabicDirective {

  @Input() OnlyArabic: boolean;

  constructor(private el: ElementRef) { }

  @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    let e = <KeyboardEvent>event;
    if (e.ctrlKey && (e.keyCode == 88 || e.keyCode == 67 || e.keyCode == 86)) {
      return false;
    }
    if (this.OnlyArabic) {
      if (e.keyCode == 59 || e.keyCode == 186) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ك';  // 59 for firefox, 186 for Chrome and IE   
      }
      if (e.shiftKey && e.keyCode == 65) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ِ';
      }
      if (e.keyCode == 65 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ش';
      }
      if (e.shiftKey && e.keyCode == 66) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'لآ';
      }
      if (e.keyCode == 66 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'لا';
      }
      if (e.keyCode == 67) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ؤ';
      }
      if (e.keyCode == 68) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ي';
      }
      if (e.shiftKey && e.keyCode == 69) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ُ';
      }
      if (e.keyCode == 69 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ث';
      }
      if (e.keyCode == 70) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ب';
      }
      if (e.shiftKey && e.keyCode == 71) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'لأ';
      }
      if (e.keyCode == 71 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ل';
      }
      if (e.shiftKey && e.keyCode == 72) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'أ';
      }
      if (e.keyCode == 72 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ا';
      }
      if (e.keyCode == 73) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ه';
      }
      if (e.keyCode == 74) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ت';
      }
      if (e.shiftKey && e.keyCode == 75) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + '،';
      }
      if (e.keyCode == 75 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ن';
      }
      if (e.keyCode == 76) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'م';
      }
      if (e.keyCode == 77) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ة';
      }
      if (e.shiftKey && e.keyCode == 78) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'آ';
      }
      if (e.keyCode == 78 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ى';
      }
      if (e.keyCode == 79) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'خ';
      }
      if (e.keyCode == 80) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ح';
      }
      if (e.shiftKey && e.keyCode == 81) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ُ';
      }
      if (e.keyCode == 81 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ض';
      }
      if (e.shiftKey && e.keyCode == 82) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ٌ';
      }
      if (e.keyCode == 82 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ق';
      }
      if (e.shiftKey && e.keyCode == 83) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ٍ';
      }
      if (e.keyCode == 83 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'س';
      }
      if (e.shiftKey && e.keyCode == 84) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'لإ';
      }
      if (e.keyCode == 84 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ف';
      }
      if (e.keyCode == 85) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ع';
      }
      if (e.keyCode == 86) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ر';
      }
      if (e.shiftKey && e.keyCode == 87) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ً';
      }
      if (e.keyCode == 87 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ص';
      }
      if (e.shiftKey && e.keyCode == 88) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ْ';
      }
      if (e.keyCode == 88 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ء';
      }
      if (e.shiftKey && e.keyCode == 89) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'إ';
      }
      if (e.keyCode == 89 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'غ';
      }
      if (e.keyCode == 90) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ئ';
      }
      if (e.keyCode == 188) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'و';
      }
      if (e.shiftKey && e.keyCode == 190) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + '.';
      }
      if (e.keyCode == 190 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ز';
      }
      if (e.keyCode == 191) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ظ';
      }
      if (e.shiftKey && e.keyCode == 192) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ّ';
      }
      if (e.keyCode == 192 && !e.shiftKey) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ذ';
      }
      if (e.keyCode == 219) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ج';
      }
      if (e.keyCode == 221) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'د';
      }
      if (e.keyCode == 222) {
        e.preventDefault();
        this.el.nativeElement.value = this.el.nativeElement.value + 'ط';
      }

    }
  }
}
