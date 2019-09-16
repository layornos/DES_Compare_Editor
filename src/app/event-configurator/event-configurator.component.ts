import { Component, OnInit, Input } from "@angular/core";
import { Simulator } from "../simulator";
import { Event } from "../event";

import { Guid } from "guid-typescript";

@Component({
  selector: "app-event-configurator",
  templateUrl: "./event-configurator.component.html",
  styleUrls: ["./event-configurator.component.css"]
})
export class EventConfiguratorComponent implements OnInit {
  @Input() simulator: Simulator;

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

  addNewEvent() {
    this.newEvent.id = Guid.create();
    this.add_new_event = true;
  }


  saveNewEvent() {
    if (this.newEvent.id != null
      && this.newEvent.entity.length > 0
      // TODO: && this.newEvent.schedules != null
      && (this.newEvent.reads.length > 0 || this.newEvent.writes.length > 0)) {
      this.simulator.events.push(this.newEvent);
      this.initEvent();
      this.add_new_event = false;
    }
  }

  ngOnInit() {
    this.initEvent();
  }

}
