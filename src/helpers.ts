import { OK, ERR_BUSY, ERR_INVALID_ARGS, ResourceType, BodyPart, Direction, LOOK_CREEPS, LOOK_ENERGY, LOOK_RESOURCES, LOOK_SOURCES, LOOK_MINERALS, LOOK_DEPOSITS, LOOK_STRUCTURES, LOOK_FLAGS, LOOK_CONSTRUCTION_SITES, LOOK_NUKES, LOOK_TERRAIN, LOOK_TOMBSTONES, LOOK_POWER_CREEPS, LOOK_RUINS, TerrainType } from "./constants-types";
import { RoomPosition } from "./room-position";
import { CostMatrix } from "./path-finder";
import { Creep, PowerCreep } from "./creep";
import { Resource } from "./resource";
import { Mineral } from "./mineral";
import { Deposit } from "./deposit";
import { Structure } from "./structure";
import { Flag } from "./flag";
import { ConstructionSite } from "./construction-site";
import { Nuke } from "./nuke";
import { Source } from "./source";
import { Tombstone } from "./tombstone";
import { Ruin } from "./ruin";

export type _ConstructorById<T> = {
  new(id: string): T;
}

export interface ObjectId {
  /**
   * A unique object identifier. You can use `Game.getObjectById` method to retrieve an object instance by its `id`.
   */
  id: string;
}

export interface OwnedObject {
  /**
   * Whether this is your own object. Walls and roads don't have this property as they are considered neutral structures.
   */
  my: boolean;
  /**
   * An object with the object’s owner info (if present) containing the following properties: username
   */
  owner: Owner;
}

export interface Owner {
  username: string;
}

export type PosMatrix<T> = {
  [y: number]: {
    [x: number]: T[];
  };
}

export type WithPos<T> = {
  x: number;
  y: number;
} & T;

export type LookResult =
  LookCreepResult |
  LookEnergyResult |
  LookResourceResult |
  LookSourceResult |
  LookMineralResult |
  LookDepositResult |
  LookStructureResult |
  LookFlagResult |
  LookConstructionSiteResult |
  LookNukeResult |
  LookTerrainResult |
  LookTombstoneResult |
  LookPowerCreepResult |
  LookRuinResult;

export type LookCreepResult = LookForCreepResult & {
  type: LOOK_CREEPS;
};

export type LookEnergyResult = LookForEnergyResult & {
  type: LOOK_ENERGY;
};

export type LookResourceResult = LookForResourceResult & {
  type: LOOK_RESOURCES;
};

export type LookSourceResult = LookForSourceResult & {
  type: LOOK_SOURCES;
};

export type LookMineralResult = LookForMineralResult & {
  type: LOOK_MINERALS;
};

export type LookDepositResult = LookForDepositResult & {
  type: LOOK_DEPOSITS;
};

export type LookStructureResult = LookForStructureResult & {
  type: LOOK_STRUCTURES;
};

export type LookFlagResult = LookForFlagResult & {
  type: LOOK_FLAGS;
};

export type LookConstructionSiteResult = LookForConstructionSiteResult & {
  type: LOOK_CONSTRUCTION_SITES;
};

export type LookNukeResult = LookForNukeResult & {
  type: LOOK_NUKES;
};

export type LookTerrainResult = LookForTerrainResult & {
  type: LOOK_TERRAIN;
};

export type LookTombstoneResult = LookForTombstoneResult & {
  type: LOOK_TOMBSTONES;
};

export type LookPowerCreepResult = LookForPowerCreepResult & {
  type: LOOK_POWER_CREEPS;
};

export type LookRuinResult = LookForRuinResult & {
  type: LOOK_RUINS;
};

export type LookForCreepResult = {
  creep: Creep;
};

export type LookForEnergyResult = {
  energy: Resource;
};

export type LookForResourceResult = {
  resource: Resource;
};

export type LookForSourceResult = {
  source: Source;
};

export type LookForMineralResult = {
  mineral: Mineral;
};

export type LookForDepositResult = {
  deposit: Deposit;
};

export type LookForStructureResult = {
  structure: Structure;
};

export type LookForFlagResult = {
  flag: Flag;
};

export type LookForConstructionSiteResult = {
  constructionSite: ConstructionSite;
};

export type LookForNukeResult = {
  nuke: Nuke;
};

export type LookForTerrainResult = {
  terrain: TerrainType;
};

export type LookForTombstoneResult = {
  tembstone: Tombstone;
};

export type LookForPowerCreepResult = {
  powerCreep: PowerCreep;
};

export type LookForRuinResult = {
  ruin: Ruin;
};

export interface FindPathOpts {
  /**
   * Treat squares with creeps as walkable. Can be useful with too many moving creeps around or in some other cases. The default
   * value is false.
   */
  ignoreCreeps?: boolean;

  /**
   * Treat squares with destructible structures (constructed walls, ramparts, spawns, extensions) as walkable. Use this flag when
   * you need to move through a territory blocked by hostile structures. If a creep with an ATTACK body part steps on such a square,
   * it automatically attacks the structure. The default value is false.
   */
  ignoreDestructibleStructures?: boolean;

  /**
   * Ignore road structures. Enabling this option can speed up the search. The default value is false. This is only used when the
   * new PathFinder is enabled.
   */
  ignoreRoads?: boolean;

  /**
   * You can use this callback to modify a CostMatrix for any room during the search. The callback accepts two arguments, roomName
   * and costMatrix. Use the costMatrix instance to make changes to the positions costs. If you return a new matrix from this callback,
   * it will be used instead of the built-in cached one. This option is only used when the new PathFinder is enabled.
   *
   * @param roomName The name of the room.
   * @param costMatrix The current CostMatrix
   * @returns The new CostMatrix to use
   */
  costCallback?(roomName: string, costMatrix: CostMatrix): boolean | CostMatrix;

  /**
   * An array of the room's objects or RoomPosition objects which should be treated as walkable tiles during the search. This option
   * cannot be used when the new PathFinder is enabled (use costCallback option instead).
   */
  ignore?: any[] | RoomPosition[];

  /**
   * An array of the room's objects or RoomPosition objects which should be treated as obstacles during the search. This option cannot
   * be used when the new PathFinder is enabled (use costCallback option instead).
   */
  avoid?: any[] | RoomPosition[];

  /**
   * The maximum limit of possible pathfinding operations. You can limit CPU time used for the search based on ratio 1 op ~ 0.001 CPU.
   * The default value is 2000.
   */
  maxOps?: number;

  /**
   * Weight to apply to the heuristic in the A* formula F = G + weight * H. Use this option only if you understand the underlying
   * A* algorithm mechanics! The default value is 1.2.
   */
  heuristicWeight?: number;

  /**
   * If true, the result path will be serialized using Room.serializePath. The default is false.
   */
  serialize?: boolean;

  /**
   * The maximum allowed rooms to search. The default (and maximum) is 16. This is only used when the new PathFinder is enabled.
   */
  maxRooms?: number;

  /**
   * Path to within (range) tiles of target tile. The default is to path to the tile that the target is on (0).
   */
  range?: number;
}

export interface PathStep {
  x: number;
  dx: number;
  y: number;
  dy: number;
  direction: Direction;
}

export type Filter<T> = Partial<T> | ((aobj: T) => boolean) | keyof T;