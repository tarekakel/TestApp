import { Component, OnInit } from '@angular/core';
import { DefaultLocale, DateTimeOptions, Language, LocaleService } from 'angular-l10n';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @DefaultLocale() defaultLocale: string;
  @Language() lang: string;

    year: Date = new Date();
    options: DateTimeOptions = { year: 'numeric' };

    constructor() {
       
    }
        
    ngOnInit() { }
       
}
