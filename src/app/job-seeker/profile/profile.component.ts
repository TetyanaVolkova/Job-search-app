import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    standalone: false
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  backToResume(): void {
    window.location.href = 'http://tetyanavolkova.com/resume.html'
  }

}
