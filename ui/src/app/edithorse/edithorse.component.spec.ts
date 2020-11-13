import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdithorseComponent } from './edithorse.component';

describe('EdithorseComponent', () => {
  let component: EdithorseComponent;
  let fixture: ComponentFixture<EdithorseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdithorseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdithorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
