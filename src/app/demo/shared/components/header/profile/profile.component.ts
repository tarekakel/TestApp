import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from "../../../../framework/helpers/auth.service";
import { LocaleService, TranslationService, Language } from 'angular-l10n';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Output() changeLang = new EventEmitter<string>();

  fullName: string;
  lang: string;
  languageSelected: string;
  user_thumbnail: string = 'assets/images/user.png';

  constructor(private authService: AuthService,
    public locale: LocaleService) { }

  ngOnInit() {
    this.fullName = this.authService.getFullName();
  }

  logout() {
    this.authService.logout();
  }

}
