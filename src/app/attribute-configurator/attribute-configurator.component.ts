import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Attribute } from '../attribute';
import { Simulator } from '../simulator';
import { SimulationEntity } from '../simulation_entity'

@Component({
  selector: 'app-attribute-configurator',
  templateUrl: './attribute-configurator.component.html',
  styleUrls: ['./attribute-configurator.component.css']
})
export class AttributeConfiguratorComponent implements OnInit {
  @Input() simulator: Simulator;
  simEntity: SimulationEntity;
  @Input() add_new_attribute: boolean = false;
  @Output() finished = new EventEmitter<boolean>();
  newAttribute: Attribute;

  reset(){
    this.add_new_attribute = false;
    this.finished.emit(false); 
    this.initNewAttribute();
  }

  addAttribute() {
    if (this.newAttribute.name == "") {

    } else {
      this.simEntity.attributes.push(this.newAttribute);
      this.initNewAttribute();
    }
  }

  addNewAttribute() {
    if (this.add_new_attribute) {
      this.add_new_attribute = false;
      this.finished.emit(false);
    }
    else {
      this.add_new_attribute = true;
    }
  }
  
  initNewAttribute() {
    this.newAttribute = {
      id: Guid.create(),
      name: "",
      type: ""
    }
    this.simEntity = null;  
  }

  constructor() { }

  ngOnInit() {
    this.initNewAttribute();
  }

}
