import { RoomObject } from "./room-object";
import { _ConstructorById, ObjectId } from "./helpers";
import { PowerCreep, Creep } from "./creep";
import { Store } from "./store";

/**
 * A remnant of dead creeps. This is a walkable object.
 */
export declare const Tombstone: _ConstructorById<Tombstone>;
export interface Tombstone extends RoomObject, ObjectId {
    /**
     * An object containing the deceased creep or power creep.
     */
    creep: Creep | PowerCreep;
    /**
     * Time of death.
     */
    deathTime: number;
    /**
     * A Store object that contains cargo of this structure.
     */
    store: Store;
    /**
     * The amount of game ticks before this tombstone decays.
     */
    ticksToDecay: number;
}