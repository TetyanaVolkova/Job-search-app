import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobSeekerComponent } from './job-seeker/job-seeker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SearchComponent } from './job-seeker/search/search.component';
import { ProfileComponent } from './job-seeker/profile/profile.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { FavoritesComponent } from './job-seeker/favorites/favorites.component';
import { SharedMessageComponent } from './job-seeker/shared-message/shared-message.component';
import { InterviewsComponent } from './job-seeker/interviews/interviews.component';
import { CalendarComponent } from './job-seeker/calendar/calendar.component';
import { NotesComponent } from './job-seeker/notes/notes.component';
import { SettingsComponent } from './job-seeker/settings/settings.component';
import { TableComponent } from './job-seeker/table/table.component';
import { KeysPipe } from './job-seeker/table/keys-pipe.pipe';
import { DownloadButtonComponent } from './job-seeker/download-button/download-button.component';
import { LoaderComponent } from './job-seeker/loader/loader.component';


@NgModule({ declarations: [
        AppComponent,
        JobSeekerComponent,
        SearchComponent,
        ProfileComponent,
        FavoritesComponent,
        SharedMessageComponent,
        InterviewsComponent,
        CalendarComponent,
        NotesComponent,
        SettingsComponent,
        TableComponent,
        DownloadButtonComponent,
        LoaderComponent,
        KeysPipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent], imports: [BrowserModule,
        CommonModule,
        RouterModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonToggleModule,
        MatButtonModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatSidenavModule,
        MatInputModule,
        MatCardModule,
        MatTooltipModule,
        MatDividerModule,
        MatExpansionModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
