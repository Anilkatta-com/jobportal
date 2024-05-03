import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {
  


  constructor(private http : HttpClient,public userService:UserService) { }
  jobslist:any=[]
  jobId:any=[]
  
  ngOnInit(): void {
    //  this.http.get("https://1337-frosty-dream-93257464.in-ws2.runcode.io/jobs").subscribe((response)=>{
  
    this.userService.jobslist().subscribe((response:any)=>{
      console.log(response)
      this.jobslist = response

    })
  }


  delete(id:number){
    if (confirm("Are you sure to delete?") == true) {
      this.http.delete("https://1337-frosty-dream-93257464.in-ws1.runcode.io/jobs/"+id).subscribe((response)=>{
      // this.userService.jobslist().subscribe((response:any)=>{
        // this.userService.deletejob(this.jobId).subscribe((response: any) => {
      alert("Deleted Successfully")
      // Hello Anil How are you?
    
      console.log(response)
      // console.log("id:",id)
      this.jobId=response
    // })
  })
    } else {
  
    }
    //https://1337-frosty-dream-93257464.in-ws2.runcode.io/jobs/10

  }

}
// handleJobsListComponenet() {
//   // Assuming you want to pass this.jobslist to the login method
//   this.userService.login(this.JobsListComponent).subscribe((response: any) => {
//     console.log("End of handleJobsList()");
//   });
// }
