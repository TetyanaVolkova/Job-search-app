import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedMessageComponent } from './shared-message.component';

describe('SharedMessageComponent', () => {
  let component: SharedMessageComponent;
  let fixture: ComponentFixture<SharedMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
