import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationEntityConfiguratorComponent } from './simulation-entity-configurator.component';

describe('SimulationEntityConfiguratorComponent', () => {
  let component: SimulationEntityConfiguratorComponent;
  let fixture: ComponentFixture<SimulationEntityConfiguratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulationEntityConfiguratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationEntityConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
