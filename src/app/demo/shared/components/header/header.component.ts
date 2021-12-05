import { Component, OnInit, Inject, ChangeDetectorRef} from '@angular/core';
import { AuthService } from '../../../framework/helpers/auth.service';
import { LocaleService, TranslationService, Language } from 'angular-l10n';
import { DOCUMENT } from '@angular/platform-browser';
import { Direction } from '@angular/cdk/bidi';
import { listLocales } from 'ngx-bootstrap/chronos';
import { BaseComponent } from '../../../framework/core/base-component';

import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { UserService } from '../../service/UserService';
import { AlertMessageType } from '../../../framework/view-models/enums';
import { MenuMaster } from '../../../admin/view-models/MenuMaster';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html', 
  styleUrls: ['./header.component.css'],
  providers: [UserService]
})
export class HeaderComponent extends BaseComponent {

 
  myLang: string;
  @Language() lang: string;
  dir: Direction;
  menus:MenuMaster[];
  constructor(public authService: AuthService,private userService:UserService,
    public locale: LocaleService,
    @Inject(DOCUMENT) private document,
    private BsLocaleService: BsLocaleService,
    public changeDetectorRef?: ChangeDetectorRef) {

    super();

  }

  ngOnInit(): void {

    //this.translationService.translationChanged().subscribe(
    //  () => { this.title = this.translationService.translate('Title'); }
    //);

   // this.dir = this.getLanguageDirection();
    //this.handelChangeDirection(this.dir);
    this.myLang = this.lang;
    //this.ngAfterViewInit();
    var current_role = this.authService.getRoles();
    // this.userService.getMenuByUserRole(current_role[0])
    // .subscribe(
    //   res => {
    //     this.menus = res;
    //   },
    //   error => {
    //     this.alertService.showAlertMessage(this.translationService.translate('ErrorTitle'),
    //       this.translationService.translate(error.message), AlertMessageType.Error);
    //   });
  }
  

  saveLangHeader(lang) {

    this.selectLocale(this.myLang);
    this.dir = this.getLanguageDirection(this.myLang);
   // this.handelChangeDirection(this.dir);
    this.ngAfterViewInit();
    
    //window.location.reload();
  }

  getMyLang() {

    return this.myLang;
  }

  selectLocale(language: string): void {

      this.locale.setDefaultLocale(language);

      this.locale.defaultLocaleChanged.subscribe(res => {

          this.changeDetectorRef.markForCheck();
      });
  }

  getLanguageDirection(language?: string): Direction {

    return this.locale.getLanguageDirection(language) as Direction;
  }

  handelChangeDirection(dir) {

    if (dir === 'rtl') {
        document.body.classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
    }
  }

  onSelectedLang(lang: string) {
    
    this.myLang = lang;
    this.BsLocaleService.use(this.myLang);
    this.saveLangHeader(this.myLang);
    this.ngAfterViewInit();    
  }

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }

}
