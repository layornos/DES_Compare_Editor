import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulatorTreeViewComponent } from './simulator-tree-view.component';

describe('SimulatorTreeViewComponent', () => {
  let component: SimulatorTreeViewComponent;
  let fixture: ComponentFixture<SimulatorTreeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulatorTreeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulatorTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
