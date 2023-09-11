import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridComponent } from './ag-grid.component';

describe('AgGridComponent', () => {
  let component: AgGridComponent;
  let fixture: ComponentFixture<AgGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgGridComponent],
    });
    fixture = TestBed.createComponent(AgGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
