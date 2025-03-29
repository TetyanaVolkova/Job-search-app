import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { UntypedFormBuilder, Validators, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  jobs = [];
  moreDetails = false;
  isChecked = true;
  formGroup: UntypedFormGroup;

  constructor(private httpService: HttpService,
              formBuilder: UntypedFormBuilder) {
      this.formGroup = formBuilder.group({
        view: ''
    });
  }

  ngOnInit(): void {
    this.httpService.getJobs(null)
    .subscribe((jobs) => {
      this.jobs = jobs['jobs'];
      console.log(this.jobs)
    })
  }

  onFormChange() {
    console.log(this.formGroup.value);
  }

  onSubmit(myForm) {
    this.httpService.getJobs(myForm.form.controls.search.value)
    .subscribe((jobs) => {
      this.jobs = jobs['jobs'];
      console.log(this.jobs)
    })

    console.log(myForm.form.controls.search.value);
    myForm.form.controls.search.setValue('');
  }

  onMoreDetails(job) {
    this.moreDetails = !this.moreDetails;
    const description = job.description;
    if(this.moreDetails) {
      document.getElementById(job.id).innerHTML = description;
      document.getElementById('card-'+job.id).classList.add('more_details');
      document.getElementById('search_wrapper').classList.add('overflow_hidden');
    } else {
      document.getElementById(job.id).innerHTML = '';
      document.getElementById('card-'+job.id).classList.remove('more_details');
      document.getElementById('search_wrapper').classList.remove('overflow_hidden');
    }
  }

}
