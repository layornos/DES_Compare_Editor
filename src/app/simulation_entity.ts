import { Attribute } from './attribute';
import { Guid } from 'guid-typescript';

export class SimulationEntity {
    id: Guid;
    name: string;
    attributes: Attribute[];
}