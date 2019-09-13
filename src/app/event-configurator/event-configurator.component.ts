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

  constructor() {}

  ngOnInit() {
    this.initEvent();
  }
}
