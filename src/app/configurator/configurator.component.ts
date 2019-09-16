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
 
  simulator: Simulator;


  initSimulator() {
    this.simulator = {
      id: null,
      name: "",
      description: "",
      entities: [],
      events: [],
      schedules: []
    };
  }

  
  constructor() { }

  ngOnInit() {
    this.initSimulator();
  }

  getEntity(entityID : Guid) : SimulationEntity {
    for(let entity of this.simulator.entities){
      if(entity.id == entityID){
        return entity;
      }
    }  
    return null;
  };

  getAttribute(attributeID : Guid) : Attribute {
    for(let entity of this.simulator.entities){
      for(let attr of entity.attributes){
        if(attr.id == attributeID){
          return attr;
        }
      }
    }
    return null;
  }

}
