import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobsDetailsComponent } from './jobs-details/jobs-details.component';
import { PostJobComponent } from './post-job/post-job.component';
import { PostedJobsListComponent } from './posted-jobs-list/posted-jobs-list.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './about/about.component';




const routes: Routes = [
  {
  component: ContentComponent,path:''
},
{
  component: RegistrationComponent,path:'registration'
},
{
  component: LoginComponent,path:'login'
},
{
  component: AboutComponent,path:'about',canActivate:[AuthGuard]
},
{
  component: JobsListComponent,path:'jobs-list',canActivate: [AuthGuard]
},
{
  component: JobsDetailsComponent,path:'jobs-details',canActivate:[AuthGuard]
},
{
  component: JobsDetailsComponent,path:'jobs-details/:id',canActivate:[AuthGuard]
},
{
  component: PostJobComponent,path:'post-job',canActivate:[AuthGuard]
},
{
  component: PostJobComponent,path:'post-job/:id',canActivate:[AuthGuard]
},
{
  component: PostJobComponent,path:'edit-job/:id',canActivate:[AuthGuard]
},
{
  component: PostedJobsListComponent,path:'posted-jobs-list',canActivate:[AuthGuard]
},
{
  component:ProfileComponent,path:'profile',canActivate: [AuthGuard]
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
