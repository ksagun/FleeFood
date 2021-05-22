import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitStatusDialogComponent } from './submit-status-dialog.component';

describe('SubmitStatusDialogComponent', () => {
  let component: SubmitStatusDialogComponent;
  let fixture: ComponentFixture<SubmitStatusDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitStatusDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitStatusDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
