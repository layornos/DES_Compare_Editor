import { SimulationEntity } from './simulation_entity';
import { Event } from './event';
import { Guid } from 'guid-typescript';
import { Schedules } from './schedules';

export class Simulator {
    id: Guid;
    name: string;
    description: string;
    entities: SimulationEntity[];
    events: Event[];
    schedules: Schedules[];


    toString(): string {
        var out = "";
        out = out + 'create-simulator --description \"' + this.description + '\" --name \"' + this.name + '\"\n';
        out = out + 'set-current-simulator --simulator ' + this.name + '\n';
        for(let entity of this.entities){
            out = out + 'add-entity --name ' + entity.name + '\n';
            for(let attr of entity.attributes){
                out = out + 'add-attributes-to-entity --attribute-name ' + attr.name + ' --entity-name ' + entity.name + ' --type ' + attr.type + '\n';
            }
        }
        for(let event of this.events){
            out = out + 'add-event -- name ' + event.name + '\n';
            if(event.reads){
                out = out + 'add-read-attribute-to-entity --attribute-name ' + ""; // TODO attribute name and entity name extraction
            }
        }
        return out;
    }
}

