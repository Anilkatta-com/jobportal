import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-jobs-details',
  templateUrl: './jobs-details.component.html',
  styleUrls: ['./jobs-details.component.scss']
})
export class JobsDetailsComponent implements OnInit {
  id : any = ""
  job: any = {}

  constructor(private route: ActivatedRoute , private http : HttpClient, public userService:UserService) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')

    console.log("Job ID :",this.id)
    // this.http.get("https://1337-frosty-dream-93257464.in-ws1.runcode.io/jobs/" + this.id).subscribe((response)=>{
    //   console.log(response)
    this.userService.jobdetails(this.id).subscribe((response:any)=>{
      this.job = response;

    })
  }

}
