import { Component, OnInit, Input } from "@angular/core";
import { Simulator } from "../simulator";
import { Event } from "../event";
import { SimulationEntity } from "../simulation_entity";
import { Attribute } from "../attribute";
import { Guid } from "guid-typescript";
import { FormGroup, FormControl } from '@angular/forms';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';


export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-event-configurator",
  templateUrl: "./event-configurator.component.html",
  styleUrls: ["./event-configurator.component.css"]
})
export class EventConfiguratorComponent implements OnInit {
  @Input() simulator:Simulator;

  constructor() { }

  event: Event;
  add_new_event: boolean = false;

  initEvent() {
    this.event = {
      id: null,
      name: "",
      entity: [],
      schedules: null,
      reads: [],
      writes: []
    };
  }

  addNewEvent(){
    this.add_new_event = true;
    this.event.id = Guid.create();
  }

  saveNewEvent(){
    this.simulator.events.push(event);
    this.initEvent();
    this.add_new_event = false;
  }

  ngOnInit() {
    this.initEvent();
  }

}
