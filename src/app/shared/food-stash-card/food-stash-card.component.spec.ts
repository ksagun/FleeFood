import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodStashCardComponent } from './food-stash-card.component';

describe('FoodStashCardComponent', () => {
  let component: FoodStashCardComponent;
  let fixture: ComponentFixture<FoodStashCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodStashCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodStashCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
