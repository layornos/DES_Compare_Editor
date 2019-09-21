import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Simulator } from '../simulator';
import { Event } from '../event';
import { Attribute } from '../attribute';
import { WritesAttribute } from '../event';
import { SimulationEntity } from '../simulation_entity';

@Component({
  selector: 'app-event-write-configurator',
  templateUrl: './event-write-configurator.component.html',
  styleUrls: ['./event-write-configurator.component.css']
})
export class EventWriteConfiguratorComponent implements OnInit {
  @Input() simulator: Simulator;
  @Input() add_new_write_attribute: boolean = false;
  @Output() finished = new EventEmitter<boolean>();
  writeCondition: string = "";
  newWritesAttribute: WritesAttribute 


  newEvent: Event = null;
  newAttribute: Attribute = null;  
  simEntity: SimulationEntity = null;

  reset(){
    this.add_new_write_attribute = false;
    this.finished.emit(false);
  }

  addWriteAttribute(){
    this.newWritesAttribute.attribute = this.newAttribute.id;
    this.newWritesAttribute.ofEntity = this.simEntity.id;
    this.newWritesAttribute.condition = this.writeCondition;
    this.simulator.getEvent(this.newEvent.id).writes.push(this.newWritesAttribute);
    this.reset();
  }

  constructor() { }

  ngOnInit() {
    this.newWritesAttribute = {
      attribute: null,
      ofEntity: null,
      condition: ""
    };
  }
}
