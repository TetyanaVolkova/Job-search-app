import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobSeekerComponent } from './job-seeker/job-seeker.component';
import { SearchComponent } from './job-seeker/search/search.component';
import { ProfileComponent } from './job-seeker/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'job-seeker/search',
    pathMatch: 'full'
  },
  { path: 'job-seeker', component: JobSeekerComponent, children: [
    { path: 'search', component: SearchComponent },
    { path: 'profile', component: ProfileComponent }
  ]},
  {
    path: '**',
    redirectTo: 'access/sign-in',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
