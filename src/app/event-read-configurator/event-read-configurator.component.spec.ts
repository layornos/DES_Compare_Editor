import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventReadConfiguratorComponent } from './event-read-configurator.component';

describe('EventReadConfiguratorComponent', () => {
  let component: EventReadConfiguratorComponent;
  let fixture: ComponentFixture<EventReadConfiguratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventReadConfiguratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventReadConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
