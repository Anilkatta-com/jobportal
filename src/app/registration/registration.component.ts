import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  userRegister:any={}

  constructor(private http:HttpClient , private router:Router ,public userService:UserService) { }

  ngOnInit(): void {
  }
  handleRegister(){
    // console.log(this.userRegister)
    console.log("Name:"+ this.userRegister.name,"Email:"+this.userRegister.email,"Password:"+ this.userRegister.password,"Reapeat yout Password:"+this.userRegister.repeatpassword)
    //https://muddy-meadow-45479534.in-ws2.runcode.io/
    
    // this.http.post('https://1337-frosty-dream-93257464.in-ws2.runcode.io/users/login',this.userRegister).subscribe(response=>
    // {
    //   console.log(response)
    this.userService.login(this.userRegister).subscribe((response:any)=>{
      this.router.navigate(['/login'])
      alert("Registration Successfull")
    })

}
}
