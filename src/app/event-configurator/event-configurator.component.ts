import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
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
  @Output() finished = new EventEmitter<boolean>();

  constructor() { }
  selectedEntities: string[];
  newEvent: Event;
  @Input() add_new_event: boolean = false;

  reset(){
    this.add_new_event = false;
    this.finished.emit(false);
    this.initEvent();
  }
  
  initEvent() {
    this.newEvent = {
      id: Guid.create(),
      name: "",
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
      && this.newEvent.name != ""){
      //&& this.newEvent.entity.length > 0
      // TODO: && this.newEvent.schedules != null
      //&& (this.newEvent.reads.length > 0 || this.newEvent.writes.length > 0)) {
      this.simulator.events.push(this.newEvent);
      this.initEvent();
      this.add_new_event = false;
      this.finished.emit(false);
    } else {
      if(this.newEvent.id == null)
        console.log("ERROR: ID");
      if(this.newEvent.reads.length < 1 )
        console.log("ERROR: reads");
      if(this.newEvent.writes.length < 1 )
        console.log("ERROR: writes");
    }
  }

  ngOnInit() {
    this.initEvent();
  }

}
