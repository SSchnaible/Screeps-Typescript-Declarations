import { ResourceType } from "./constants-types";

/**
 * An object that can contain resources in its cargo.
 * 
 * There are two types of stores in the game: general purpose stores and limited stores.
 * - General purpose stores can contain any resource within its capacity (e.g. creeps, containers, storages, terminals).
 * - Limited stores can contain only a few types of resources needed for that particular object (e.g. spawns, extensions, labs, nukers).
 * 
 * The Store prototype is the same for both types of stores, but they have different behavior depending on the resource argument in its methods.
 * 
 * You can get specific resources from the store by addressing them as object properties: console.log(creep.store[RESOURCE_ENERGY]);
 */
export type Store = {
    [resourceType in ResourceType]?: number;
} & {
    /**
     * Returns capacity of this store for the specified resource, or total capacity if resource is undefined.
     * @param resource The type of the resource.
     * @returns Returns capacity number, or null in case of a not valid resource for this store type.
     */
    getCapacity(resource?: ResourceType): number | null;
    /**
     * A shorthand for getCapacity(resource) - getUsedCapacity(resource).
     * @param resource The type of the resource.
     * @returns Returns free capacity number, or null in case of a not valid resource for this store type.
     */
    getFreeCapacity(resource?: ResourceType): number | null;
    /**
     * Returns the capacity used by the specified resource, or total used capacity for general purpose stores if resource is undefined.
     * @param resource The type of the resource.
     * @returns Returns used capacity number, or null in case of a not valid resource for this store type.
     */
    getUsedCapacity(resource?: ResourceType): number | null;
}
