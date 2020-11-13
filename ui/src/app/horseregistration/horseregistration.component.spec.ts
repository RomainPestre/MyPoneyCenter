import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorseregistrationComponent } from './horseregistration.component';

describe('HorseregistrationComponent', () => {
  let component: HorseregistrationComponent;
  let fixture: ComponentFixture<HorseregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorseregistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorseregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
