import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-job-seeker',
  templateUrl: './job-seeker.component.html',
  styleUrls: ['./job-seeker.component.scss']
})
export class JobSeekerComponent implements OnInit {
  options: FormGroup;

  constructor(fb: FormBuilder, private httpService: HttpService) {
    this.options = fb.group({
    });
  }

  ngOnInit(): void {
  }

}
