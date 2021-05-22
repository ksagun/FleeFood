import { Component, OnInit, Input, Output } from '@angular/core';


@Component({
  selector: 'food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.css']
})
export class FoodCardComponent implements OnInit {

  constructor() { }

  @Input()
  data: any;

  ngOnInit(): void {
  }


}
