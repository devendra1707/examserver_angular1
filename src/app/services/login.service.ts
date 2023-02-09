import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  public loginStatusSubject = new Subject<boolean>();

  constructor(private http : HttpClient) { }

  // Current User : which is login
public getCurrentUser(){
  return this.http.get(`${baseUrl}/current-user`);
}


  //  generate token
  public generateToken(loginData : any){

    return this.http.post(`${baseUrl}/generate-token`,loginData);
  }

  // Login User : set token in local storage
  public loginUser(token : any){
    localStorage.setItem("token", token);
    // this.loginStatusSubject.next(true);
    return true;
  }

  // isLogin : User is login or not
  public isLogIn(){
    let tokenStr = localStorage.getItem("token");
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
      return false;
    }else{
      return true;
    }
  }


  // logOut : remove token from local storage
  public logout(){
    localStorage.removeItem('token');
    return true;
  }

  // get token
  public getToken(){
    return localStorage.getItem("token");
  }

  // set user detail
  public setUser(user : any){
    localStorage.setItem("user", JSON.stringify(user));
  }

  // getUser
  public getUser(){
    let userStr = localStorage.getItem("user");
    if(userStr != null)
    {
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  // get User role
  public getUserRole(){
    let user = this.getUser()
    return user.authorities[0].authority;
  }
}
