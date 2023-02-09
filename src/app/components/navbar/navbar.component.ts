import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLogIn = false;
  user = null;

  constructor(public login: LoginService) { }

  ngOnInit(): void {
    this.isLogIn = this.login.isLogIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe(data => {
      this.isLogIn = this.login.isLogIn();
      this.user = this.login.getUser();
    });
  }
  public logout() {
    this.login.logout();
    // this.isLogIn = false;
    // this.user = null;
      window.location.reload();

    // this.login.loginStatusSubject.next(false);
  }

}
