import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/demo/_models';
import { AuthenticationService } from 'src/app/demo/_services';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavRightComponent implements OnInit {
 user: string;
  constructor(private router: Router,
    private authenticationService: AuthenticationService) { }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
  ngOnInit() 
  {
    this.user = this.authenticationService.getFullName();

  }
}
