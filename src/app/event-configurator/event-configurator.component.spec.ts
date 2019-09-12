import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventConfiguratorComponent } from './event-configurator.component';

describe('EventConfiguratorComponent', () => {
  let component: EventConfiguratorComponent;
  let fixture: ComponentFixture<EventConfiguratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventConfiguratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
