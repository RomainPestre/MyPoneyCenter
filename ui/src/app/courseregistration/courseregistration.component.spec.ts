import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseregistrationComponent } from './courseregistration.component';

describe('CourseregistrationComponent', () => {
  let component: CourseregistrationComponent;
  let fixture: ComponentFixture<CourseregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseregistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
