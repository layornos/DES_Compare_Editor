import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetamodelComponent } from './metamodel.component';

describe('MetamodelComponent', () => {
  let component: MetamodelComponent;
  let fixture: ComponentFixture<MetamodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetamodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetamodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
