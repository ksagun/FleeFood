import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nav-menu-list',
  templateUrl: './nav-menu-list.component.html',
  styleUrls: ['./nav-menu-list.component.css'],
})
export class NavMenuListComponent implements OnInit {
  @Input()
  menu: [];

  constructor() {}

  ngOnInit(): void {}
}
