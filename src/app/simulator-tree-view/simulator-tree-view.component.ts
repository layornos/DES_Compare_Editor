import { Component, OnInit, Input } from '@angular/core';
import { Simulator } from '../simulator';

@Component({
  selector: 'app-simulator-tree-view',
  templateUrl: './simulator-tree-view.component.html',
  styleUrls: ['./simulator-tree-view.component.css']
})
export class SimulatorTreeViewComponent implements OnInit {
  @Input() simulator: Simulator;
  
  constructor() { }

  ngOnInit() {
  }

}
