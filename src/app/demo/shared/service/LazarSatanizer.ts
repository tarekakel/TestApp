import { NgModule, Sanitizer, SecurityContext, Injectable, Optional, SkipSelf } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';



export class LazarSatanizer implements Sanitizer {

  constructor(@Optional() private domSanitizer: DomSanitizer){}
  
  sanitize(context: SecurityContext, value: string | null) {
  
    if(context === SecurityContext.URL || SecurityContext.RESOURCE_URL)
      return value;

    
    return this.domSanitizer === null ?
      value :
      this.domSanitizer.sanitize(context, value);
  }
}