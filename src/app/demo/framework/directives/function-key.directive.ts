// import {
//   Directive,
//   OnInit,
//   HostListener,
//   Input,
//   TemplateRef,
// } from '@angular/core';
// import * as modal from 'ngx-bootstrap-modal';

// import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

// @Directive({
//   selector: '[FunctionKey]',
// })
// export class FunctionKeyDirective implements OnInit {
//   @Input() FunctionKey: string | undefined;
//   @Input() TemplateSize: string | undefined;
//   @Input() TemplateToOpen: TemplateRef<any> | undefined;

//   public modalRef: BsModalRef;
//   public modalClass: string | undefined;

//   constructor(public modalService: modal.DialogService) {}

//   ngOnInit() {
//     if (
//       this.TemplateSize == '' ||
//       this.TemplateSize == null ||
//       typeof this.TemplateSize === 'undefined'
//     ) {
//       this.TemplateSize = 'Medium';
//       this.modalClass = 'modal-md';
//     }

//     if (this.TemplateSize == 'Large') {
//       this.modalClass = 'modal-lg';
//     }
//     if (this.TemplateSize == 'Medium') {
//       this.modalClass = 'modal-md';
//     }
//     if (this.TemplateSize == 'Small') {
//       this.modalClass = 'modal-sm';
//     }
//   }

//   closeTemplate() {
//     this.modalService.removeDialog();
//   }

//   @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
//     let e = <KeyboardEvent>event;
//     if (e.keyCode == 112 && this.FunctionKey == 'F1') {
//       this.modalRef = this.modalService.show(
//         this.TemplateToOpen,
//         Object.assign({}, { class: this.modalClass })
//       );
//     }
//     if (e.keyCode == 113 && this.FunctionKey == 'F2') {
//       this.modalRef = this.modalService.show(
//         this.TemplateToOpen,
//         Object.assign({}, { class: this.modalClass })
//       );
//     }
//     if (e.keyCode == 114 && this.FunctionKey == 'F3') {
//       this.modalRef = this.modalService.show(
//         this.TemplateToOpen,
//         Object.assign({}, { class: this.modalClass })
//       );
//     }
//     if (e.keyCode == 115 && this.FunctionKey == 'F4') {
//       this.modalRef = this.modalService.show(
//         this.TemplateToOpen,
//         Object.assign({}, { class: this.modalClass })
//       );
//     }
//     if (e.keyCode == 116 && this.FunctionKey == 'F5') {
//       this.modalRef = this.modalService.show(
//         this.TemplateToOpen,
//         Object.assign({}, { class: this.modalClass })
//       );
//     }
//     if (e.keyCode == 117 && this.FunctionKey == 'F6') {
//       this.modalRef = this.modalService.show(
//         this.TemplateToOpen,
//         Object.assign({}, { class: this.modalClass })
//       );
//     }
//     if (e.keyCode == 118 && this.FunctionKey == 'F7') {
//       this.modalRef = this.modalService.show(
//         this.TemplateToOpen,
//         Object.assign({}, { class: this.modalClass })
//       );
//     }
//     if (e.keyCode == 119 && this.FunctionKey == 'F8') {
//       this.modalRef = this.modalService.show(
//         this.TemplateToOpen,
//         Object.assign({}, { class: this.modalClass })
//       );
//     }
//     if (e.keyCode == 120 && this.FunctionKey == 'F9') {
//       this.modalRef = this.modalService.show(
//         this.TemplateToOpen,
//         Object.assign({}, { class: this.modalClass })
//       );
//     }
//     if (e.keyCode == 121 && this.FunctionKey == 'F10') {
//       this.modalRef = this.modalService.show(
//         this.TemplateToOpen,
//         Object.assign({}, { class: this.modalClass })
//       );
//     }
//     if (e.keyCode == 122 && this.FunctionKey == 'F11') {
//       this.modalRef = this.modalService.show(
//         this.TemplateToOpen,
//         Object.assign({}, { class: this.modalClass })
//       );
//     }
//     if (e.keyCode == 123 && this.FunctionKey == 'F12') {
//       this.modalRef = this.modalService.show(
//         this.TemplateToOpen,
//         Object.assign({}, { class: this.modalClass })
//       );
//     }
//   }
// }
