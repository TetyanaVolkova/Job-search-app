import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-shared-message',
    templateUrl: './shared-message.component.html',
    styleUrls: ['./shared-message.component.scss'],
    standalone: false
})
export class SharedMessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
