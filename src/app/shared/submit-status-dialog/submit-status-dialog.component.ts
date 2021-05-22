import { Component, OnInit, Input, Output, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-submit-status-dialog',
  templateUrl: './submit-status-dialog.component.html',
  styleUrls: ['./submit-status-dialog.component.css'],
})
export class SubmitStatusDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {}
}
