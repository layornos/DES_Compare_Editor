import { Component, OnInit } from '@angular/core';
import { Simulator } from '../simulator';


@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.css']
})
export class ConfiguratorComponent implements OnInit {
 
  simulator: Simulator;


  initSimulator() {
    this.simulator = {
      id: null,
      name: "",
      description: "",
      entities: [],
      events: []
    };
  }

  
  constructor() { }

  ngOnInit() {
    this.initSimulator();
  }

}
