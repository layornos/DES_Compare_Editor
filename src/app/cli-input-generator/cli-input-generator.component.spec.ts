import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CliInputGeneratorComponent } from './cli-input-generator.component';

describe('CliInputGeneratorComponent', () => {
  let component: CliInputGeneratorComponent;
  let fixture: ComponentFixture<CliInputGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliInputGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliInputGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
