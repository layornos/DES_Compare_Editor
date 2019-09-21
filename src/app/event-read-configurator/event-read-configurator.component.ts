import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Simulator } from '../simulator';
import { Event } from '../event';
import { Attribute } from '../attribute';
import { ReadsAttribute } from '../event';
import { SimulationEntity } from '../simulation_entity';

@Component({
  selector: 'app-event-read-configurator',
  templateUrl: './event-read-configurator.component.html',
  styleUrls: ['./event-read-configurator.component.css']
})
export class EventReadConfiguratorComponent implements OnInit {
  @Input() simulator: Simulator;
  @Input() add_new_read_attribute: boolean = false;
  @Output() finished = new EventEmitter<boolean>();

  newReadsAttribute: ReadsAttribute 


  newEvent: Event = null;
  newAttribute: Attribute = null;  
  simEntity: SimulationEntity = null;

  reset(){
    this.add_new_read_attribute = false;
    this.finished.emit(false);
  }

  addReadAttribute(){
    this.newReadsAttribute.attribute = this.newAttribute.id;
    this.newReadsAttribute.ofEntity = this.simEntity.id;
    this.simulator.getEvent(this.newEvent.id).reads.push(this.newReadsAttribute);
    this.reset();
  }

  constructor() { }

  ngOnInit() {
    this.newReadsAttribute = {
      attribute: null,
      ofEntity: null
    };
  }
}
