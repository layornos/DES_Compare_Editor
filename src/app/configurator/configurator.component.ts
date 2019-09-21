import { Component, OnInit } from '@angular/core';
import { Simulator } from '../simulator';
import { SimulationEntity } from '../simulation_entity';
import { Guid } from 'guid-typescript';
import { Attribute } from '../attribute';


@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.css']
})
export class ConfiguratorComponent implements OnInit {
  add_new_attribute: boolean = false; 
  add_new_event: boolean = false;
  add_new_schedules: boolean = false;
  add_new_entity: boolean = false;
  add_new_read_attribute = false;
  add_new_write_attribute = false;

  simulator: Simulator;

  addEntity(){
    this.add_new_entity = true;
  }
  addAttribute(){
    this.add_new_attribute = true;
  }
  addEvent(){
    this.add_new_event = true;
  }
  addReadAttribute(){
    this.add_new_read_attribute = true;
  }
  addWriteAttribute(){
    this.add_new_write_attribute = true;
  }
  addSchedules(){
    this.add_new_schedules = true;
  }
  
  initSimulator() {
    this.simulator = new Simulator();
  }

  reset(input: boolean){
    this.add_new_event = input;
    this.add_new_schedules = input;
    this.add_new_entity = input;
    this.add_new_attribute = input;
    this.add_new_read_attribute = input;
  }

  
  constructor() { }

  ngOnInit() {
    this.initSimulator();
  }

  

}
