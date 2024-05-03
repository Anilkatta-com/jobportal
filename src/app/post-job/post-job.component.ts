import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.scss']
})
export class PostJobComponent implements OnInit {

  postjob: any = {}
  jobId: any = ""
  private _router: any = {}
  constructor(private http: HttpClient, private router: Router, private Router: ActivatedRoute, public userService: UserService) { }

  ngOnInit(): void {
    this.jobId = this.Router.snapshot.paramMap.get("id")
    console.log(this.jobId)
    this.userService.getjob(this.jobId).subscribe((response: any) => {
      if (this.jobId) {
        // this.http.get("https://1337-frosty-dream-93257464.in-ws2.runcode.io/jobs/" + this.jobId).subscribe((response) => {
        console.log(response)

        this.postjob = response;
        // })
      }
    })



  }
  handleJobPost() {
    // console.log(this.jobDetails)
    // this.http.post('https://jsonplaceholder.typicode.com/posts',this.jobDetails).subscribe(response=>
    // {
    //   console.log(response)
    // })

    // console.log("Jobtitle:"+ this.userJobPost.jobtitle,"Email:"+this.userJobPost.email,"Password:"+ this.userRegister.password,"Reapeat yout Password:"+this.userRegister.repeatpassword)
    // //https://muddy-meadow-45479534.in-ws2.runcode.io/

    // this.http.post('https://1337-frosty-dream-93257464.in-ws2.runcode.io/jobs', this.postjob).subscribe(response => {
      this.userService.postjob(this.postjob).subscribe((response: any) => {
    console.log(response)
      alert(JSON.stringify(response))

      alert('Post-job Successfully')
      this.router.navigate(['/jobs-list'])
    })


    console.log(this.postjob)
    this.userService.editjob(this.jobId, this.postjob).subscribe((response: any) => {
      if (this.jobId) {
        alert("Successfully edited your job")

        // this.http.patch("https://1337-frosty-dream-93257464.in-ws1.runcode.io/jobs/"+this.jobId , this.postjob).subscribe(response =>{

        console.log(response)
        this.router.navigate(['/jobs-list'])

        // })
      }

      else {
        // this.http.post("https://1337-frosty-dream-93257464.in-ws1.runcode.io/jobs", this.postjob).subscribe(response => {
        console.log(response)
        this.userService.postjob(this.postjob).subscribe((response: any) => {
          alert("Successfully posted your job")
          this.router.navigate(['/jobs-list'])
          // })
        })
      }
  })

  }
}