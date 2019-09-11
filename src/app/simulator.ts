import {SimulationEntity} from './simulation_entity';
import { Guid } from 'guid-typescript';

export class Simulator {
    id: Guid;
    name: string;
    description: string;
    entities: SimulationEntity[];
}