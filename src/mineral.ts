import { RoomObject } from "./room-object";
import { MineralResourceType } from "./constants-types";
import { _ConstructorById } from "./helpers";

/**
 * A mineral deposit object. Can be harvested by creeps with a WORK body part using the extractor structure.
 * 
 * Regeneration amount:
 *  - DENSITY_LOW: 15,000
 *  - DENSITY_MODERATE: 35,000
 *  - DENSITY_HIGH: 70,000
 *  - DENSITY_ULTRA: 100,000
 * 
 * Regeneration time: 50,000 ticks
 * 
 * Density change probability:
 *  - DENSITY_LOW: 100% chance
 *  - DENSITY_MODERATE: 5% chance
 *  - DENSITY_HIGH: 5% chance
 *  - DENSITY_ULTRA: 100% chance
 */
export declare const Mineral: _ConstructorById<Mineral>;
export interface Mineral extends RoomObject {
    /**
     * The prototype is stored in the Mineral.prototype global object. You can use it to extend game objects behaviour globally.
     */
    readonly prototype: Mineral;
    /**
     * The density of this mineral deposit, one of the DENSITY_* constants.
     */
    density: number;
    /**
     * The remaining amount of resources.
     */
    mineralAmount: number;
    /**
     * The resource type, one of the RESOURCE_* constants.
     */
    mineralType: MineralResourceType;
    /**
     * The remaining time after which the deposit will be refilled.
     */
    ticksToRegeneration: number;
}
