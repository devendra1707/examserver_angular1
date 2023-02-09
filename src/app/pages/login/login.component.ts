import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    username: '',
    password: ''
  }


  constructor(private snake: MatSnackBar, private login: LoginService, private router: Router) { }

  ngOnInit(): void {

  }

  formSubmit() {
    console.log("Login Form Submitted ...")
    if (this.loginData.username.trim() == '' ||
      this.loginData.username == null) {
      this.snake.open('UserName is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    if (this.loginData.password.trim() == '' ||
      this.loginData.password == null) {
      this.snake.open('Password is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    // Request to server to generate token
    this.login.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log("Success");
        console.log(data);

        // login...
        this.login.loginUser(data.token);

        this.login.getCurrentUser().subscribe(
          (user: any) => {
            this.login.setUser(user);
            console.log(user);

            // redirect ... ADMIN : admin-dashbord
            // redirect ... NORMAL : normal-dashbord

            if (this.login.getUserRole() == "ADMIN") {
              // admin dashboard
              // window.location.href='/admin'
              this.router.navigate(['admin'])
              this.login.loginStatusSubject.next(true);
            } else if (this.login.getUserRole() == 'NORMAL') {
              // normal user dashboard
              // window.location.href='/user-dashboard'
              this.login.loginStatusSubject.next(true);
              this.router.navigate(['user-dashboard/0'])
            } else {
              this.login.logout();
              location.reload();
            }

          }
        );

      },
      (error) => {
        console.log("Error !!!");
        console.log(error);
      }

    )

  }

}
