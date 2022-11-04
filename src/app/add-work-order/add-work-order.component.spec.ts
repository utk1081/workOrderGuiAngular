import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkOrderComponent } from './add-work-order.component';

describe('AddWorkOrderComponent', () => {
  let component: AddWorkOrderComponent;
  let fixture: ComponentFixture<AddWorkOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWorkOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWorkOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
