import { GameMap } from "./map";
import { ResourceType, SUBSCRIPTION_TOKEN, OK, ERR_BUSY, ERR_INVALID_ARGS } from "./constants-types";
import { Market } from "./market";
import { ConstructionSite } from "./construction-site";
import { Creep, PowerCreep } from "./creep";
import { Flag } from "./flag";
import { Room } from "./room";
import { StructureSpawn, Structure } from "./structure";

/**
 * The main global game object containing all the gameplay information.
 */
export declare const Game: Game;
export interface Game {
  /**
   * A hash containing all your construction sites with their id as hash keys.
   */
  constructionSites: { [constructionSiteId: string]: ConstructionSite };
  /**
   * An object containing information about your CPU usage with the following properties:
   */
  cpu: CPU;
  /**
   * A hash containing all your creeps with creep names as hash keys.
   */
  creeps: { [creepName: string]: Creep };
  /**
   * A hash containing all your flags with flag names as hash keys.
   */
  flags: { [flagName: string]: Flag };
  /**
   * Your Global Control Level, an object with the following properties :
   */
  gcl: GlobalControlLevel;
  /**
   * Your Global Power Level, an object with the following properties :
   */
  gpl: GlobalControlLevel;
  /**
   * A global object representing world GameMap.
   */
  map: GameMap;
  /**
   * A global object representing the in-game market.
   */
  market: Market;
  /**
   * A hash containing all your power creeps with their names as hash keys. Even power creeps not spawned in the world can be accessed here.
   */
  powerCreeps: { [creepName: string]: PowerCreep };
  /**
   * An object with your global resources that are bound to the account, like subscription tokens. Each object key is a resource constant, values are resources amounts.
   */
  resources: { [resourceType in ResourceType | SUBSCRIPTION_TOKEN]?: number };
  /**
   * A hash containing all the rooms available to you with room names as hash keys.
   */
  rooms: { [roomName: string]: Room };
  /**
   * An object describing the world shard where your script is currently being executed in.
   */
  shard: Shard;
  /**
   * A hash containing all your spawns with spawn names as hash keys.
   */
  spawns: { [spawnName: string]: StructureSpawn };
  /**
   * A hash containing all your structures with structure id as hash keys.
   */
  structures: { [structureId: string]: Structure };
  /**
   * System game tick counter. It is automatically incremented on every tick.
   */
  time: number;
  /**
   * Get an object with the specified unique ID. It may be a game object of any type. Only objects from the rooms which are visible to you can be accessed.
   * @param id The unique identifier.
   * @returns an object instance or null if it cannot be found.
   */
  getObjectById<T>(id: string): T | null;
  /**
   * Send a custom message at your profile email. This way, you can set up notifications to yourself on any occasion within the game. You can schedule up to 20 notifications during one game tick. Not available in the Simulation Room.
   * @param message Custom text which will be sent in the message. Maximum length is 1000 characters.
   * @param groupInterval If set to 0 (default), the notification will be scheduled immediately. Otherwise, it will be grouped with other notifications and mailed out later using the specified time in minutes.
   */
  notify(message: string, groupInterval?: number): void;
}

interface GlobalControlLevel {
  /**
   * The current level.
   */
  level: number;
  /**
   * The current progress to the next level.
   */
  progress: number;
  /**
   * The progress required to reach the next level.
   */
  progressTotal: number;
}

interface CPU {
  /**
   * Your assigned CPU limit for the current shard.
   */
  limit: number;
  /**
   * An amount of available CPU time at the current game tick. Usually it is higher than Game.cpu.limit.
   */
  tickLimit: number;
  /**
   * An amount of unused CPU accumulated in your bucket.
   */
  bucket: number;
  /**
   * An object with limits for each shard with shard names as keys. You can use setShardLimits method to re-assign them.
   */
  shardLimits: ShardLimits;

  /**
   * This method is only available when Virtual machine is set to Isolated in your account runtime settings.
   *
   * Use this method to get heap statistics for your virtual machine. The return value is almost identical to the Node.js function v8.getHeapStatistics(). This function returns one additional property: externally_allocated_size which is the total amount of currently allocated memory which is not included in the v8 heap but counts against this isolate's memory limit. ArrayBuffer instances over a certain size are externally allocated and will be counted here.
   * @returns Returns an objects with heap statistics
   */
  getHeapStatistics(): HeapStatistics;
  /**
   * Get amount of CPU time used from the beginning of the current game tick. Always returns 0 in the Simulation mode.
   * @returns Returns currently used CPU time as a float number.
   */
  getUsed(): number;
  /**
   * This method is only available when Virtual machine is set to Isolated in your account runtime settings.
   *
   * Reset your runtime environment and wipe all data in heap memory.
   */
  halt(): void;
  /**
   * Allocate CPU limits to different shards. Total amount of CPU should remain equal to Game.cpu.shardLimits. This method can be used only once per 12 hours.
   * @param limits An object with CPU values for each shard in the same format as Game.cpu.shardLimits.
   */
  setShardLimits(limits: ShardLimits): OK | ERR_BUSY | ERR_INVALID_ARGS;
}

type ShardLimits = { [shardId: string]: number };

interface HeapStatistics {
  total_heap_size: number;
  total_heap_size_executable: number;
  total_physical_size: number;
  total_available_size: number;
  used_heap_size: number;
  heap_size_limit: number;
  malloced_memory: number;
  peak_malloced_memory: number;
  does_zap_garbage: number;
  externally_allocated_size: number;
}

interface Shard {
  /**
   * The name of the shard.
   */
  name: string;
  /**
   * Currently always equals to "normal".
   */
  type: string;
  /**
   * Whether this shard belongs to the PTR.
   */
  ptr?: boolean;
}
