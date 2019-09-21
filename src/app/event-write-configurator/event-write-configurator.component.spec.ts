import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventWriteConfiguratorComponent } from './event-write-configurator.component';

describe('EventWriteConfiguratorComponent', () => {
  let component: EventWriteConfiguratorComponent;
  let fixture: ComponentFixture<EventWriteConfiguratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventWriteConfiguratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventWriteConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
