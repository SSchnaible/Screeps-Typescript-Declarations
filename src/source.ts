import { _ConstructorById, ObjectId } from "./helpers";
import { RoomObject } from "./room-object";

/**
 * An energy source object. Can be harvested by creeps with a WORK body part.
 * 
 * Energy amount
 *  - 4000 in center rooms
 *  - 3000 in an owned or reserved room
 *  - 1500 in an unreserved room
 * 
 * Energy regeneration
 *  - Every 300 game ticks
 */
export declare const Source: _ConstructorById<Source>;
export interface Source extends RoomObject, ObjectId {
    /**
     * The remaining amount of energy.
     */
    energy: number;
    /**
     * The total amount of energy in the source.
     */
    energyCapacity: number;
    /**
     * The remaining time after which the source will be refilled.
     */
    ticksToRegeneration: number;
}
