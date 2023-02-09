import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService, private _snackBar: MatSnackBar) { }

  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  }

  ngOnInit(): void {

  }
  formSubmit() {
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      // alert('User is required !!');
      this._snackBar.open('userName is required !!!', '', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }
    // validation

    // add user : userService
    this.userService.addUser(this.user).subscribe(
      (data : any) => {
        // Success
        console.log(data)
        //alert("Success");
        Swal.fire('Successfully done', 'User id is '+data.id, 'success')
      },
      (error) => {
        // error
        console.log(error)
        //alert("Something Went Wrong !!!")
        this._snackBar.open('Something went wrong !!', '', {
          duration: 3000,
        });
      }
    )
  }

  // this.user
}
