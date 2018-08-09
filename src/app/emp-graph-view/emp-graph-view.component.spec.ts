import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpGraphViewComponent } from './emp-graph-view.component';

describe('EmpGraphViewComponent', () => {
  let component: EmpGraphViewComponent;
  let fixture: ComponentFixture<EmpGraphViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpGraphViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpGraphViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
