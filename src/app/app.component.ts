import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false,
})
export class AppComponent implements OnInit {
  readonly color = signal('#b1ed0c');
  isDarkMode: WritableSignal<boolean> = signal(false);

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.router.initialNavigation();
  }

  navigateToWebPage(): void {
    window.location.href = 'https://tetyanavolkova.com/'
  }

  onChange(event: string): void {
    
  }

  toggleDarkMode() {
    this.isDarkMode.update(v => !v);
  }

}
