import { OwnedObject, ObjectId, _ConstructorById } from "./helpers";
import { RoomObject } from "./room-object";
import { StructureType, ERR_NOT_OWNER, ERR_BUSY, OK, ERR_INVALID_ARGS, ERR_NOT_ENOUGH_RESOURCES, ERR_TIRED, ERR_INVALID_TARGET, ERR_FULL, ERR_RCL_NOT_ENOUGH, CommodityResourceType, MineralResourceType, BoostResourceType, ERR_NOT_FOUND, ERR_NOT_IN_RANGE, BodyPart, ERR_NAME_EXISTS, ERR_NOT_ENOUGH_ENERGY, Direction, ResourceType, PowerType } from "./constants-types";
import { Store } from "./store";
import { Creep, PowerCreep } from "./creep";
import { RoomPosition } from "./room-position";

/**
 * The base prototype object of all structures.
 */
export declare const Structure: _ConstructorById<Structure>;
export interface Structure extends RoomObject, ObjectId {
    /**
     * The current amount of hit points of the structure.
     */
    hits: number;
    /**
     * The total amount of hit points of the structure.
     */
    hitsMax: number;
    /**
     * One of the STRUCTURE_* constants.
     */
    structureType: StructureType;
    /**
     * Destroy this structure immediately.
     */
    destroy(): OK | ERR_NOT_OWNER | ERR_BUSY;
    /**
     * Check whether this structure can be used. If the room controller level is not enough, then this method will return false, and the structure will be highlighted with red in the game.
     */
    isActive(): boolean;
    /**
     * Toggle auto notification when the structure is under attack. The notification will be sent to your account email. Turned on by default.
     * @param enabled Whether to enable notification or disable.
     */
    notifyWhenAttacked(enabled: boolean): OK | ERR_NOT_OWNER | ERR_INVALID_ARGS;
}

/**
 * The base prototype for a structure that has an owner. Such structures can be
 * found using `FIND_MY_STRUCTURES` and `FIND_HOSTILE_STRUCTURES` constants.
 */
export declare const OwnedStructure: _ConstructorById<OwnedStructure>;
export interface OwnedStructure extends Structure, OwnedObject {
}

/**
 * A small container that can be used to store resources. This is a walkable structure. All dropped resources automatically goes to the container at the same tile.
 */
export declare const StructureContainer: _ConstructorById<StructureContainer>;
export interface StructureContainer extends Structure {
    /**
     * A Store object that contains cargo of this structure.
     */
    store: Store;
    /**
     * An alias for .store.getCapacity().
     * @deprecated This property is deprecated and will be removed soon.
     */
    storeCapacity: number;
    /**
     * The amount of game ticks when this container will lose some hit points.
     */
    ticksToDecay: number;
}

/**
 * Claim this structure to take control over the room. The controller structure cannot be damaged or destroyed.
 */
export declare const StructureController: _ConstructorById<StructureController>;
export interface StructureController extends OwnedStructure {
    /**
     * Whether using power is enabled in this room. Use PowerCreep.enableRoom to turn powers on.
     */
    isPowerEnabled: boolean;
    /**
     * Current controller level, from 0 to 8.
     */
    level: Rcl;
    /**
     * The current progress of upgrading the controller to the next level.
     */
    progress: number;
    /**
     * The progress needed to reach the next level.
     */
    progressTotal: number;
    /**
     * An object with the controller reservation info if present: username, ticksToEnd
     */
    reservation: ReservationDefinition | undefined;
    /**
     * How many ticks of safe mode are remaining, or undefined.
     */
    safeMode: number | undefined;
    /**
     * Safe mode activations available to use.
     */
    safeModeAvailable: number;
    /**
     * During this period in ticks new safe mode activations will be blocked, undefined if cooldown is inactive.
     */
    safeModeCooldown: number | undefined;
    /**
     * An object with the controller sign info if present
     */
    sign: SignDefinition | undefined;
    /**
     * The amount of game ticks when this controller will lose one level. This timer can be reset by using Creep.upgradeController.
     */
    ticksToDowngrade: number;
    /**
     * The amount of game ticks while this controller cannot be upgraded due to attack.
     */
    upgradeBlocked: number;
    /**
     * Activate safe mode if available.
     * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_NOT_ENOUGH_RESOURCES, ERR_TIRED
     */
    activateSafeMode(): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NOT_ENOUGH_RESOURCES | ERR_TIRED;
    /**
     * Make your claimed controller neutral again.
     */
    unclaim(): OK | ERR_NOT_OWNER;
}

export declare type Rcl = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export declare type OwnedRcl = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface ReservationDefinition {
    /**
     * The name of a player who reserved this controller.
     */
    username: string;
    /**
     * The amount of game ticks when the reservation will end.
     */
    ticksToEnd: number;
}

export interface SignDefinition {
    /**
     * The name of a player who signed this controller.
     */
    username: string;
    /**
     * The sign text.
     */
    text: string;
    /**
     * The sign time in game ticks.
     */
    time: number;
    /**
     * The sign real date.
     */
    datetime: Date;
}

/**
 * Contains energy which can be spent on spawning bigger creeps. Extensions can
 * be placed anywhere in the room, any spawns will be able to use them regardless
 * of distance.
 */
export declare const StructureExtension: _ConstructorById<StructureExtension>;
export interface StructureExtension extends OwnedStructure {
    /**
     * An alias for .store[RESOURCE_ENERGY].
     * @deprecated This property is deprecated and will be removed soon.
     */
    energy: number;
    /**
     * An alias for .store.getCapacity(RESOURCE_ENERGY).
     * The total amount of energy the extension can contain.
     * @deprecated This property is deprecated and will be removed soon.
     */
    energyCapacity: number;
    /**
     * A Store object that contains cargo of this structure.
     */
    store: Store;
}

/**
 * Allows to harvest mineral deposits.
 */
export declare const StructureExtractor: _ConstructorById<StructureExtractor>;
export interface StructureExtractor extends OwnedStructure {
    /**
     * The amount of game ticks until the next harvest action is possible.
     */
    cooldown: number;
}

/**
 * Produces trade commodities from base minerals and other commodities.
 */
export declare const StructureFactory: _ConstructorById<StructureFactory>;
export interface StructureFactory extends OwnedStructure {
    /**
     * The amount of game ticks the factory has to wait until the next production is possible.
     */
    cooldown: number;
    /**
     * The factory's level. Can be set by applying the PWR_OPERATE_FACTORY power to a newly built factory. Once set, the level cannot be changed.
     */
    level: number;
    /**
     * A Store object that contains cargo of this structure.
     */
    store: Store;
    /**
     * An alias for .store.getCapacity().
     * @deprecated This property is deprecated and will be removed soon.
     */
    storeCapacity: number;
    /**
     * Produces the specified commodity. All ingredients should be available in the factory store.
     * @param resourceType One of the RESOURCE_* constants.
     */
    produce(resourceType: CommodityResourceType): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NOT_ENOUGH_RESOURCES | ERR_INVALID_TARGET | ERR_FULL | ERR_INVALID_ARGS | ERR_TIRED | ERR_RCL_NOT_ENOUGH;
}

/**
 * This NPC structure is a control center of NPC Strongholds, and also rules all invaders in the sector. It spawns NPC defenders of the stronghold, refill towers, repairs structures. While it's alive, it will spawn invaders in all rooms in the same sector. It also contains some valuable resources inside, which you can loot from its ruin if you destroy the structure.
 * 
 * An Invader Core has two lifetime stages: deploy stage and active stage. When it appears in a random room in the sector, it has ticksToDeploy property, public ramparts around it, and doesn't perform any actions. While in this stage it's invulnerable to attacks (has EFFECT_INVULNERABILITY enabled). When the ticksToDeploy timer is over, it spawns structures around it and starts spawning creeps, becomes vulnerable, and receives EFFECT_COLLAPSE_TIMER which will remove the stronghold when this timer is over.
 * 
 * An active Invader Core spawns level-0 Invader Cores in neighbor rooms. These lesser Invader Cores are spawned near the room controller and don't perform any activity except reserving/attacking the controller. One Invader Core can spawn up to 10 lesser Cores during its lifetime.
 */
export declare const StructureInvaderCore: _ConstructorById<StructureInvaderCore>;
export interface StructureInvaderCore extends OwnedStructure {
    /**
     * The level of the stronghold. The amount and quality of the loot depends on the level.
     */
    level: number;
    /**
     * Shows the timer for a ot yet deployed stronghold, undefined otherwise.
     */
    ticksToDeploy: number;
}

/**
 * Non-player structure. Spawns NPC Source Keepers that guards energy sources and minerals in some rooms. This structure cannot be destroyed.
 */
export declare const StructureKeeperLair: _ConstructorById<StructureKeeperLair>;
export interface StructureKeeperLair extends OwnedStructure {
    /**
     * Time to spawning of the next Source Keeper.
     */
    ticksToSpawn: number;
}

/**
 * Produces mineral compounds from base minerals and boosts creeps.
 */
export declare const StructureLab: _ConstructorById<StructureLab>;
export interface StructureLab extends OwnedStructure {
    /**
     * The amount of game ticks the lab has to wait until the next reaction is possible.
     */
    cooldown: number;
    /**
     * An alias for .store[RESOURCE_ENERGY].
     * @deprecated This property is deprecated and will be removed soon.
     */
    energy: number;
    /**
     * An alias for .store.getCapacity(RESOURCE_ENERGY).
     * @deprecated This property is deprecated and will be removed soon.
     */
    energyCapacity: number;
    /**
     * An alias for lab.store[lab.mineralType].
     * @deprecated This property is deprecated and will be removed soon.
     */
    mineralAmount: number;
    /**
     * The type of minerals containing in the lab. Labs can contain only one mineral type at the same time.
     */
    mineralType: MineralResourceType | BoostResourceType;
    /**
     * An alias for lab.store.getCapacity(lab.mineralType || yourMineral).
     * @deprecated This property is deprecated and will be removed soon.
     */
    mineralCapacity: number;
    /**
     * A Store object that contains cargo of this structure.
     */
    store: Store;
    /**
     * Boosts creep body part using the containing mineral compound. The creep has to be at adjacent square to the lab. Boosting one body part consumes 30 mineral units and 20 energy units.
     * @param creep The target creep.
     * @param bodyPartsCount The number of body parts of the corresponding type to be boosted. Body parts are always counted left-to-right for TOUGH, and right-to-left for other types. If undefined, all the eligible body parts are boosted.
     */
    boostCreep(creep: Creep, bodyPartsCount?: number): OK | ERR_NOT_OWNER | ERR_NOT_FOUND | ERR_NOT_ENOUGH_RESOURCES | ERR_INVALID_TARGET | ERR_NOT_IN_RANGE | ERR_RCL_NOT_ENOUGH;
    /**
     * Produce mineral compounds using reagents from two another labs. Each lab has to be within 2 squares range. The same input labs can be used by many output labs
     * @param lab1 The first source lab.
     * @param lab2 The second source lab.
     */
    runReaction(lab1: StructureLab, lab2: StructureLab): OK | ERR_NOT_OWNER | ERR_NOT_ENOUGH_RESOURCES | ERR_INVALID_TARGET | ERR_FULL | ERR_NOT_IN_RANGE | ERR_INVALID_ARGS | ERR_TIRED | ERR_RCL_NOT_ENOUGH;
    /**
     * Immediately remove boosts from the creep and drop 50% of the mineral compounds used to boost it onto the ground regardless of the creep's remaining time to live. The creep has to be at adjacent square to the lab. Unboosting requires cooldown time equal to the total sum of the reactions needed to produce all the compounds applied to the creep.
     * @param creep The target creep.
     */
    unboostCreep(creep: Creep): OK | ERR_NOT_OWNER | ERR_NOT_FOUND | ERR_INVALID_TARGET | ERR_NOT_IN_RANGE | ERR_TIRED | ERR_RCL_NOT_ENOUGH;
}


/**
 * Remotely transfers energy to another Link in the same room.
 */
export declare const StructureLink: _ConstructorById<StructureLink>;
export interface StructureLink extends OwnedStructure {
    /**
     * The amount of game ticks the link has to wait until the next transfer is possible.
     */
    cooldown: number;
    /**
     * An alias for .store[RESOURCE_ENERGY].
     * @deprecated This property is deprecated and will be removed soon.
     */
    energy: number;
    /**
     * An alias for .store.getCapacity(RESOURCE_ENERGY).
     * @deprecated This property is deprecated and will be removed soon.
     */
    energyCapacity: number;
    /**
     * A Store object that contains cargo of this structure.
     */
    store: Store;
    /**
     * Remotely transfer energy to another link at any location in the same room.
     * @param target The target object.
     * @param amount The amount of energy to be transferred. If omitted, all the available energy is used.
     */
    transferEnergy(target: StructureLink, amount?: number): OK | ERR_NOT_OWNER | ERR_NOT_ENOUGH_RESOURCES | ERR_INVALID_TARGET | ERR_FULL | ERR_NOT_IN_RANGE | ERR_INVALID_ARGS | ERR_TIRED | ERR_RCL_NOT_ENOUGH;
}

/**
 * Launches a nuke to another room dealing huge damage to the landing area. Each launch has a cooldown and requires energy and ghodium resources. Launching creates a Nuke object at the target room position which is visible to any player until it is landed. Incoming nuke cannot be moved or cancelled. Nukes cannot be launched from or to novice rooms. Resources placed into a StructureNuker cannot be withdrawn.
 */
export declare const StructureNuker: _ConstructorById<StructureNuker>;
export interface StructureNuker extends OwnedStructure {
    /**
     * An alias for .store[RESOURCE_ENERGY].
     * @deprecated This property is deprecated and will be removed soon.
     */
    energy: number;
    /**
     * An alias for .store.getCapacity(RESOURCE_ENERGY).
     * @deprecated This property is deprecated and will be removed soon.
     */
    energyCapacity: number;
    /**
     * An alias for .store[RESOURCE_GHODIUM].
     * @deprecated This property is deprecated and will be removed soon.
     */
    ghodium: number;
    /**
     * An alias for .store.getCapacity(RESOURCE_GHODIUM).
     * @deprecated This property is deprecated and will be removed soon.
     */
    ghodiumCapacity: number;
    /**
     * The amount of game ticks until the next launch is possible.
     */
    cooldown: number;
    /**
     * A Store object that contains cargo of this structure.
     */
    store: Store;
    /**
     * Launch a nuke to the specified position.
     * @param pos The target room position.
     */
    launchNuke(pos: RoomPosition): OK | ERR_NOT_OWNER | ERR_NOT_ENOUGH_RESOURCES | ERR_INVALID_TARGET | ERR_NOT_IN_RANGE | ERR_TIRED | ERR_RCL_NOT_ENOUGH;
}

/**
 * Provides visibility into a distant room from your script.
 */
export declare const StructureObserver: _ConstructorById<StructureObserver>;
export interface StructureObserver extends OwnedStructure {
    /**
     * Provide visibility into a distant room from your script. The target room object will be available on the next tick.
     * @param roomName The name of the target room.
     */
    observeRoom(roomName: string): OK | ERR_NOT_OWNER | ERR_NOT_IN_RANGE | ERR_INVALID_ARGS | ERR_RCL_NOT_ENOUGH;
}

/**
 * Non-player structure. Contains power resource which can be obtained by destroying the structure. Hits the attacker creep back on each attack.
 */
export declare const StructurePowerBank: _ConstructorById<StructurePowerBank>;
export interface StructurePowerBank extends OwnedStructure {
    /**
     * The amount of power containing.
     */
    power: number;
    /**
     * The amount of game ticks when this structure will disappear.
     */
    ticksToDecay: number;
}

/**
 * Processes power into your account, and spawns power creeps with special unique powers.
 */
export declare const StructurePowerSpawn: _ConstructorById<StructurePowerSpawn>;
export interface StructurePowerSpawn extends OwnedStructure {
    /**
     * An alias for .store[RESOURCE_ENERGY].
     * @deprecated This property is deprecated and will be removed soon.
     */
    energy: number;
    /**
     * An alias for .store.getCapacity(RESOURCE_ENERGY).
     * @deprecated This property is deprecated and will be removed soon.
     */
    energyCapacity: number;
    /**
     * An alias for .store[RESOURCE_POWER].
     * @deprecated This property is deprecated and will be removed soon.
     */
    power: number;
    /**
     * An alias for .store.getCapacity(RESOURCE_POWER).
     * @deprecated This property is deprecated and will be removed soon.
     */
    powerCapacity: number;
    /**
     * A Store object that contains cargo of this structure.
     */
    store: Store;
    /**
     * Register power resource units into your account. Registered power allows to develop power creeps skills.
     */
    processPower(): OK | ERR_NOT_OWNER | ERR_NOT_ENOUGH_RESOURCES | ERR_RCL_NOT_ENOUGH;
}

/**
 * A non-player structure.
 * Instantly teleports your creeps to a distant room acting as a room exit tile.
 * Portals appear randomly in the central room of each sector.
 */
export declare const StructurePortal: _ConstructorById<StructurePortal>;
export interface StructurePortal extends Structure {
    /**
     * If this is an inter-room portal, then this property contains a RoomPosition object leading to the point in the destination room.
     * 
     * If this is an inter-shard portal, then this property contains an object with shard and room string properties. Exact coordinates are undetermined, the creep will appear at any free spot in the destination room.
     */
    destination: RoomPosition | InterShardPosition;
    /**
     * The amount of game ticks when the portal disappears, or undefined when the portal is stable.
     */
    ticksToDecay: number | undefined;
}

interface InterShardPosition {
    shard: string;
    room: string;
}

/**
 * Blocks movement of hostile creeps, and defends your creeps and structures on
 * the same tile. Can be used as a controllable gate.
 */
export declare const StructureRampart: _ConstructorById<StructureRampart>;
export interface StructureRampart extends OwnedStructure {
    /**
     * If false (default), only your creeps can step on the same square. If true, any hostile creeps can pass through.
     */
    isPublic: boolean;
    /**
     * The amount of game ticks when this rampart will lose some hit points.
     */
    ticksToDecay: number;
    /**
     * Make this rampart public to allow other players' creeps to pass through.
     * @param isPublic Whether this rampart should be public or non-public
     */
    setPublic(isPublic: boolean): OK | ERR_NOT_OWNER;
}

/**
 * Decreases movement cost to 1. Using roads allows creating creeps with less `MOVE` body parts.
 */
export declare const StructureRoad: _ConstructorById<StructureRoad>;
export interface StructureRoad extends Structure {
    /**
     * The amount of game ticks when this road will lose some hit points.
     */
    ticksToDecay: number;
}

/**
 * Spawn is your colony center. This structure can create, renew, and recycle creeps. All your spawns are accessible through Game.spawns hash list. Spawns auto-regenerate a little amount of energy each tick, so that you can easily recover even if all your creeps died.
 */
export declare const StructureSpawn: _ConstructorById<StructureSpawn> & {
    Spawning: _ConstructorById<Spawning>;
};
export interface StructureSpawn extends OwnedStructure {
    /**
     * An alias for .store[RESOURCE_ENERGY].
     * @deprecated This property is deprecated and will be removed soon.
     */
    energy: number;
    /**
     * An alias for .store.getCapacity(RESOURCE_ENERGY).
     * @deprecated This property is deprecated and will be removed soon.
     */
    energyCapacity: number;
    /**
     * A shorthand to Memory.spawns[spawn.name]. You can use it for quick access the spawn’s specific memory data object.
     */
    memory: any;
    /**
     * Spawn’s name. You choose the name upon creating a new spawn, and it cannot be changed later. This name is a hash key to access the spawn via the Game.spawns object.
     */
    name: string;
    /**
     * If the spawn is in process of spawning a new creep, this object will contain a StructureSpawn.Spawning object, or null otherwise.
     */
    spawning: Spawning | null;
    /**
     * A Store object that contains cargo of this structure.
     */
    store: Store;
    /**
     * Check if a creep can be created.
     * @deprecated This method is deprecated and will be removed soon. Please use StructureSpawn.spawnCreep with dryRun flag instead.
     * @param body An array describing the new creep’s body. Should contain 1 to 50 elements with one of these constants: WORK, MOVE, CARRY, ATTACK, RANGED_ATTACK, HEAL, TOUGH, CLAIM
     * @param name The name of a new creep. It should be unique creep name, i.e. the Game.creeps object should not contain another creep with the same name (hash key). If not defined, a random name will be generated.
     */
    canCreateCreep(body: BodyPart[], name?: string): OK | ERR_NOT_OWNER | ERR_NAME_EXISTS | ERR_BUSY | ERR_NOT_ENOUGH_ENERGY | ERR_INVALID_ARGS | ERR_RCL_NOT_ENOUGH;
    /**
     * Start the creep spawning process. The required energy amount can be withdrawn from all spawns and extensions in the room.
     * @deprecated This method is deprecated and will be removed soon. Please use StructureSpawn.spawnCreep instead.
     * @param body An array describing the new creep’s body. Should contain 1 to 50 elements with one of these constants: WORK, MOVE, CARRY, ATTACK, RANGED_ATTACK, HEAL, TOUGH, CLAIM
     * @param name The name of a new creep. It should be unique creep name, i.e. the Game.creeps object should not contain another creep with the same name (hash key). If not defined, a random name will be generated.
     * @param memory The memory of a new creep. If provided, it will be immediately stored into Memory.creeps[name].
     */
    createCreep(body: BodyPart[], name?: string, memory?: any): string | ERR_NOT_OWNER | ERR_NAME_EXISTS | ERR_BUSY | ERR_NOT_ENOUGH_ENERGY | ERR_INVALID_ARGS | ERR_RCL_NOT_ENOUGH;
    /**
     * Start the creep spawning process. The required energy amount can be withdrawn from all spawns and extensions in the room.
     * @param body An array describing the new creep’s body. Should contain 1 to 50 elements with one of these constants: WORK, MOVE, CARRY, ATTACK, RANGED_ATTACK, HEAL, TOUGH, CLAIM
     * @param name The name of a new creep. It should be unique creep name, i.e. the Game.creeps object should not contain another creep with the same name (hash key). If not defined, a random name will be generated.
     * @param opts An object with additional options for the spawning process.
     */
    spawnCreep(body: BodyPart[], name: string, opts?: SpawnOpts): OK | ERR_NOT_OWNER | ERR_NAME_EXISTS | ERR_BUSY | ERR_NOT_ENOUGH_ENERGY | ERR_INVALID_ARGS | ERR_RCL_NOT_ENOUGH;
    /**
     * Kill the creep and drop up to 100% of resources spent on its spawning and boosting depending on remaining life time. The target should be at adjacent square. Energy return is limited to 125 units per body part.
     * @param target The target creep object.
     */
    recycleCreep(target: Creep): OK | ERR_NOT_OWNER | ERR_INVALID_TARGET | ERR_NOT_IN_RANGE | ERR_RCL_NOT_ENOUGH;
    /**
     * Increase the remaining time to live of the target creep. The target should be at adjacent square. The spawn should not be busy with the spawning process. Each execution increases the creep's timer by amount of ticks according to this formula:
     * 
     * floor(600/body_size)
     * 
     * Energy required for each execution is determined using this formula:
     * 
     * ceil(creep_cost/2.5/body_size)
     * 
     * Renewing a creep removes all of its boosts.
     * @param target The target creep object.
     */
    renewCreep(target: Creep): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NOT_ENOUGH_ENERGY | ERR_INVALID_TARGET | ERR_FULL | ERR_NOT_IN_RANGE | ERR_RCL_NOT_ENOUGH;
}

/**
 * Details of the creep being spawned currently that can be addressed by the StructureSpawn.spawning property.
 */
interface Spawning {
    /**
     * An array with the spawn directions, see StructureSpawn.Spawning.setDirections.
     */
    directions?: Direction[];
    /**
     * The name of a new creep.
     */
    name?: string;
    /**
     * Time needed in total to complete the spawning.
     */
    needTime: number;
    /**
     * Remaining time to go.
     */
    remainingTime: number;
    /**
     * A link to the spawn.
     */
    spawn?: StructureSpawn;
    /**
     * Cancel spawning immediately. Energy spent on spawning is not returned.
     */
    cancel(): OK | ERR_NOT_OWNER;
    /**
     * Set desired directions where the creep should move when spawned.
     * @param directions An array with direction constants.
     */
    setDirections(directions: Direction[]): OK | ERR_NOT_OWNER | ERR_INVALID_ARGS;
}

/**
 * An object with additional options for the spawning process.
 */
interface SpawnOpts {
    /**
     * Memory of the new creep. If provided, it will be immediately stored into Memory.creeps[name].
     */
    memory?: any;
    /**
     * Array of spawns/extensions from which to draw energy for the spawning process. Structures will be used according to the array order.
     */
    energyStructures?: Array<StructureExtension | StructureSpawn>;
    /**
     * If dryRun is true, the operation will only check if it is possible to create a creep.
     */
    dryRun?: boolean;
    /**
     * Set desired directions where the creep should move when spawned.
     */
    directions: Direction[];
}

/**
 * A structure that can store huge amount of resource units. Only one structure per room is allowed that can be addressed by Room.storage property.
 */
export declare const StructureStorage: _ConstructorById<StructureStorage>;
export interface StructureStorage extends OwnedStructure {
    /**
     * A Store object that contains cargo of this structure.
     */
    store: Store;
    /**
     * An alias for .store.getCapacity().
     * @deprecated This property is deprecated and will be removed soon.
     */
    storeCapacity: number;
}

/**
 * Sends any resources to a Terminal in another room. The destination Terminal can belong to any player. Each transaction requires additional energy (regardless of the transfer resource type) that can be calculated using Game.market.calcTransactionCost method. For example, sending 1000 mineral units from W0N0 to W10N5 will consume 742 energy units. You can track your incoming and outgoing transactions using the Game.market object. Only one Terminal per room is allowed that can be addressed by Room.terminal property.
 * 
 * Terminals are used in the Market system.
 */
export declare const StructureTerminal: _ConstructorById<StructureTerminal>;
export interface StructureTerminal extends OwnedStructure {
    /**
     * The remaining amount of ticks while this terminal cannot be used to make StructureTerminal.send or Game.market.deal calls.
     */
    cooldown: number;
    /**
     * A Store object that contains cargo of this structure.
     */
    store: Store;
    /**
     * An alias for .store.getCapacity().
     * @deprecated This property is deprecated and will be removed soon.
     */
    storeCapacity: number;
    /**
     * Sends resource to a Terminal in another room with the specified name.
     * @param resourceType One of the RESOURCE_* constants.
     * @param amount The amount of resources to be sent. The minimum amount is 100.
     * @param destination The name of the target room. You don't have to gain visibility in this room.
     * @param description The description of the transaction. It is visible to the recipient. The maximum length is 100 characters.
     */
    send(resourceType: ResourceType, amount: number, destination: string, description?: string): OK | ERR_NOT_OWNER | ERR_NOT_ENOUGH_RESOURCES | ERR_INVALID_ARGS | ERR_TIRED;
}

/**
 * Remotely attacks or heals creeps, or repairs structures. Can be targeted to any object in the room. However, its effectiveness linearly depends on the distance. Each action consumes energy.
 */
export declare const StructureTower: _ConstructorById<StructureTower>;
export interface StructureTower extends OwnedStructure {
    /**
     * An alias for .store[RESOURCE_ENERGY].
     * @deprecated This property is deprecated and will be removed soon.
     */
    energy: number;
    /**
     * An alias for .store.getCapacity(RESOURCE_ENERGY).
     * @deprecated This property is deprecated and will be removed soon.
     */
    energyCapacity: number;
    /**
     * A Store object that contains cargo of this structure.
     */
    store: Store;
    /**
     * Remotely attack any creep, power creep or structure in the room.
     * @param target The target creep.
     */
    attack(target: Creep | PowerCreep | Structure): OK | ERR_NOT_OWNER | ERR_NOT_ENOUGH_RESOURCES | ERR_INVALID_TARGET | ERR_RCL_NOT_ENOUGH;
    /**
     * Remotely heal any creep or power creep in the room.
     * @param target The target creep.
     */
    heal(target: Creep | PowerCreep): OK | ERR_NOT_OWNER | ERR_NOT_ENOUGH_ENERGY | ERR_INVALID_TARGET | ERR_RCL_NOT_ENOUGH;
    /**
     * Remotely repair any structure in the room.
     * @param target The target structure.
     */
    repair(target: Structure): OK | ERR_NOT_OWNER | ERR_NOT_ENOUGH_ENERGY | ERR_INVALID_TARGET | ERR_RCL_NOT_ENOUGH;
}

/**
 * Blocks movement of all creeps. Players can build destructible walls in controlled rooms. Some rooms also contain indestructible walls separating novice and respawn areas from the rest of the world or dividing novice / respawn areas into smaller sections. Indestructible walls have no hits property.
 */
export declare const StructureWall: _ConstructorById<StructureWall>;
export interface StructureWall extends Structure {
}
