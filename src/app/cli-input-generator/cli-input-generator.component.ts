import { Component, OnInit, Input } from '@angular/core';
import { Simulator } from '../simulator';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cli-input-generator',
  templateUrl: './cli-input-generator.component.html',
  styleUrls: ['./cli-input-generator.component.css']
})
export class CliInputGeneratorComponent implements OnInit {
  @Input() simulator: Simulator;

  constructor() { }

  ngOnInit() {
  }

  

}
