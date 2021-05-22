import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'login-agent',
  templateUrl: './login-agent.component.html',
  styleUrls: ['./login-agent.component.css'],
})
export class LoginAgentComponent implements OnInit {
  constructor() {}
  model!: {};

  @Input()
  form!: FormGroup;

  @Output()
  submitResponse = new EventEmitter<any>();

  @Input()
  isLoading!: Observable<boolean>;

  disabled!: boolean;

  ngOnInit(): void {}

  submit() {
    this.submitResponse.emit();
  }
}
