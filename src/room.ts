import { StructureController, Structure, StructureStorage, StructureTerminal, StructureSpawn } from "./structure";
import { PathStep, Filter, FindPathOpts, LookResult, WithPos, PosMatrix, LookCreepResult, LookEnergyResult, LookResourceResult, LookSourceResult, LookMineralResult, LookDepositResult, LookStructureResult, LookFlagResult, LookConstructionSiteResult, LookNukeResult, LookTerrainResult, LookTombstoneResult, LookPowerCreepResult, LookRuinResult, _ConstructorById, LookForCreepResult, LookForEnergyResult, LookForResourceResult, LookForSourceResult, LookForMineralResult, LookForDepositResult, LookForStructureResult, LookForFlagResult, LookForConstructionSiteResult, LookForNukeResult, LookForTerrainResult, LookForTombstoneResult, LookForPowerCreepResult, LookForRuinResult } from "./helpers";
import { RoomPosition } from "./room-position";
import { StructureType, ERR_INVALID_TARGET, ERR_FULL, ERR_INVALID_ARGS, ERR_RCL_NOT_ENOUGH, OK, ColorType, ERR_NAME_EXISTS, FIND_EXIT_TOP, FIND_EXIT_RIGHT, FIND_EXIT_BOTTOM, FIND_EXIT_LEFT, FIND_EXIT, FIND_CREEPS, FIND_MY_CREEPS, FIND_HOSTILE_CREEPS, FIND_SOURCES, FIND_FLAGS, FIND_NUKES, FIND_TOMBSTONES, FIND_POWER_CREEPS, FIND_MY_POWER_CREEPS, FIND_RUINS, FIND_SOURCES_ACTIVE, FIND_DROPPED_RESOURCES, FIND_STRUCTURES, FIND_MY_STRUCTURES, FIND_HOSTILE_STRUCTURES, FIND_MY_SPAWNS, FIND_HOSTILE_SPAWNS, FIND_CONSTRUCTION_SITES, FIND_MY_CONSTRUCTION_SITES, FIND_HOSTILE_CONSTRUCTION_SITES, FIND_MINERALS, FIND_HOSTILE_POWER_CREEPS, FIND_DEPOSITS, FindExitType, ERR_NO_PATH, EventAttackType, EVENT_ATTACK, EVENT_OBJECT_DESTROYED, EVENT_ATTACK_CONTROLLER, EVENT_BUILD, EVENT_HARVEST, EVENT_HEAL, EventHealType, EVENT_REPAIR, EVENT_RESERVE_CONTROLLER, EVENT_UPGRADE_CONTROLLER, EVENT_EXIT, EVENT_TRANSFER, ResourceType, EVENT_POWER, LOOK_CREEPS, LOOK_ENERGY, LOOK_RESOURCES, LOOK_SOURCES, LOOK_MINERALS, LOOK_DEPOSITS, LOOK_STRUCTURES, LOOK_FLAGS, LOOK_CONSTRUCTION_SITES, LOOK_NUKES, LOOK_TERRAIN, LOOK_TOMBSTONES, LOOK_POWER_CREEPS, LOOK_RUINS, RoomObjectType, PowerType, TerrainType, TERRAIN_MASK_PLAIN, TERRAIN_MASK_WALL, TERRAIN_MASK_SWAMP } from "./constants-types";
import { Creep, PowerCreep } from "./creep";
import { Resource } from "./resource";
import { Flag } from "./flag";
import { ConstructionSite } from "./construction-site";
import { Mineral } from "./mineral";
import { Nuke } from "./nuke";
import { Deposit } from "./deposit";
import { Source } from "./source";
import { Tombstone } from "./tombstone";
import { Ruin } from "./ruin";
import { RoomVisual } from "./room-visual";

/**
 * An object representing the room in which your units and structures are in. It can be used to look around, find paths, etc. Every object in the room contains its linked Room instance in the room property.
 */
export declare const Room: _ConstructorById<Room> & {
    Terrain: TerrainConstructor;
    /**
     * Serialize a path array into a short string representation, which is suitable to store in memory.
     * @param path A path array retrieved from Room.findPath.
     * @returns A serialized string form of the given path.
     */
    serializePath(path: PathStep[]): string;
    /**
     * Deserialize a short string path representation into an array form.
     * @param path A serialized path string.
     * @returns A path array.
     */
    deserializePath(path: string): PathStep[];
};
export interface Room {
    /**
     * The Controller structure of this room, if present, otherwise undefined.
     */
    controller: StructureController | undefined;
    /**
     * Total amount of energy available in all spawns and extensions in the room.
     */
    energyAvailable: number;
    /**
     * Total amount of energyCapacity of all spawns and extensions in the room.
     */
    energyCapacityAvailable: number;
    /**
     * A shorthand to Memory.rooms[room.name]. You can use it for quick access the room’s specific memory data object.
     */
    memory: any;
    /**
     * The name of the room.
     */
    name: string;
    /**
     * The Storage structure of this room, if present, otherwise undefined.
     */
    storage: StructureStorage | undefined;
    /**
     * The Terminal structure of this room, if present, otherwise undefined.
     */
    terminal: StructureTerminal | undefined;
    /**
     * The RoomVisual object for this room.
     */
    visual: RoomVisual;
    /**
     * Create new ConstructionSite at the specified location.
     * @param x The X position.
     * @param y The Y position.
     * @param pos Can be a RoomPosition object or any object containing RoomPosition.
     * @param structureType One of the following constants: STRUCTURE_EXTENSION, STRUCTURE_RAMPART, STRUCTURE_ROAD, STRUCTURE_SPAWN, STRUCTURE_WALL, STRUCTURE_LINK
     * @param name The name of the structure, for structures that support it (currently only spawns).
     * @returns Result Code: OK, ERR_INVALID_TARGET, ERR_INVALID_ARGS, ERR_RCL_NOT_ENOUGH
     */
    createConstructionSite(x: number, y: number, structureType: StructureType, name?: string): OK | ERR_INVALID_TARGET | ERR_FULL | ERR_INVALID_ARGS | ERR_RCL_NOT_ENOUGH;
    createConstructionSite(pos: RoomPosition | { pos: RoomPosition }, structureType: StructureType, name?: string): OK | ERR_INVALID_TARGET | ERR_FULL | ERR_INVALID_ARGS | ERR_RCL_NOT_ENOUGH;
    /**
     * Create new Flag at the specified location.
     * @param x The X position.
     * @param y The Y position.
     * @param pos Can be a RoomPosition object or any object containing RoomPosition.
     * @param name (optional) The name of a new flag. It should be unique, i.e. the Game.flags object should not contain another flag with the same name (hash key). If not defined, a random name will be generated.
     * @param color The color of a new flag. Should be one of the COLOR_* constants. The default value is COLOR_WHITE.
     * @param secondaryColor The secondary color of a new flag. Should be one of the COLOR_* constants. The default value is equal to color.
     */
    createFlag(x: number, y: number, name?: string, color?: ColorType, secondaryColor?: ColorType): string | ERR_NAME_EXISTS | ERR_FULL | ERR_INVALID_ARGS;
    createFlag(pos: RoomPosition | { pos: RoomPosition }, name?: string, color?: ColorType, secondaryColor?: ColorType): string | ERR_NAME_EXISTS | ERR_FULL | ERR_INVALID_ARGS;
    /**
     * Find all objects of the specified type in the room. Results are cached automatically for the specified room and type before applying any custom filters. This automatic cache lasts until the end of the tick.
     * @param type One of the FIND_* constants.
     * @param opts An object with additional options
     * @returns An array with the objects found.
     */
    find(type: FIND_EXIT_TOP | FIND_EXIT_RIGHT | FIND_EXIT_BOTTOM | FIND_EXIT_LEFT | FIND_EXIT, opts?: { filter: Filter<RoomPosition> }): RoomPosition[];
    find(type: FIND_CREEPS | FIND_MY_CREEPS | FIND_HOSTILE_CREEPS, opts?: { filter: Filter<Creep> }): Creep[];
    find(type: FIND_SOURCES_ACTIVE | FIND_SOURCES, opts?: { filter: Filter<Source> }): Source[];
    find(type: FIND_DROPPED_RESOURCES, opts?: { filter: Filter<Resource> }): Resource[];
    find(type: FIND_STRUCTURES | FIND_MY_STRUCTURES | FIND_HOSTILE_STRUCTURES, opts?: { filter: Filter<Structure> }): Structure[];
    find(type: FIND_FLAGS, opts?: { filter: Filter<Flag> }): Flag[];
    find(type: FIND_MY_SPAWNS | FIND_HOSTILE_SPAWNS, opts?: { filter: Filter<StructureSpawn> }): StructureSpawn[];
    find(type: FIND_CONSTRUCTION_SITES | FIND_MY_CONSTRUCTION_SITES | FIND_HOSTILE_CONSTRUCTION_SITES, opts?: { filter: Filter<ConstructionSite> }): ConstructionSite[];
    find(type: FIND_MINERALS, opts?: { filter: Filter<Mineral> }): Mineral[];
    find(type: FIND_NUKES, opts?: { filter: Filter<Nuke> }): Nuke[];
    find(type: FIND_TOMBSTONES, opts?: { filter: Filter<Tombstone> }): Tombstone[];
    find(type: FIND_POWER_CREEPS | FIND_MY_POWER_CREEPS | FIND_HOSTILE_POWER_CREEPS, opts?: { filter: Filter<PowerCreep> }): PowerCreep[];
    find(type: FIND_DEPOSITS, opts?: { filter: Filter<Deposit> }): Deposit[];
    find(type: FIND_RUINS, opts?: { filter: Filter<Ruin> }): Ruin[];
    /**
     * Find the exit direction en route to another room. Please note that this method is not required for inter-room movement, you can simply pass the target in another room into Creep.moveTo method.
     * @param room Another room name or room object.
     * @returns The room direction constant, one of the following: FIND_EXIT_TOP, FIND_EXIT_RIGHT, FIND_EXIT_BOTTOM, FIND_EXIT_LEFT
     * Or one of the following error codes: ERR_NO_PATH, ERR_INVALID_ARGS
     */
    findExitTo(room: string | Room): FindExitType | ERR_NO_PATH | ERR_INVALID_ARGS;
    /**
     * Find an optimal path inside the room between fromPos and toPos using Jump Point Search algorithm.
     * @param fromPos The start position.
     * @param toPos The end position.
     * @param opts (optional) An object containing additonal pathfinding flags
     * @returns An array with path steps
     */
    findPath(fromPos: RoomPosition, toPos: RoomPosition, opts?: FindPathOpts): PathStep[];
    /**
     * Returns an array of events happened on the previous tick in this room.
     * @param raw If this parameter is false or undefined, the method returns an object parsed using JSON.parse which incurs some CPU cost on the first access (the return value is cached on subsequent calls). If raw is truthy, then raw JSON in string format is returned.
     */
    getEventLog(raw?: false): RoomEvent[];
    getEventLog(raw: true): string;
    /**
     * Creates a RoomPosition object at the specified location.
     * @param x The X position.
     * @param y The Y position.
     * @returns A RoomPosition object or null if it cannot be obtained.
     */
    getPositionAt(x: number, y: number): RoomPosition | null;
    /**
     * Get a Room.Terrain object which provides fast access to static terrain data. This method works for any room in the world even if you have no access to it.
     */
    getTerrain(): Terrain;
    /**
     * Get the list of objects at the specified room position.
     * @param x The X position.
     * @param y The Y position.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @returns An array with objects at the specified position.
     */
    lookAt(x: number, y: number): LookResult[];
    lookAt(target: RoomPosition | { pos: RoomPosition }): LookResult[];
    /**
     * Get the list of objects at the specified room area. This method is more CPU efficient in comparison to multiple lookAt calls.
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @param asArray Set to true if you want to get the result as a plain array.
     * @returns An object with all the objects in the specified area
     */
    lookAtArea(top: number, left: number, bottom: number, right: number, asArray?: false): PosMatrix<LookResult>;
    lookAtArea(top: number, left: number, bottom: number, right: number, asArray: true): WithPos<LookResult>[];
    /**
     * Get an object with the given type at the specified room position.
     * @param type One of the LOOK_* constants.
     * @param x The X position.
     * @param y The Y position.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @returns An array of objects of the given type at the specified position if found.
     */
    lookForAt(type: LOOK_CREEPS, x: number, y: number): Creep[];
    lookForAt(type: LOOK_ENERGY, x: number, y: number): Resource[];
    lookForAt(type: LOOK_RESOURCES, x: number, y: number): Resource[];
    lookForAt(type: LOOK_SOURCES, x: number, y: number): Source[];
    lookForAt(type: LOOK_MINERALS, x: number, y: number): Mineral[];
    lookForAt(type: LOOK_DEPOSITS, x: number, y: number): Deposit[];
    lookForAt(type: LOOK_STRUCTURES, x: number, y: number): Structure[];
    lookForAt(type: LOOK_FLAGS, x: number, y: number): Flag[];
    lookForAt(type: LOOK_CONSTRUCTION_SITES, x: number, y: number): ConstructionSite[];
    lookForAt(type: LOOK_NUKES, x: number, y: number): Nuke[];
    lookForAt(type: LOOK_TERRAIN, x: number, y: number): TerrainType[];
    lookForAt(type: LOOK_TOMBSTONES, x: number, y: number): Tombstone[];
    lookForAt(type: LOOK_POWER_CREEPS, x: number, y: number): PowerCreep[];
    lookForAt(type: LOOK_RUINS, x: number, y: number): Ruin[];
    lookForAt(type: LOOK_CREEPS, target: RoomPosition | { pos: RoomPosition }): Creep[];
    lookForAt(type: LOOK_ENERGY, target: RoomPosition | { pos: RoomPosition }): Resource[];
    lookForAt(type: LOOK_RESOURCES, target: RoomPosition | { pos: RoomPosition }): Resource[];
    lookForAt(type: LOOK_SOURCES, target: RoomPosition | { pos: RoomPosition }): Source[];
    lookForAt(type: LOOK_MINERALS, target: RoomPosition | { pos: RoomPosition }): Mineral[];
    lookForAt(type: LOOK_DEPOSITS, target: RoomPosition | { pos: RoomPosition }): Deposit[];
    lookForAt(type: LOOK_STRUCTURES, target: RoomPosition | { pos: RoomPosition }): Structure[];
    lookForAt(type: LOOK_FLAGS, target: RoomPosition | { pos: RoomPosition }): Flag[];
    lookForAt(type: LOOK_CONSTRUCTION_SITES, target: RoomPosition | { pos: RoomPosition }): ConstructionSite[];
    lookForAt(type: LOOK_NUKES, target: RoomPosition | { pos: RoomPosition }): Nuke[];
    lookForAt(type: LOOK_TERRAIN, target: RoomPosition | { pos: RoomPosition }): TerrainType[];
    lookForAt(type: LOOK_TOMBSTONES, target: RoomPosition | { pos: RoomPosition }): Tombstone[];
    lookForAt(type: LOOK_POWER_CREEPS, target: RoomPosition | { pos: RoomPosition }): PowerCreep[];
    lookForAt(type: LOOK_RUINS, target: RoomPosition | { pos: RoomPosition }): Ruin[];
    /**
     * Get the list of objects with the given type at the specified room area. This method is more CPU efficient in comparison to multiple lookForAt calls.
     * @param type One of the following string constants: constructionSite, creep, energy, exit, flag, source, structure, terrain
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @returns An object with all the objects of the given type in the specified area
     */
    lookForAtArea(type: LOOK_CREEPS, top: number, left: number, bottom: number, right: number, asArray?: false): PosMatrix<Creep | undefined>;
    lookForAtArea(type: LOOK_ENERGY, top: number, left: number, bottom: number, right: number, asArray?: false): PosMatrix<Resource | undefined>;
    lookForAtArea(type: LOOK_RESOURCES, top: number, left: number, bottom: number, right: number, asArray?: false): PosMatrix<Resource | undefined>;
    lookForAtArea(type: LOOK_SOURCES, top: number, left: number, bottom: number, right: number, asArray?: false): PosMatrix<Source | undefined>;
    lookForAtArea(type: LOOK_MINERALS, top: number, left: number, bottom: number, right: number, asArray?: false): PosMatrix<Mineral | undefined>;
    lookForAtArea(type: LOOK_DEPOSITS, top: number, left: number, bottom: number, right: number, asArray?: false): PosMatrix<Deposit | undefined>;
    lookForAtArea(type: LOOK_STRUCTURES, top: number, left: number, bottom: number, right: number, asArray?: false): PosMatrix<Structure | undefined>;
    lookForAtArea(type: LOOK_FLAGS, top: number, left: number, bottom: number, right: number, asArray?: false): PosMatrix<Flag | undefined>;
    lookForAtArea(type: LOOK_CONSTRUCTION_SITES, top: number, left: number, bottom: number, right: number, asArray?: false): PosMatrix<ConstructionSite | undefined>;
    lookForAtArea(type: LOOK_NUKES, top: number, left: number, bottom: number, right: number, asArray?: false): PosMatrix<Nuke | undefined>;
    lookForAtArea(type: LOOK_TERRAIN, top: number, left: number, bottom: number, right: number, asArray?: false): PosMatrix<TerrainType | undefined>;
    lookForAtArea(type: LOOK_TOMBSTONES, top: number, left: number, bottom: number, right: number, asArray?: false): PosMatrix<Tombstone | undefined>;
    lookForAtArea(type: LOOK_POWER_CREEPS, top: number, left: number, bottom: number, right: number, asArray?: false): PosMatrix<PowerCreep | undefined>;
    lookForAtArea(type: LOOK_RUINS, top: number, left: number, bottom: number, right: number, asArray?: false): PosMatrix<Ruin | undefined>;
    lookForAtArea(type: LOOK_CREEPS, top: number, left: number, bottom: number, right: number, asArray: true): WithPos<LookForCreepResult>[];
    lookForAtArea(type: LOOK_ENERGY, top: number, left: number, bottom: number, right: number, asArray: true): WithPos<LookForEnergyResult>[];
    lookForAtArea(type: LOOK_RESOURCES, top: number, left: number, bottom: number, right: number, asArray: true): WithPos<LookForResourceResult>[];
    lookForAtArea(type: LOOK_SOURCES, top: number, left: number, bottom: number, right: number, asArray: true): WithPos<LookForSourceResult>[];
    lookForAtArea(type: LOOK_MINERALS, top: number, left: number, bottom: number, right: number, asArray: true): WithPos<LookForMineralResult>[];
    lookForAtArea(type: LOOK_DEPOSITS, top: number, left: number, bottom: number, right: number, asArray: true): WithPos<LookForDepositResult>[];
    lookForAtArea(type: LOOK_STRUCTURES, top: number, left: number, bottom: number, right: number, asArray: true): WithPos<LookForStructureResult>[];
    lookForAtArea(type: LOOK_FLAGS, top: number, left: number, bottom: number, right: number, asArray: true): WithPos<LookForFlagResult>[];
    lookForAtArea(type: LOOK_CONSTRUCTION_SITES, top: number, left: number, bottom: number, right: number, asArray: true): WithPos<LookForConstructionSiteResult>[];
    lookForAtArea(type: LOOK_NUKES, top: number, left: number, bottom: number, right: number, asArray: true): WithPos<LookForNukeResult>[];
    lookForAtArea(type: LOOK_TERRAIN, top: number, left: number, bottom: number, right: number, asArray: true): WithPos<LookForTerrainResult>[];
    lookForAtArea(type: LOOK_TOMBSTONES, top: number, left: number, bottom: number, right: number, asArray: true): WithPos<LookForTombstoneResult>[];
    lookForAtArea(type: LOOK_POWER_CREEPS, top: number, left: number, bottom: number, right: number, asArray: true): WithPos<LookForPowerCreepResult>[];
    lookForAtArea(type: LOOK_RUINS, top: number, left: number, bottom: number, right: number, asArray: true): WithPos<LookForRuinResult>[];
}

type RoomEvent = {
    objectId: string;
} & ({
    event: EVENT_ATTACK;
    data: {
        targetId: string;
        damage: number;
        attackType: EventAttackType;
    };
} | {
    event: EVENT_OBJECT_DESTROYED;
    data: {
        type: RoomObjectType;
    };
} | {
    event: EVENT_ATTACK_CONTROLLER;
    data: {
    };
} | {
    event: EVENT_BUILD;
    data: {
        targetId: string;
        amount: number;
        energySpent: number;
    };
} | {
    event: EVENT_HARVEST;
    data: {
        targetId: string;
        amount: number;
    };
} | {
    event: EVENT_HEAL;
    data: {
        targetId: string;
        amount: number;
        healType: EventHealType;
    };
} | {
    event: EVENT_REPAIR;
    data: {
        targetId: string;
        amount: number;
        energySpent: number;
    };
} | {
    event: EVENT_RESERVE_CONTROLLER;
    data: {
        amount: number;
    };
} | {
    event: EVENT_UPGRADE_CONTROLLER;
    data: {
        amount: number;
        energySpent: number;
    };
} | {
    event: EVENT_EXIT;
    data: {
        room: string;
        x: number;
        y: number;
    };
} | {
    event: EVENT_POWER;
    data: {
        power: PowerType;
        targetId: string;
    };
} | {
    event: EVENT_TRANSFER;
    data: {
        targetId: string;
        resourceType: ResourceType;
        amount: number;
    };
});

/**
 * An object which provides fast access to room terrain data. These objects can be constructed for any room in the world even if you have no access to it.
 * Technically every Room.Terrain object is a very lightweight adapter to underlying static terrain buffers with corresponding minimal accessors.
 */
export interface Terrain {
    /**
     * Get terrain type at the specified room position by (x,y) coordinates. Unlike the Game.map.getTerrainAt(...) method, this one doesn't perform any string operations and returns integer terrain type values (see below).
     * @param x X position in the room.
     * @param y Y position in the room.
     */
    get(x: number, y: number): TERRAIN_MASK_PLAIN | TERRAIN_MASK_WALL | TERRAIN_MASK_SWAMP;
    /**
     * Get copy of underlying static terrain buffer. Current underlying representation is Uint8Array.
     * WARNING: this method relies on underlying representation of terrain data. This is the fastest way to obtain terrain data of the whole room (2500 tiles), but users should keep in mind that it can be marked as deprecated anytime in the future, or return value type can be changed due to underlying data representation changing.
     * @param destinationArray A typed array view in which terrain will be copied to.
     * @returns Copy of underlying room terrain representations as a new Uint8Array typed array of size 2500.
     * Each element is an integer number, terrain type can be obtained by applying bitwise AND (&) operator with appropriate TERRAIN_MASK_* constant. Room tiles are stored row by row.
     * If destinationArray is specified, function returns reference to this filled destinationArray if coping succeeded, or error code otherwise.
     */
    getRawBuffer(destinationArray?: Uint8Array): Uint8Array | ERR_INVALID_ARGS;
}

interface TerrainConstructor {
    /**
     * Creates a new Terrain of room by its name. Terrain objects can be constructed for any room in the world even if you have no access to it.
     * @param roomName The room name.
     */
    new(roomName: string): Terrain;
}
