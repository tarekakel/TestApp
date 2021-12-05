import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { User } from './demo/_models/user';
import { AuthenticationService } from './demo/_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentUser: User = new User();
  mapCenter = [25.276987, 55.296249];
  basemapType = 'satellite';
  mapZoomLevel = 12;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    {
      this.authenticationService.currentUser.subscribe(
        (x: any) => (this.currentUser = x)
      );
    }
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
  mapLoadedEvent(status: boolean) {
    console.log('The map loaded: ' + status);
  }
}
