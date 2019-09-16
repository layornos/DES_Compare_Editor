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
 
  simulator: Simulator;


  initSimulator() {
    this.simulator = new Simulator();
  }

  
  constructor() { }

  ngOnInit() {
    this.initSimulator();
  }

  

}
