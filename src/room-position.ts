import { FindPathOpts, Filter, PathStep, LookResult, LookCreepResult, LookEnergyResult, LookResourceResult, LookSourceResult, LookMineralResult, LookDepositResult, LookStructureResult, LookFlagResult, LookConstructionSiteResult, LookNukeResult, LookTerrainResult, LookTombstoneResult, LookPowerCreepResult, LookRuinResult } from "./helpers";
import { StructureType, OK, ERR_INVALID_TARGET, ERR_FULL, ERR_INVALID_ARGS, ERR_RCL_NOT_ENOUGH, ColorType, ERR_NAME_EXISTS, FIND_EXIT, FIND_EXIT_LEFT, FIND_EXIT_BOTTOM, FIND_EXIT_RIGHT, FIND_EXIT_TOP, FIND_CREEPS, FIND_MY_CREEPS, FIND_HOSTILE_CREEPS, FIND_SOURCES, FIND_SOURCES_ACTIVE, FIND_DROPPED_RESOURCES, FIND_STRUCTURES, FIND_MY_STRUCTURES, FIND_HOSTILE_STRUCTURES, FIND_FLAGS, FIND_MY_SPAWNS, FIND_HOSTILE_SPAWNS, FIND_HOSTILE_CONSTRUCTION_SITES, FIND_MY_CONSTRUCTION_SITES, FIND_CONSTRUCTION_SITES, FIND_MINERALS, FIND_NUKES, FIND_TOMBSTONES, FIND_HOSTILE_POWER_CREEPS, FIND_MY_POWER_CREEPS, FIND_POWER_CREEPS, FIND_DEPOSITS, FIND_RUINS, Direction, LOOK_CREEPS, LOOK_ENERGY, LOOK_RESOURCES, LOOK_SOURCES, LOOK_MINERALS, LOOK_DEPOSITS, LOOK_FLAGS, LOOK_CONSTRUCTION_SITES, LOOK_NUKES, LOOK_STRUCTURES, LOOK_TERRAIN, LOOK_TOMBSTONES, LOOK_POWER_CREEPS, LOOK_RUINS, TerrainType } from "./constants-types";
import { RoomObject } from "./room-object";
import { Structure, StructureSpawn } from "./structure";
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

/**
 * An object representing the specified position in the room. Every object in the room contains RoomPosition as the pos property. The position object of a custom location can be obtained using the Room.getPositionAt() method or using the constructor.
 */
export declare const RoomPosition: {
  /**
   * You can create new RoomPosition object using its constructor.
   * @param x X position in the room.
   * @param y Y position in the room.
   * @param roomName The room name.
   */
  new(x: number, y: number, roomName: string): RoomPosition;
};
export interface RoomPosition {
  /**
   * The name of the room.
   */
  roomName: string;
  /**
   * X position in the room.
   */
  x: number;
  /**
   * Y position in the room.
   */
  y: number;
  /**
   * Create new ConstructionSite at the specified location.
   * @param structureType One of the STRUCTURE_* constants.
   * @param name The name of the structure, for structures that support it (currently only spawns).
   */
  createConstructionSite(structureType: StructureType, name?: string): OK | ERR_INVALID_TARGET | ERR_FULL | ERR_INVALID_ARGS | ERR_RCL_NOT_ENOUGH;
  /**
   * Create new Flag at the specified location.
   * @param name The name of a new flag. It should be unique, i.e. the Game.flags object should not contain another flag with the same name (hash key). If not defined, a random name will be generated.
   * @param color The color of a new flag. Should be one of the COLOR_* constants
   * @param secondaryColor The secondary color of a new flag. Should be one of the COLOR_* constants. The default value is equal to color.
   */
  createFlag(name?: string, color?: ColorType, secondaryColor?: ColorType): string | ERR_NAME_EXISTS | ERR_INVALID_ARGS;
  /**
   * Find an object with the shortest path from the given position. Uses Jump Point Search algorithm and Dijkstra's algorithm.
   * @param type See Room.find
   * @param objects An array of room's objects or RoomPosition objects that the search should be executed against.
   * @param opts An object containing pathfinding options (see Room.findPath), or one of the following: filter, algorithm
   * @todo allow objects to be a union type of subtypes of RoomObject
   */
  findClosestByPath(type: FIND_EXIT_TOP | FIND_EXIT_RIGHT | FIND_EXIT_BOTTOM | FIND_EXIT_LEFT | FIND_EXIT, opts?: FindClosestByPathOpts<RoomPosition>): RoomPosition | null;
  findClosestByPath(type: FIND_CREEPS | FIND_MY_CREEPS | FIND_HOSTILE_CREEPS, opts?: FindClosestByPathOpts<Creep>): Creep | null;
  findClosestByPath(type: FIND_SOURCES_ACTIVE | FIND_SOURCES, opts?: FindClosestByPathOpts<Source>): Source | null;
  findClosestByPath(type: FIND_DROPPED_RESOURCES, opts?: FindClosestByPathOpts<Resource>): Resource | null;
  findClosestByPath(type: FIND_STRUCTURES | FIND_MY_STRUCTURES | FIND_HOSTILE_STRUCTURES, opts?: FindClosestByPathOpts<Structure>): Structure | null;
  findClosestByPath(type: FIND_FLAGS, opts?: FindClosestByPathOpts<Flag>): Flag | null;
  findClosestByPath(type: FIND_MY_SPAWNS | FIND_HOSTILE_SPAWNS, opts?: FindClosestByPathOpts<StructureSpawn>): StructureSpawn | null;
  findClosestByPath(type: FIND_CONSTRUCTION_SITES | FIND_MY_CONSTRUCTION_SITES | FIND_HOSTILE_CONSTRUCTION_SITES, opts?: FindClosestByPathOpts<ConstructionSite>): ConstructionSite | null;
  findClosestByPath(type: FIND_MINERALS, opts?: FindClosestByPathOpts<Mineral>): Mineral | null;
  findClosestByPath(type: FIND_NUKES, opts?: FindClosestByPathOpts<Nuke>): Nuke | null;
  findClosestByPath(type: FIND_TOMBSTONES, opts?: FindClosestByPathOpts<Tombstone>): Tombstone | null;
  findClosestByPath(type: FIND_POWER_CREEPS | FIND_MY_POWER_CREEPS | FIND_HOSTILE_POWER_CREEPS, opts?: FindClosestByPathOpts<PowerCreep>): PowerCreep | null;
  findClosestByPath(type: FIND_DEPOSITS, opts?: FindClosestByPathOpts<Deposit>): Deposit | null;
  findClosestByPath(type: FIND_RUINS, opts?: FindClosestByPathOpts<Ruin>): Ruin | null;
  findClosestByPath<T extends RoomObject>(objects: T[], opts?: FindClosestByPathOpts<T>): T | null;
  findClosestByPath(objects: RoomPosition[], opts?: FindClosestByPathOpts<RoomPosition>): RoomPosition | null;
  /**
   * Find an object with the shortest linear distance from the given position.
   * @param type See Room.find.
   * @param objects An array of room's objects or RoomPosition objects that the search should be executed against.
   * @param opts An object containing one of the following options: filter
   */
  findClosestByRange(type: FIND_EXIT_TOP | FIND_EXIT_RIGHT | FIND_EXIT_BOTTOM | FIND_EXIT_LEFT | FIND_EXIT, opts?: FindClosestByRangeOpts<RoomPosition>): RoomPosition | null;
  findClosestByRange(type: FIND_CREEPS | FIND_MY_CREEPS | FIND_HOSTILE_CREEPS, opts?: FindClosestByRangeOpts<Creep>): Creep | null;
  findClosestByRange(type: FIND_SOURCES_ACTIVE | FIND_SOURCES, opts?: FindClosestByRangeOpts<Source>): Source | null;
  findClosestByRange(type: FIND_DROPPED_RESOURCES, opts?: FindClosestByRangeOpts<Resource>): Resource | null;
  findClosestByRange(type: FIND_STRUCTURES | FIND_MY_STRUCTURES | FIND_HOSTILE_STRUCTURES, opts?: FindClosestByRangeOpts<Structure>): Structure | null;
  findClosestByRange(type: FIND_FLAGS, opts?: FindClosestByRangeOpts<Flag>): Flag | null;
  findClosestByRange(type: FIND_MY_SPAWNS | FIND_HOSTILE_SPAWNS, opts?: FindClosestByRangeOpts<StructureSpawn>): StructureSpawn | null;
  findClosestByRange(type: FIND_CONSTRUCTION_SITES | FIND_MY_CONSTRUCTION_SITES | FIND_HOSTILE_CONSTRUCTION_SITES, opts?: FindClosestByRangeOpts<ConstructionSite>): ConstructionSite | null;
  findClosestByRange(type: FIND_MINERALS, opts?: FindClosestByRangeOpts<Mineral>): Mineral | null;
  findClosestByRange(type: FIND_NUKES, opts?: FindClosestByRangeOpts<Nuke>): Nuke | null;
  findClosestByRange(type: FIND_TOMBSTONES, opts?: FindClosestByRangeOpts<Tombstone>): Tombstone | null;
  findClosestByRange(type: FIND_POWER_CREEPS | FIND_MY_POWER_CREEPS | FIND_HOSTILE_POWER_CREEPS, opts?: FindClosestByRangeOpts<PowerCreep>): PowerCreep | null;
  findClosestByRange(type: FIND_DEPOSITS, opts?: FindClosestByRangeOpts<Deposit>): Deposit | null;
  findClosestByRange(type: FIND_RUINS, opts?: FindClosestByRangeOpts<Ruin>): Ruin | null;
  findClosestByRange<T extends RoomObject>(objects: T[], opts?: FindClosestByRangeOpts<T>): T | null;
  findClosestByRange(objects: RoomPosition[], opts?: FindClosestByRangeOpts<RoomPosition>): RoomPosition | null;
  /**
   * Find all objects in the specified linear range.
   * @param type See Room.find.
   * @param objects An array of room's objects or RoomPosition objects that the search should be executed against.
   * @param range The range distance.
   * @param opts See Room.find.
   */
  findInRange(type: FIND_EXIT_TOP | FIND_EXIT_RIGHT | FIND_EXIT_BOTTOM | FIND_EXIT_LEFT | FIND_EXIT, opts?: FindPathOpts): RoomPosition | null;
  findInRange(type: FIND_CREEPS | FIND_MY_CREEPS | FIND_HOSTILE_CREEPS, opts?: FindPathOpts): Creep | null;
  findInRange(type: FIND_SOURCES_ACTIVE | FIND_SOURCES, opts?: FindPathOpts): Source | null;
  findInRange(type: FIND_DROPPED_RESOURCES, opts?: FindPathOpts): Resource | null;
  findInRange(type: FIND_STRUCTURES | FIND_MY_STRUCTURES | FIND_HOSTILE_STRUCTURES, opts?: FindPathOpts): Structure | null;
  findInRange(type: FIND_FLAGS, opts?: FindPathOpts): Flag | null;
  findInRange(type: FIND_MY_SPAWNS | FIND_HOSTILE_SPAWNS, opts?: FindPathOpts): StructureSpawn | null;
  findInRange(type: FIND_CONSTRUCTION_SITES | FIND_MY_CONSTRUCTION_SITES | FIND_HOSTILE_CONSTRUCTION_SITES, opts?: FindPathOpts): ConstructionSite | null;
  findInRange(type: FIND_MINERALS, opts?: FindPathOpts): Mineral | null;
  findInRange(type: FIND_NUKES, opts?: FindPathOpts): Nuke | null;
  findInRange(type: FIND_TOMBSTONES, opts?: FindPathOpts): Tombstone | null;
  findInRange(type: FIND_POWER_CREEPS | FIND_MY_POWER_CREEPS | FIND_HOSTILE_POWER_CREEPS, opts?: FindPathOpts): PowerCreep | null;
  findInRange(type: FIND_DEPOSITS, opts?: FindPathOpts): Deposit | null;
  findInRange(type: FIND_RUINS, opts?: FindPathOpts): Ruin | null;
  findInRange<T extends RoomObject>(objects: T[], opts?: FindPathOpts): T | null;
  findInRange(objects: RoomPosition[], opts?: FindPathOpts): RoomPosition | null;
  /**
   * Find an optimal path to the specified position using Jump Point Search algorithm. This method is a shorthand for Room.findPath. If the target is in another room, then the corresponding exit will be used as a target
   * @param x X position in the room.
   * @param y Y position in the room.
   * @param target Can be a RoomPosition object or any object containing RoomPosition.
   * @param opts An object containing pathfinding options flags (see Room.findPath for more details).
   */
  findPathTo(x: number, y: number, opts?: FindPathOpts): PathStep[];
  findPathTo(target: RoomPosition | { pos: RoomPosition }, opts?: FindPathOpts): PathStep[];
  /**
   * Get linear direction to the specified position.
   * @param x X position in the room.
   * @param y Y position in the room.
   * @param target Can be a RoomPosition object or any object containing RoomPosition.
   * @returns A number representing one of the direction constants.
   */
  getDirectionTo(x: number, y: number): Direction;
  getDirectionTo(target: RoomPosition | { pos: RoomPosition }): Direction;
  /**
   * Get linear range to the specified position.
   * @param x X position in the room.
   * @param y Y position in the room.
   * @param target Can be a RoomPosition object or any object containing RoomPosition.
   * @returns A number of squares to the given position.
   */
  getRangeTo(x: number, y: number): number;
  getRangeTo(target: RoomPosition | { pos: RoomPosition }): number;
  /**
   * Check whether this position is in the given range of another position.
   * @param x X position in the room.
   * @param y Y position in the room.
   * @param target Can be a RoomPosition object or any object containing RoomPosition.
   * @param range The range distance.
   * @returns A boolean value.
   */
  inRangeTo(x: number, y: number, range: number): boolean;
  inRangeTo(target: RoomPosition | { pos: RoomPosition }, range: number): boolean;
  /**
   * Check whether this position is the same as the specified position.
   * @param x X position in the room.
   * @param y Y position in the room.
   * @param target Can be a RoomPosition object or any object containing RoomPosition.
   * @returns A boolean value.
   */
  isEqualTo(x: number, y: number): boolean;
  isEqualTo(target: RoomPosition | { pos: RoomPosition }): boolean;
  /**
   * Check whether this position is on the adjacent square to the specified position. The same as inRangeTo(target, 1).
   * @param x X position in the room.
   * @param y Y position in the room.
   * @param target Can be a RoomPosition object or any object containing RoomPosition.
   * @returns A boolean value.
   */
  isNearTo(x: number, y: number): boolean;
  isNearTo(target: RoomPosition | { pos: RoomPosition }): boolean;
  /**
   * Get the list of objects at the specified room position.
   * @returns An array with objects at the specified position.
   */
  look(): LookResult[];
  /**
   * Get an object with the given type at the specified room position.
   * @param type One of the LOOK_* constants.
   * @returns An array of objects of the given type at the specified position if found.
   */
  lookFor(type: LOOK_CREEPS): Creep[];
  lookFor(type: LOOK_ENERGY): Resource[];
  lookFor(type: LOOK_RESOURCES): Resource[];
  lookFor(type: LOOK_SOURCES): Source[];
  lookFor(type: LOOK_MINERALS): Mineral[];
  lookFor(type: LOOK_DEPOSITS): Deposit[];
  lookFor(type: LOOK_STRUCTURES): Structure[];
  lookFor(type: LOOK_FLAGS): Flag[];
  lookFor(type: LOOK_CONSTRUCTION_SITES): ConstructionSite[];
  lookFor(type: LOOK_NUKES): Nuke[];
  lookFor(type: LOOK_TERRAIN): TerrainType[];
  lookFor(type: LOOK_TOMBSTONES): Tombstone[];
  lookFor(type: LOOK_POWER_CREEPS): PowerCreep[];
  lookFor(type: LOOK_RUINS): Ruin[];
}

type FindClosestByPathOpts<T> = FindPathOpts & {
  filter?: Filter<T>;
  algorithm?: "astar" | "dijkstra";
};

type FindClosestByRangeOpts<T> = FindPathOpts & {
  filter?: Filter<T>;
};
