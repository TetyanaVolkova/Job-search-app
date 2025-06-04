import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobSeekerComponent } from './job-seeker/job-seeker.component';
import { SearchComponent } from './job-seeker/search/search.component';
import { ProfileComponent } from './job-seeker/profile/profile.component';
import { FavoritesComponent } from './job-seeker/favorites/favorites.component';
import { InterviewsComponent } from './job-seeker/interviews/interviews.component';
import { CalendarComponent } from './job-seeker/calendar/calendar.component';
import { NotesComponent } from './job-seeker/notes/notes.component';
import { SettingsComponent } from './job-seeker/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'job-seeker/search',
    pathMatch: 'full'
  },
  { path: 'job-seeker', component: JobSeekerComponent, children: [
    { path: 'search', component: SearchComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'tables', component: FavoritesComponent },
    { path: 'interviews', component: InterviewsComponent },
    { path: 'calendar', component: CalendarComponent },
    { path: 'notes', component: NotesComponent },
    { path: 'settings', component: SettingsComponent }
  ]},
  {
    path: '**',
    redirectTo: 'job-seeker/profile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
