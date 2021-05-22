import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodCardComponent } from './food-card/food-card.component';
import { FoodStashCardComponent } from './food-stash-card/food-stash-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubmitStatusDialogComponent } from './submit-status-dialog/submit-status-dialog.component';

@NgModule({
  declarations: [
    FoodCardComponent,
    FoodStashCardComponent,
    SubmitStatusDialogComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  exports: [
    FoodCardComponent,
    FoodStashCardComponent,
    SubmitStatusDialogComponent,
  ],
})
export class SharedModule {}
