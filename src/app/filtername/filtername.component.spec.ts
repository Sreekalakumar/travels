import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilternameComponent } from './filtername.component';

describe('FilternameComponent', () => {
  let component: FilternameComponent;
  let fixture: ComponentFixture<FilternameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilternameComponent]
    });
    fixture = TestBed.createComponent(FilternameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
