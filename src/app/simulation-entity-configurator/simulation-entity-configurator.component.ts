import { Component, OnInit, Input } from '@angular/core';
import { SimulationEntity } from '../simulation_entity';
import { Guid } from 'guid-typescript';
import { Attribute } from '../attribute';
import { Simulator } from '../simulator';

@Component({
  selector: 'app-simulation-entity-configurator',
  templateUrl: './simulation-entity-configurator.component.html',
  styleUrls: ['./simulation-entity-configurator.component.css']
})
export class SimulationEntityConfiguratorComponent implements OnInit {
  add_new_entity: boolean = false;
  add_new_attribute: boolean = false;
  simEntity: SimulationEntity;
  newAttribute: Attribute;
  @Input() simulator: Simulator;

  addEntity() {
    if (this.simEntity.name == "" || this.simEntity.attributes.length <= 0) {

    } else {
      this.simulator.entities.push(this.simEntity);
      this.addNewEntity();
      this.initSimEntity();
    }
  }

  addAttribute() {
    if (this.newAttribute.name == "") {

    } else {
      this.simEntity.attributes.push(this.newAttribute);
      this.initNewAttribute();
    }
  }

  initSimEntity() {
    this.simEntity = {
      id: Guid.create(),
      name: "",
      attributes: []
    }
  }

  initNewAttribute() {
    this.newAttribute = {
      id: Guid.create(),
      name: ""
    }
  }

  addNewEntity() {
    this.addNewAttribute();
    if (this.add_new_entity) {
      this.add_new_entity = false;
    }
    else {
      this.add_new_entity = true;
    }
  }

  addNewAttribute() {
    if (this.add_new_attribute) {
      this.add_new_attribute = false;
    }
    else {
      this.add_new_attribute = true;
    }
  }


  constructor() { }

  ngOnInit() {
    this.initSimEntity();
    this.initNewAttribute();
  }

}
