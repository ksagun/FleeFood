import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LocationFacadeService } from '../../state/location/services/location-facade.service';
import { SubmitStatusDialogComponent } from '../submit-status-dialog/submit-status-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'food-stash-card',
  templateUrl: './food-stash-card.component.html',
  styleUrls: ['./food-stash-card.component.css'],
})
export class FoodStashCardComponent implements OnInit {
  form!: FormGroup;

  @Input()
  location!: string;

  @Input()
  isLoading!: Observable<boolean>;

  @Input()
  foodStash$!: any;

  @Input()
  stashLoading!: Observable<boolean>;

  entrySubmitted$!: any;

  sub!: Subscription;

  constructor(
    private fb: FormBuilder,
    private location$: LocationFacadeService,
    private dialogRef: MatDialog
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      contact: [null, [Validators.required]],
      address1: [null, [Validators.required]],
      address2: [null, [Validators.required]],
      reason: [null, [Validators.required]],
    });
  }

  submitEntry(id: string) {
    this.form.value['stashid'] = id;
    this.location$.submitFoodStashEntry(this.form.value);

    if (this.sub) this.sub.unsubscribe();
    this.sub = this.location$.submitEntry$.subscribe((s) => {
      if (s) {
        this.entrySubmitted$ = s.success;
        this.form.reset();

        if (s.success) {
          let dialog = this.dialogRef.open(SubmitStatusDialogComponent, {
            data: {
              caption: 'Congratulations you submitted an entry!',
              subdetails:
                'The organizer will contact you as soon as you are scheduled to get the food stash',
            },
          });
          dialog.disableClose = true;
          dialog.afterClosed().subscribe((s) => {
            location.reload();
          });
        } else {
          let dialog = this.dialogRef.open(SubmitStatusDialogComponent, {
            data: {
              caption: 'Error submitting entry',
              subdetails: s.msg,
            },
          });
          dialog.disableClose = true;
          dialog.afterClosed().subscribe((s) => {
            location.reload();
          });
        }
      }
    });
  }
}
