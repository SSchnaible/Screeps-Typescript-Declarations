import { _ConstructorById, OwnedObject, ObjectId } from "./helpers";
import { RoomObject } from "./room-object";
import { StructureType, OK, ERR_NOT_OWNER } from "./constants-types";

/**
 * A site of a structure which is currently under construction. A construction site can be created using the 'Construct' button at the left of the game field or the Room.createConstructionSite method.
 * To build a structure on the construction site, give a worker creep some amount of energy and perform Creep.build action.
 * You can remove enemy construction sites by moving a creep on it.
 */
export declare const ConstructionSite: _ConstructorById<ConstructionSite>;
export interface ConstructionSite extends RoomObject, OwnedObject, ObjectId {
    /**
     * The current construction progress.
     */
    progress: number;
    /**
     * The total construction progress needed for the structure to be built.
     */
    progressTotal: number;
    /**
     * One of the following constants: STRUCTURE_EXTENSION, STRUCTURE_RAMPART, STRUCTURE_ROAD, STRUCTURE_SPAWN, STRUCTURE_WALL, STRUCTURE_LINK
     */
    structureType: StructureType;
    /**
     * Remove the construction site.
     * @returns Result Code: OK, ERR_NOT_OWNER
     */
    remove(): OK | ERR_NOT_OWNER;
}
