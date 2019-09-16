import { Component, OnInit, Input } from "@angular/core";
import { Simulator } from "../simulator";
import { Event } from "../event";

import { Guid } from "guid-typescript";


export interface MockEvent{
  id: Guid;
  name: string;
  entity: string[];
  schedules: string;
  reads: string[];
  writes: string[];
}

@Component({
  selector: "app-event-configurator",
  templateUrl: "./event-configurator.component.html",
  styleUrls: ["./event-configurator.component.css"]
})
export class EventConfiguratorComponent implements OnInit {
  @Input() simulator:Simulator;

  constructor() { }
  selectedEntities: string[];
  newEvent: Event;
  add_new_event: boolean = false;

  initEvent() {
    this.newEvent = {
      id: null,
      name: "",
      entity: [],
      schedules: null,
      reads: [],
      writes: []
    }
  }

  addNewEvent(){
    this.add_new_event = true;
    this.newEvent.id = Guid.create();
  }


  saveNewEvent(){
    this.simulator.events.push(this.newEvent);
    this.initEvent();
    this.add_new_event = false;
  }

  ngOnInit() {
    this.initEvent();
  }

}
