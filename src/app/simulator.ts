import { SimulationEntity } from "./simulation_entity";
import { Event } from "./event";
import { Guid } from "guid-typescript";
import { Schedules } from "./schedules";
import { Attribute } from "./attribute";

export class Simulator {
    id: Guid;
    name: string;
    description: string;
    entities: SimulationEntity[];
    events: Event[];
    schedules: Schedules[];

    constructor() {
        this.id = null;
        this.name = "";
        this.description = "";
        this.entities = [];
        this.events = [];
        this.schedules = [];
    }

    getEntity(entityID: Guid): SimulationEntity {
        for (let entity of this.entities) {
            if (entity.id == entityID) {
                return entity;
            }
        }
        return null;
    }

    getAttribute(attributeID: Guid): Attribute {
        for (let entity of this.entities) {
            for (let attr of entity.attributes) {
                if (attr.id == attributeID) {
                    return attr;
                }
            }
        }
        return null;
    }

    toString(): string {
        var out = "";
        out = out + this.generateSimulatorString();
        out = out + this.generateEntitiesString();
        out = out + this.generateEventsString();
        if(this.schedules.length > 0){
            for(let schedule of this.schedules){
                out = out + "add-schedules-relation --condition-function " + schedule.condition 
                + " --delay-function " + schedule.delay 
                + " --start-event-name " + schedule.start_event
                + " --end-event-name " + schedule.end_event
                + "\n"
            }
        }
        out = out + ""
        return out;
    }

    private generateSimulatorString(): string {
        let out = "";
        out = out + 'create-simulator --description "' + this.description + '" --name "' + this.name + '"\n';
        out = out + "set-current-simulator --simulator " + this.name + "\n";
        return out;
    }

    private generateEntitiesString(): string {
        let out = "";
        for (let entity of this.entities) {
            out = out + "add-entity --name " + entity.name + "\n";
            for (let attr of entity.attributes) {
                out =
                    out +
                    "add-attributes-to-entity --attribute-name " +
                    attr.name +
                    " --entity-name " +
                    entity.name +
                    " --type " +
                    attr.type +
                    "\n";
            }
        }
        return out;
    }

    private generateEventsString(): string {
        let out = "";
        for (let event of this.events) {
            out = out + "add-event -- name " + event.name + "\n";
            if (event.reads.length > 0) {
                out = out + this.generateEventReadsString(event);
            }
            if (event.writes.length > 0) {
                out = out + this.generateEventWritesString(event);
            }
        }
        return out;
    }

    private generateEventReadsString(event: Event): string {
        let out = "";
        for (let read of event.reads) {
            for (let entity of event.entity) {
                out =
                    out +
                    "add-read-attribute-to-entity --attribute-name " +
                    this.getAttribute(read).name +
                    " --entity-name " +
                    this.getEntity(entity).name +
                    " --event-name " +
                    event.name +
                    "\n";
            }
        }
        return out;
    }

    private generateEventWritesString(event: Event): string {
        let out = "";
        for (let read of event.reads) {
            for (let entity of event.entity) {
                out =
                    out +
                    "add-write-attribute-to-event --attribute-name " +
                    this.getAttribute(read).name +
                    " --entity-name " +
                    this.getEntity(entity).name +
                    " --event-name " +
                    event.name +
                    "\n";
            }
        }
        return out;
    }

}
