import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  isLogIn = true;
  user = null;

  constructor(public login: LoginService) { }

  public logout() {
    this.login.logout();
    this.isLogIn = false;
    // this.user = null;
    window.location.reload();

    // this.login.loginStatusSubject.next(false);
  }
}
