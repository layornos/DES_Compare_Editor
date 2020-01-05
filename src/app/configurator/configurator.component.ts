import { Component, OnInit } from "@angular/core";
import { Simulator } from "../simulator";
import { Guid } from 'guid-typescript';
import { SimulationEntity } from '../simulation_entity';
import { Attribute } from '../attribute';
import { ReadsAttribute, WritesAttribute, Event } from '../event';
import { Schedules } from '../schedules';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
  fileUrl: SafeResourceUrl;

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
    this.simulator.id = Guid.create();
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
      if (localStorage.key(i).includes("Simulator: ")) {
        this.savedSimulators.push(localStorage.key(i).replace("Simulator: ", ""));
      }
    }
  }

  resetSimulator() {
    this.simulator = new Simulator();
    this.simulator.id = Guid.create();
    this.reset(false);
  }

  loadSimulator() {
    this.simulator = new Simulator();
    if (this.selectedSimulator != "") {
      let simulator = JSON.parse(localStorage.getItem("Simulator: " + this.selectedSimulator));
      this.simulator.id = simulator["id"];
      this.simulator.name = simulator.name.replace("Simulator: ", "");
      this.simulator.description = simulator["description"];
      for (let entity of simulator["entities"]) {
        let attributes: Attribute[] = [];
        for (let attr of entity["attributes"]) {
          let tmpAttr: Attribute = {
            id: Guid.parse(attr["id"]["value"]),
            type: attr["type"],
            name: attr["name"]
          }
          attributes.push(tmpAttr);
        }
        let tmpEntity: SimulationEntity = {
          id: Guid.parse(entity["id"]["value"]),
          name: entity["name"],
          attributes: attributes
        }
        this.simulator.entities.push(tmpEntity);
      }
      for (let event of simulator["events"]) {
        let reads: ReadsAttribute[] = [];
        let writes: WritesAttribute[] = [];
        for (let r of event["reads"]) {
          let tempReads: ReadsAttribute = {
            attribute: r["attribute"],
            ofEntity: r["ofEntity"]
          }
          reads.push(tempReads);
        }
        for (let w of event["writes"]) {
          let tempWrites: WritesAttribute = {
            attribute: w["attribute"],
            ofEntity: w["ofEntity"],
            condition: w["condition"]
          }
          writes.push(tempWrites);
        }
        let tmpEvent: Event = {
          id: Guid.parse(event["id"]["value"]),
          name: event["name"],
          schedules: event["schedules"],
          reads: reads,
          writes: writes
        }
        this.simulator.events.push(tmpEvent);
      }
      for (let sched of simulator["schedules"]) {
        console.log(Guid.raw());
        console.log(sched["id"]["value"]);
        console.log(Guid.isGuid(Guid.parse(sched["id"]["value"])));
        let tmpSched: Schedules = {
          id: Guid.parse(sched["id"]["value"]),
          name: sched["name"],
          condition: sched["condition"],
          delay: sched["delay"],
          start_event: sched["start_event"],
          end_event: sched["end_event"]
        }
        this.simulator.schedules.push(tmpSched);
      }

    }
  }

  parseObject(obj) {
    for (var key in obj) {
      console.log("key: " + key + ", value: " + obj[key])
      if (obj[key] instanceof Object) {
        this.parseObject(obj[key]);
      }
    }
  }

  clearLocalStorage() {
    localStorage.clear();
  }



  generateDownloadJsonUri() {
    const blob =new Blob([JSON.stringify(this.simulator)] ,{type:'application/octet-stream'});
    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
    return this.fileUrl;
  }

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.initSimulator();
    this.loadSimulators();
  }
}
