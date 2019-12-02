import { RoomObject } from "./room-object";
import { ObjectId, _ConstructorById } from "./helpers";
import { Store } from "./store";
import { OwnedStructure, Structure } from "./structure";

/**
 * A destroyed structure. This is a walkable object.
 * - Decay - 500 ticks except some special cases
 */
export declare const Ruin: _ConstructorById<Ruin>;
export interface Ruin extends RoomObject, ObjectId {
    /**
     * The time when the structure has been destroyed.
     */
    destroyTime: number;
    /**
     * A Store object that contains resources of this structure.
     */
    store: Store;
    /**
     * An object containing basic data of the destroyed structure.
     */
    structure: Structure | OwnedStructure;
    /**
     * The amount of game ticks before this ruin decays.
     */
    ticksToDecay: number;
}
