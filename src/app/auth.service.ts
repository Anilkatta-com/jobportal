import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedIn: BehaviorSubject<boolean>;
  constructor(private http: HttpClient){
    this.loggedIn = new BehaviorSubject(false);

  }

  // constructor(public jwtHelper: JwtHelperService){}
  public isAuthenticated(): boolean{
    const user=JSON.parse(localStorage.getItem('user')||'{}');
    if(user.id){
      this.loggedIn.next(true);
      return true  
    }
     this.loggedIn.next(false);
    return false
  }
  public logout(){
    localStorage.removeItem("user")
    this.loggedIn.next(false);
  }
  public async isOwner(jobId:any){
    const user = JSON.parse(localStorage.getItem('user')|| '{}');
    console.log(jobId)
    if(jobId){}
  }
}
