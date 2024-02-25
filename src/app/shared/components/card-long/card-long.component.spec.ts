import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLongComponent } from './card-long.component';

describe('CardLongComponent', () => {
  let component: CardLongComponent;
  let fixture: ComponentFixture<CardLongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
