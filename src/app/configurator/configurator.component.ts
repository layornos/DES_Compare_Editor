import { Component, OnInit } from '@angular/core';
import { Simulator } from '../simulator';
import { SimulationEntity } from '../simulation_entity';
import { Guid } from 'guid-typescript';
import { Attribute } from '../attribute';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.css']
})
export class ConfiguratorComponent implements OnInit {
  add_new_entity: boolean = false;
  add_new_attribute: boolean = false;
  simEntity: SimulationEntity;
  simulator: Simulator;
  newAttribute: Attribute;

  initSimulator() {
    this.simulator = {
      id: null,
      name: "",
      description: "",
      entities: []
    };
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
  constructor() { }

  ngOnInit() {
    this.initSimulator();
    this.initSimEntity();
    this.initNewAttribute();
  }

}
