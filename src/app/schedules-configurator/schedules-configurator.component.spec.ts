import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulesConfiguratorComponent } from './schedules-configurator.component';

describe('SchedulesConfiguratorComponent', () => {
  let component: SchedulesConfiguratorComponent;
  let fixture: ComponentFixture<SchedulesConfiguratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulesConfiguratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulesConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
