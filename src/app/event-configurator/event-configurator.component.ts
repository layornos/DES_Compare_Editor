import { Component, OnInit, Input } from '@angular/core';
import { Simulator } from '../simulator';
import { FormGroup, FormControl } from '@angular/forms';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';


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
  private source$ = of([
    {type: "Bird", options: [{species: "Hawk"}, {species: "Eagle"}, {species: "Crow"}]},
    {type: "Reptile", options: [{species: "Snake"}, {species: "Crocodile"}, {species: "Gecko"}]},
    {type: "Mammal", options: [{species: "Human"}, {species: "Monkey"}, {species: "Ape"}]},
    {type: "Fish", options: [{species: "Shark"}, {species: "Cod"}, {species: "Trout"}]}
  ]);
  
  private fromArrayObjectsToArrayOfOptions = (val : any[]) => (val.reduce((pre, elem) => [...pre, elem.options], []));
  private fromArrayOfArraysToArray = (val) => (val.flat());
  
  private subSource$ = this.formGroup.get('genus').valueChanges.pipe(
    map(this.fromArrayObjectsToArrayOfOptions),
    map(this.fromArrayOfArraysToArray));
  
}
