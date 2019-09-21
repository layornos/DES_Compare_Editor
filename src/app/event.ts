import { Guid } from 'guid-typescript';
import { SimulationEntity } from './simulation_entity';
import { Attribute } from './attribute';
import { Schedules } from './schedules';

export class Event {
    id: Guid;
    name: string;
    //entity: Guid[];
    schedules: Guid;
    reads: ReadsAttribute[];
    writes: WritesAttribute[];
}

export class ReadsAttribute{
    attribute: Guid;
    ofEntity: Guid;
}

export class WritesAttribute{
    attribute: Guid;
    ofEntity: Guid;
    condition: string;
}