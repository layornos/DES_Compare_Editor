import { Guid } from 'guid-typescript';
import { Event } from './event';

export class Schedules {
    id: Guid;
    name: string;
    condition: string;
    delay: string;
    start_event: Guid;
    end_event: Guid;
}