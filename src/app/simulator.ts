import {SimulationEntity} from './simulation_entity';
import {Event} from './event';
import { Guid } from 'guid-typescript';
import { Schedules } from './schedules';

export class Simulator {
    id: Guid;
    name: string;
    description: string;
    entities: SimulationEntity[];
    events: Event[];
    schedules: Schedules[];
}