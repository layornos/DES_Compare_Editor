import { Component, OnInit } from "@angular/core";
import { Simulator } from "../simulator";

@Component({
  selector: "app-configurator",
  templateUrl: "./configurator.component.html",
  styleUrls: ["./configurator.component.css"]
})
export class ConfiguratorComponent implements OnInit {
  add_new_attribute: boolean = false;
  add_new_event: boolean = false;
  add_new_schedules: boolean = false;
  add_new_entity: boolean = false;
  add_new_read_attribute = false;
  add_new_write_attribute = false;
  selectedSimulator: string = "";
  savedSimulators: string[] = [];

  simulator: Simulator;

  addEntity() {
    this.add_new_entity = true;
  }
  addAttribute() {
    this.add_new_attribute = true;
  }
  addEvent() {
    this.add_new_event = true;
  }
  addReadAttribute() {
    this.add_new_read_attribute = true;
  }
  addWriteAttribute() {
    this.add_new_write_attribute = true;
  }
  addSchedules() {
    this.add_new_schedules = true;
  }

  initSimulator() {
    this.simulator = new Simulator();
  }

  reset(input: boolean) {
    this.add_new_event = input;
    this.add_new_schedules = input;
    this.add_new_entity = input;
    this.add_new_attribute = input;
    this.add_new_read_attribute = input;
    this.add_new_write_attribute = input;
  }

  saveSimulator() {
    if (this.simulator.name != "") {
      let tmpName = this.simulator.name;
      this.simulator.name = "Simulator: " + this.simulator.name;
      localStorage.setItem(this.simulator.name, JSON.stringify(this.simulator));
      this.simulator.name = tmpName;
    }
  }

  loadSimulators() {
    this.savedSimulators = [];
    for (var i = 0; i < localStorage.length; i++) {
      if(localStorage.key(i).includes("Simulator: ")){
        this.savedSimulators.push(localStorage.key(i).replace("Simulator: ", ""));
      }
    }
  }

  loadSimulator() {
    if(this.selectedSimulator != ""){
      this.simulator = JSON.parse(localStorage.getItem("Simulator: " + this.selectedSimulator));
      this.simulator.name = this.simulator.name.replace("Simulator: ", "");
    }
  }

  clearLocalStorage(){
    localStorage.clear();
  }

  constructor() {}

  ngOnInit() {
    this.initSimulator();
    this.loadSimulators();
  }
}
