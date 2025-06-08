import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { UntypedFormBuilder, Validators, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { LoaderComponent } from '../loader/loader.component';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    standalone: false
})
export class SearchComponent implements OnInit, OnDestroy {
  jobs = [];
  moreDetails = false;
  isChecked = true;
  formGroup: FormGroup;
  private destroy$ = new Subject<void>();

  constructor(public httpService: HttpService,
              formBuilder: FormBuilder) {
      this.formGroup = formBuilder.group({
        view: ''
    });
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.httpService.getJobs(null)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (jobs) => {
        this.jobs = jobs['jobs'];
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  onFormChange() {
    console.log(this.formGroup.value);
  }

  onSubmit(myForm) {
    this.httpService.setLoader(true);
    this.httpService.getJobs(myForm.form.controls.search.value)
    .pipe(takeUntil(this.destroy$),
      finalize(() => {
        this.httpService.setLoader(false);
        // myForm.form.controls.search.setValue('');
      }))
    .subscribe((jobs) => {
      this.jobs = jobs['jobs'];
      console.log(this.jobs)
    })
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
