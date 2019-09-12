import { Component, OnInit, Input } from '@angular/core';
import { Simulator } from '../simulator';

@Component({
  selector: 'app-event-configurator',
  templateUrl: './event-configurator.component.html',
  styleUrls: ['./event-configurator.component.css']
})
export class EventConfiguratorComponent implements OnInit {
  @Input() simulator:Simulator;
  constructor() { }

  ngOnInit() {
  }

}
