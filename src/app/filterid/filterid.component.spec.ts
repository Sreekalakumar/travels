import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteridComponent } from './filterid.component';

describe('FilteridComponent', () => {
  let component: FilteridComponent;
  let fixture: ComponentFixture<FilteridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilteridComponent]
    });
    fixture = TestBed.createComponent(FilteridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
