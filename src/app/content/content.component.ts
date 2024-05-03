import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private router:Router, public userService:UserService) { }

  ngOnInit(): void {
  }
  handleLogin(){
  // this.userService.login(this.userLogin).subscribe((response:any)=>{

    // if (response.status){
    //   alert('Login Successfully')
      // this.router.navigate(['/login'])
  //     localStorage.setItem ('user', JSON.stringify(response.data))
  //   }
  //   else{
  //     alert('email/password does not match')
    
  //   }
  // }

  }
}
