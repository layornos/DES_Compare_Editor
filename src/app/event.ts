import { Guid } from 'guid-typescript';
import { SimulationEntity } from './simulation_entity';
import { Attribute } from './attribute';
import { Schedules } from './schedules';

export class Event {
    id: Guid;
    name: string;
    entity: Guid[];
    schedules: Guid;
    reads: Guid[];
    writes: Guid[];
}