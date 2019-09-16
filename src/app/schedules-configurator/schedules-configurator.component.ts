import { Component, OnInit, Input } from '@angular/core';
import { Simulator } from '../simulator';
import { Schedules } from '../schedules';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-schedules-configurator',
  templateUrl: './schedules-configurator.component.html',
  styleUrls: ['./schedules-configurator.component.css']
})
export class SchedulesConfiguratorComponent implements OnInit {
  @Input() simulator: Simulator;
  add_new_schedules: boolean = false;
  newSchedules : Schedules 
  constructor() { }

  ngOnInit() {
  }

  initSchedules(){
    this.newSchedules = {
      id: Guid.create(),
      name: "",
      condition: "",
      delay: "",
      start_event: null,
      end_event: null
    }
    this.add_new_schedules = true;
  }

  saveSchedules(){
    this.add_new_schedules = false;
    this.simulator.schedules.push(this.newSchedules);
  }


}
