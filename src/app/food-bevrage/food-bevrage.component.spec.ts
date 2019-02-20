import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodBevrageComponent } from './food-bevrage.component';

describe('FoodBevrageComponent', () => {
  let component: FoodBevrageComponent;
  let fixture: ComponentFixture<FoodBevrageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodBevrageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodBevrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
