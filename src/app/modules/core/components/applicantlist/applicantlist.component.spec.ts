import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantlistComponent } from './applicantlist.component';

describe('ApplicantlistComponent', () => {
  let component: ApplicantlistComponent;
  let fixture: ComponentFixture<ApplicantlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicantlistComponent]
    });
    fixture = TestBed.createComponent(ApplicantlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
