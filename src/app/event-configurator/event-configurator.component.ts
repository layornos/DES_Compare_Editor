import { Component, OnInit, Input } from '@angular/core';
import { Simulator } from '../simulator';
import { FormGroup, FormControl } from '@angular/forms';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-event-configurator',
  templateUrl: './event-configurator.component.html',
  styleUrls: ['./event-configurator.component.css']
})
export class EventConfiguratorComponent implements OnInit {
  @Input() simulator:Simulator;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor() { }

  ngOnInit() {
  }
  private formGroup = new FormGroup({
    genus: new FormControl([]),
    subgenus: new FormControl([])
  })
}
