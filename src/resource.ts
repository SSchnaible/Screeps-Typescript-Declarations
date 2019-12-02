import { RoomObject } from "./room-object";
import { ObjectId, _ConstructorById } from "./helpers";
import { ResourceType } from "./constants-types";

/**
 * A dropped piece of resource. It will decay after a while if not picked up. Dropped resource pile decays for ceil(amount/1000) units per tick.
 */
export declare const Resource: _ConstructorById<Resource>;
export interface Resource extends RoomObject, ObjectId {
    /**
     * The amount of resource units containing.
     */
    amount: number;
    /**
     * One of the `RESOURCE_*` constants.
     */
    resourceType: ResourceType;
}
