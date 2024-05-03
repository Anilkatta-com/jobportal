import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable, ɵisListLikeIterable } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { environment } from 'src/environments/environment';
import { catchError,switchMap } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.baseUrl
  constructor(public _http:HttpClient) {
    console.log()

   }
   login(user:any){
    return this._http.post(this.baseUrl+'users/login',user)
   }
   jobslist(){
    return this._http.get(this.baseUrl+'jobs')
   }
   jobdetails(id:any){
    return this._http.get(this.baseUrl+'jobs/'+id)
   }
   register(user:any){
    return this._http.post(this.baseUrl+'users/register',user)
   }
   editjob(jobId:any,postJob:any){
    return this._http.patch(this.baseUrl+'jobs/'+ jobId,postJob)
   }
   getjob(jobId:any){
    return this._http.get(this.baseUrl+'jobs/'+jobId)
   }
   postjob(postJob:any){
   return this._http.post(this.baseUrl+ 'jobs',postJob)
   }
  //  deletejob(jobId:any){
  //  return this._http.delete(this.baseUrl+ 'jobs/'+jobId)
  //  }
  }