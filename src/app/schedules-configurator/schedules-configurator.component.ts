import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Simulator } from "../simulator";
import { Schedules } from "../schedules";
import { Guid } from "guid-typescript";

@Component({
  selector: "app-schedules-configurator",
  templateUrl: "./schedules-configurator.component.html",
  styleUrls: ["./schedules-configurator.component.css"]
})
export class SchedulesConfiguratorComponent implements OnInit {
  @Input() simulator: Simulator;
  @Input() add_new_schedules: boolean = false;
  @Output() finished = new EventEmitter<boolean>();

  newSchedules: Schedules;
  constructor() {
    this.setupNewSchedules();
  }

  ngOnInit() {}

  reset() {
    this.add_new_schedules = false;
    this.finished.emit(false);
    this.setupNewSchedules();
  }

  setupNewSchedules() {
    this.newSchedules = {
      id: Guid.create(),
      name: "",
      condition: "",
      delay: "",
      start_event: null,
      end_event: null
    };
  }

  initSchedules() {
    this.setupNewSchedules();
    this.add_new_schedules = true;
  }

  saveSchedules() {
    if (
      this.newSchedules.name != "" &&
      this.newSchedules.condition != "" &&
      this.newSchedules.delay != "" &&
      this.newSchedules.start_event != null &&
      this.newSchedules.end_event != null
    ) {
      this.add_new_schedules = false;
      this.finished.emit(false);
      this.simulator.schedules.push(this.newSchedules);
    }
  }
}
