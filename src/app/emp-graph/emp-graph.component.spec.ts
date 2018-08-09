import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpGraphComponent } from './emp-graph.component';

describe('EmpGraphComponent', () => {
  let component: EmpGraphComponent;
  let fixture: ComponentFixture<EmpGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
