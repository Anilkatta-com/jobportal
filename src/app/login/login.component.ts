import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterConfigurationFeature } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // email:string =''
  // password:string=''
  userLogin:any={}
  
  //step 1: capturu form data
  //create data variables /object
  //bind varibles to form controls like input type text/ password
  //Note: make sure you import FormsModule in your AppsModule / parent module
  //Note: make sure you give name to each form control as you are using ngModel

  //step 2: send data to API
  //data will be saved in Database
  //API will receive responce Database
  //API will send response to client(Browser)
  //step 3: receive server response
  // step 4: show success message and take necessary actions and redirection

  constructor(private http: HttpClient, private router: Router,public userService:UserService) { }

  ngOnInit(): void {
  }
  handleLogin(){
    // console.log("Email:"+ this.userLogin.email,"Password:"+ this.userLogin.password)
    // //https://muddy-meadow-45479534.in-ws1.runcode.io/
    
    // this.http.post('https://1337-frosty-dream-93257464.in-ws1.runcode.io/users/login',this.userLogin).subscribe((response:any)=>{
    //   console.log(response)
      this.userService.login(this.userLogin).subscribe((response:any)=>{

      if (response.status){
        alert('Login Successfully')
        this.router.navigate(['/'])
        localStorage.setItem ('user', JSON.stringify(response.data))
      }
      else{
        alert('email/password does not match')
      
      }
    })
    // this.http.patch('https://3000-muddy-meadow-45479534.in-ws1.runcode.io/1',this.userLogin).subscribe(response=>
    // {
    //   console.log(response)
    // })
    console.log("End of handleLogin()")
  }

}
