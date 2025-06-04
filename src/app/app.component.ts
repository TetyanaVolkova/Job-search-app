import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {
    this.router.initialNavigation();
    console.log(this.router);
  }

  navigateToWebPage(): void {
    window.location.href = 'https://tetyanavolkova.com/'
  }
}
