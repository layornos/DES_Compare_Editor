import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() add_new_entity: boolean;
  simEntity: SimulationEntity;
  @Input() simulator: Simulator;
  @Output() finished = new EventEmitter<boolean>();

  addEntity() {
    if (this.simEntity.name == "") {

    } else {
      this.simulator.entities.push(this.simEntity);
      this.addNewEntity();
      this.initSimEntity();
    }
  }

  initSimEntity() {
    this.simEntity = {
      id: Guid.create(),
      name: "",
      attributes: []
    }
  }

  addNewEntity() {
    if (this.add_new_entity) {
      this.add_new_entity = false;
      this.finished.emit(false);
    }
    else {
      this.add_new_entity = true;
    }
  }

  reset() {
    this.add_new_entity = false;
    this.finished.emit(false);
    this.initSimEntity();
  }

  constructor() { }

  ngOnInit() {
    this.initSimEntity();
  }

}
