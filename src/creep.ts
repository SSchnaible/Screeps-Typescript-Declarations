import { RoomObject } from "./room-object";
import { PathStep, _ConstructorById, OwnedObject, ObjectId, FindPathOpts } from "./helpers";
import { Store } from "./store";
import { OK, ERR_NOT_OWNER, ERR_BUSY, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART, ERR_TIRED, ERR_NOT_ENOUGH_RESOURCES, ERR_NOT_FOUND, ERR_FULL, ERR_GCL_NOT_ENOUGH, ResourceType, ERR_INVALID_ARGS, BodyPart, Direction, ERR_NO_PATH, PowerClassType, ERR_NAME_EXISTS, PowerType, ERR_RCL_NOT_ENOUGH } from "./constants-types";
import { ConstructionSite } from "./construction-site";
import { RoomPosition } from "./room-position";
import { Structure, StructureController, StructurePowerBank, StructurePowerSpawn } from "./structure";
import { Mineral } from "./mineral";
import { Deposit } from "./deposit";
import { PolyStyle } from "./room-visual";
import { Resource } from "./resource";
import { Source } from "./source";

interface CreepCommon extends RoomObject, OwnedObject, ObjectId {
    /**
     * An alias for Creep.store.
     * @deprecated This property is deprecated and will be removed soon.
     */
    carry: Store;
    /**
     * An alias for Creep.store.getCapacity().
     * @deprecated This property is deprecated and will be removed soon.
     */
    carryCapacity: number;
    /**
     * The current amount of hit points of the creep.
     */
    hits: number;
    /**
     * The maximum amount of hit points of the creep.
     */
    hitsMax: number;
    /**
     * A shorthand to Memory.creeps[creep.name]. You can use it for quick access the creep’s specific memory data object.
     */
    memory: any;
    /**
     * (Power) Creep’s name. You can choose the name while creating a new creep, and it cannot be changed later. This name is a hash key to access the creep via the Game.creeps/Game.powerCreeps object.
     */
    name: string;
    /**
     * A Store object that contains cargo of this creep.
     */
    store: Store;
    /**
     * The text message that the creep was saying at the last tick.
     */
    saying: string;
    /**
     * Cancel the order given during the current game tick.
     * @param methodName The name of a creep's method to be cancelled.
     * @returns Result Code: OK, ERR_NOT_FOUND
     */
    cancelOrder(methodName: string): OK | ERR_NOT_FOUND;
    /**
     * Drop this resource on the ground.
     * @param resourceType One of the RESOURCE_* constants.
     * @param amount The amount of resource units to be dropped. If omitted, all the available carried amount is used.
     */
    drop(resourceType: ResourceType, amount?: number): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NOT_ENOUGH_RESOURCES | ERR_INVALID_ARGS;
    /**
     * Move the creep one square in the specified direction. Requires the MOVE body part, or another creep nearby pulling the creep. In case if you call move on a creep nearby, the ERR_TIRED and the ERR_NO_BODYPART checks will be bypassed; otherwise, the ERR_NOT_IN_RANGE check will be bypassed.
     * @param direction
     */
    move(direction: Direction): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NOT_IN_RANGE | ERR_INVALID_ARGS | ERR_TIRED | ERR_NO_BODYPART;
    /**
     * Move the creep using the specified predefined path. Needs the MOVE body part.
     * @param path A path value as returned from Room.findPath, RoomPosition.findPathTo, or PathFinder.search methods. Both array form and serialized string form are accepted.
     */
    moveByPath(path: PathStep[] | RoomPosition[] | string): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NOT_FOUND | ERR_INVALID_ARGS | ERR_TIRED | ERR_NO_BODYPART;
    /**
     * Find the optimal path to the target within the same room and move to it. A shorthand to consequent calls of pos.findPathTo() and move() methods. If the target is in another room, then the corresponding exit will be used as a target. Requires the MOVE body part.
     * @param x X position of the target in the room.
     * @param y Y position of the target in the room.
     * @param target Can be a RoomPosition object or any object containing RoomPosition. The position doesn't have to be in the same room with the creep.
     * @param opts An object containing pathfinding options flags (see Room.findPath for more info) or one of the following: reusePath, serializeMemory, noPathFinding
     */
    moveTo(x: number, y: number, opts?: MoveToOpts): OK | ERR_NOT_OWNER | ERR_NO_PATH | ERR_BUSY | ERR_NOT_FOUND | ERR_INVALID_TARGET | ERR_TIRED | ERR_NO_BODYPART;
    moveTo(target: RoomPosition | { pos: RoomPosition }, opts?: MoveToOpts): OK | ERR_NOT_OWNER | ERR_NO_PATH | ERR_BUSY | ERR_NOT_FOUND | ERR_INVALID_TARGET | ERR_TIRED | ERR_NO_BODYPART;
    /**
     * Toggle auto notification when the creep is under attack. The notification will be sent to your account email. Turned on by default.
     * @param enabled Whether to enable notification or disable.
     */
    notifyWhenAttacked(enabled: boolean): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_INVALID_ARGS;
    /**
     * Pick up an item (a dropped piece of energy). Needs the CARRY body part. The target has to be at adjacent square to the creep or at the same square.
     * @param target The target object to be picked up.
     */
    pickup(target: Resource): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_INVALID_TARGET | ERR_FULL | ERR_NOT_IN_RANGE;
    /**
     * Display a visual speech balloon above the creep with the specified message. The message will disappear after a few seconds. Useful for debugging purposes. Only the creep's owner can see the speech message.
     * @param message The message to be displayed. Maximum length is 10 characters.
     * @param set to 'true' to allow other players to see this message. Default is 'false'.
     */
    say(message: string, toPublic?: boolean): OK | ERR_NOT_OWNER | ERR_BUSY;
    /**
     * Kill the creep immediately.
     */
    suicide(): OK | ERR_NOT_OWNER | ERR_BUSY;
    /**
     * Transfer resource from the creep to another object. The target has to be at adjacent square to the creep.
     * @param target The target object.
     * @param resourceType One of the RESOURCE_* constants
     * @param amount The amount of resources to be transferred. If omitted, all the available carried amount is used.
     */
    transfer(target: Creep | PowerCreep | Structure, resourceType: ResourceType, amount?: number): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NOT_ENOUGH_RESOURCES | ERR_INVALID_TARGET | ERR_FULL | ERR_NOT_IN_RANGE | ERR_INVALID_ARGS;
    /**
     * Withdraw resources from a structure or tombstone. The target has to be at adjacent square to the creep. Multiple creeps can withdraw from the same object in the same tick. Your creeps can withdraw resources from hostile structures/tombstones as well, in case if there is no hostile rampart on top of it.
     * This method should not be used to transfer resources between creeps. To transfer between creeps, use the transfer method on the original creep.
     * @param target The target object.
     * @param resourceType The target One of the RESOURCE_* constants..
     * @param amount The amount of resources to be transferred. If omitted, all the available amount is used.
     */
    withdraw(target: Structure, resourceType: ResourceType, amount?: number): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NOT_ENOUGH_RESOURCES | ERR_INVALID_TARGET | ERR_FULL | ERR_NOT_IN_RANGE | ERR_INVALID_ARGS;
}

interface MoveToOpts extends FindPathOpts {
    /**
     * This option enables reusing the path found along multiple game ticks. It allows to save CPU time, but can result in a slightly
     * slower creep reaction behavior. The path is stored into the creep's memory to the _move property. The reusePath value defines
     * the amount of ticks which the path should be reused for. The default value is 5. Increase the amount to save more CPU, decrease
     * to make the movement more consistent. Set to 0 if you want to disable path reusing.
     */
    reusePath?: number;
    /**
     * If reusePath is enabled and this option is set to true, the path will be stored in memory in the short serialized form using
     * Room.serializePath. The default value is true.
     */
    serializeMemory?: boolean;
    /**
     * If this option is set to true, moveTo method will return ERR_NOT_FOUND if there is no memorized path to reuse. This can
     * significantly save CPU time in some cases. The default value is false.
     */
    noPathFinding?: boolean;
    /**
     * Draw a line along the creep’s path using RoomVisual.poly. You can provide either an empty object or custom style parameters.
     */
    visualizePathStyle?: PolyStyle;
}

/**
 * Creeps are your units. Creeps can move, harvest energy, construct structures, attack another creeps, and perform other actions. Each creep consists of up to 50 body parts with the following possible types:
 */
export declare const Creep: _ConstructorById<Creep>;
export interface Creep extends CreepCommon {
    /**
     * An array describing the creep’s body. Each element contains the following properties:
     * type: string
     * body part constant
     * hits: number
     * The remaining amount of hit points of this body part.
     */
    body: BodyPartDefinition[];
    /**
     * The movement fatigue indicator. If it is greater than zero, the creep cannot move.
     */
    fatigue: number;
    /**
     * Whether this creep is still being spawned.
     */
    spawning: boolean;
    /**
     * The remaining amount of game ticks after which the creep will die.
     */
    ticksToLive: number;
    /**
     * Attack another creep or structure in a short-ranged attack. Needs the ATTACK body part. If the target is inside a rampart, then the rampart is attacked instead. The target has to be at adjacent square to the creep. If the target is a creep with ATTACK body parts and is not inside a rampart, it will automatically hit back at the attacker.
     * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART
     */
    attack(target: Creep | PowerCreep | Structure): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_INVALID_TARGET | ERR_NOT_IN_RANGE | ERR_NO_BODYPART;
    /**
     * Decreases the controller's downgrade or reservation timer for 1 tick per every 5 CLAIM body parts (so the creep must have at least 5xCLAIM). The controller under attack cannot be upgraded for the next 1,000 ticks. The target has to be at adjacent square to the creep.
     * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART
     */
    attackController(target: StructureController): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_INVALID_TARGET | ERR_NOT_IN_RANGE | ERR_TIRED | ERR_NO_BODYPART;
    /**
     * Build a structure at the target construction site using carried energy. Needs WORK and CARRY body parts. The target has to be within 3 squares range of the creep.
     * @param target The target object to be attacked.
     * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART, ERR_RCL_NOT_ENOUGH
     */
    build(target: ConstructionSite): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NOT_ENOUGH_RESOURCES | ERR_INVALID_TARGET | ERR_NOT_IN_RANGE | ERR_NO_BODYPART;
    /**
     * Requires the CLAIM body part. If applied to a neutral controller, claims it under your control. If applied to a hostile controller, decreases its downgrade or reservation timer depending on the CLAIM body parts count. The target has to be at adjacent square to the creep.
     * @param target The target controller object.
     * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_INVALID_TARGET, ERR_FULL, ERR_NOT_IN_RANGE, ERR_NO_BODYPART, ERR_GCL_NOT_ENOUGH
     */
    claimController(target: StructureController): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_INVALID_TARGET | ERR_FULL | ERR_NOT_IN_RANGE | ERR_NO_BODYPART | ERR_GCL_NOT_ENOUGH;
    /**
     * Dismantles any (even hostile) structure returning 50% of the energy spent on its repair. Requires the WORK body part. If the creep has an empty CARRY body part, the energy is put into it; otherwise it is dropped on the ground. The target has to be at adjacent square to the creep.
     * @param target The target structure.
     */
    dismantle(target: Structure): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_INVALID_TARGET | ERR_NOT_IN_RANGE | ERR_NO_BODYPART;
    /**
     * Add one more available safe mode activation to a room controller. The creep has to be at adjacent square to the target room controller and have 1000 ghodium resource.
     * @param target The target room controller.
     * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE
     */
    generateSafeMode(target: StructureController): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NOT_ENOUGH_RESOURCES | ERR_INVALID_TARGET | ERR_NOT_IN_RANGE;
    /**
     * Get the quantity of live body parts of the given type. Fully damaged parts do not count.
     * @param type A body part type, one of the following body part constants: MOVE, WORK, CARRY, ATTACK, RANGED_ATTACK, HEAL, TOUGH, CLAIM
     * @returns A number representing the quantity of body parts.
     */
    getActiveBodyparts(type: BodyPart): number;
    /**
     * Harvest energy from the source. Needs the WORK body part. If the creep has an empty CARRY body part, the harvested energy is put into it; otherwise it is dropped on the ground. The target has to be at an adjacent square to the creep.
     * @param target The source object to be harvested.
     */
    harvest(target: Source | Mineral | Deposit): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NOT_FOUND | ERR_NOT_ENOUGH_RESOURCES | ERR_INVALID_TARGET | ERR_NOT_IN_RANGE | ERR_TIRED | ERR_NO_BODYPART;
    /**
     * Heal self or another creep. It will restore the target creep’s damaged body parts function and increase the hits counter. Needs the HEAL body part. The target has to be at adjacent square to the creep.
     * @param target The target creep object.
     */
    heal(target: Creep | PowerCreep): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_INVALID_TARGET | ERR_NOT_IN_RANGE | ERR_NO_BODYPART;
    /**
     * Help another creep to follow this creep. The fatigue generated for the target's move will be added to the creep instead of the target. Requires the MOVE body part. The target has to be at adjacent square to the creep. The creep must move elsewhere, and the target must move towards the creep.
     * @param target The target creep.
     */
    pull(target: Creep): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_INVALID_TARGET | ERR_NOT_IN_RANGE;
    /**
     * A ranged attack against another creep or structure. Needs the RANGED_ATTACK body part. If the target is inside a rampart, the rampart is attacked instead. The target has to be within 3 squares range of the creep.
     * @param target The target object to be attacked.
     */
    rangedAttack(target: Creep | PowerCreep | Structure): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_INVALID_TARGET | ERR_NOT_IN_RANGE | ERR_NO_BODYPART;
    /**
     * Heal another creep at a distance. It will restore the target creep’s damaged body parts function and increase the hits counter. Needs the HEAL body part. The target has to be within 3 squares range of the creep.
     * @param target The target creep object.
     */
    rangedHeal(target: Creep | PowerCreep): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_INVALID_TARGET | ERR_NOT_IN_RANGE | ERR_NO_BODYPART;
    /**
     * A ranged attack against all hostile creeps or structures within 3 squares range. Needs the RANGED_ATTACK body part. The attack power depends on the range to each target. Friendly units are not affected.
     */
    rangedMassAttack(): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NO_BODYPART;
    /**
     * Repair a damaged structure using carried energy. Needs the WORK and CARRY body parts. The target has to be within 3 squares range of the creep.
     * @param target he target structure to be repaired.
     */
    repair(target: Structure): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NOT_ENOUGH_RESOURCES | ERR_INVALID_TARGET | ERR_NOT_IN_RANGE | ERR_NO_BODYPART;
    /**
     * Temporarily block a neutral controller from claiming by other players. Each tick, this command increases the counter of the period during which the controller is unavailable by 1 tick per each CLAIM body part. The maximum reservation period to maintain is 5,000 ticks. The target has to be at adjacent square to the creep....
     * @param target The target controller object to be reserved.
     * @return Result code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART
     */
    reserveController(target: StructureController): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_INVALID_TARGET | ERR_NOT_IN_RANGE | ERR_NO_BODYPART;
    /**
     * Sign a controller with a random text visible to all players. This text will appear in the room UI, in the world map, and can be accessed via the API.
     * You can sign unowned and hostile controllers. The target has to be at adjacent square to the creep. Pass an empty string to remove the sign.
     * @param target The target controller object to be signed.
     * @param text The sign text. The maximum text length is 100 characters.
     * @returns Result Code: OK, ERR_BUSY, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE
     */
    signController(target: StructureController, text: string): OK | ERR_BUSY | ERR_INVALID_TARGET | ERR_NOT_IN_RANGE;
    /**
     * Upgrade your controller to the next level using carried energy. Upgrading controllers raises your Global Control Level in parallel. Requires WORK and CARRY body parts. The target has to be within 3 squares range of the creep.
     * A fully upgraded level 8 controller can't be upgraded over 15 energy units per tick regardless of creeps abilities. The cumulative effect of all the creeps performing upgradeController in the current tick is taken into account. This limit can be increased by using ghodium mineral boost.
     * Upgrading the controller raises its ticksToDowngrade timer by 100. The timer must be full in order for controller to be leveled up.
     * @param target The target controller object to be upgraded.
     */
    upgradeController(target: StructureController): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NOT_ENOUGH_RESOURCES | ERR_INVALID_TARGET | ERR_NOT_IN_RANGE | ERR_NO_BODYPART;
}

interface BodyPartDefinition {
    /**
     * If the body part is boosted, this property specifies the mineral type which is used for boosting. One of the RESOURCE_* constants.
     */
    boost: ResourceType | undefined;
    /**
     * One of the body part types constants.
     */
    type: BodyPart;
    /**
     * The remaining amount of hit points of this body part.
     */
    hits: number;
}

/**
 * Power Creeps are immortal "heroes" that are tied to your account and can be respawned in any PowerSpawn after death. You can upgrade their abilities ("powers") up to your account Global Power Level (see Game.gpl).
 * 
 * Time to live: 5,000
 * 
 * Hits: 1,000 per level
 * 
 * Capacity: 100 per level 
 */
export declare const PowerCreep: _ConstructorById<PowerCreep> & {
    /**
     * A static method to create new Power Creep instance in your account. It will be added in an unspawned state, use spawn method to spawn it in the world.
     * You need one free Power Level in your account to perform this action.
     * @param name The name of the new power creep.
     * @param className The class of the new power creep, one of the POWER_CLASS constants.
     */
    create(name: string, className: PowerClassType): OK | ERR_NAME_EXISTS | ERR_NOT_ENOUGH_RESOURCES;
};
export interface PowerCreep extends CreepCommon {
    /**
     * The power creep's class, one of the POWER_CLASS constants.
     */
    className: PowerClassType;
    /**
     * A timestamp when this creep is marked to be permanently deleted from the account, or undefined otherwise.
     */
    deleteTime: number | undefined;
    /**
     * Power creep’s name. You can choose the name while creating a new power creep, and it cannot be changed later. This name is a hash key to access the creep via the Game.powerCreeps object.
     */
    name: string;
    /**
     * A Store object that contains cargo of this creep.
     */
    store: Store;
    /**
     * Available powers, an object with power ID as a key.
     */
    powers: { [powerType in PowerType]: Power };
    /**
     * The text message that the creep was saying at the last tick.
     */
    saying: string;
    /**
     * The name of the shard where the power creep is spawned, or undefined.
     */
    shard: string | undefined;
    /**
     * The timestamp when spawning or deleting this creep will become available. Undefined if the power creep is spawned in the world.
     */
    spawnCooldownTime: number | undefined;
    /**
     * The remaining amount of game ticks after which the creep will die.
     */
    ticksToLive: number | undefined;
    /**
     * Delete the power creep permanently from your account. It should NOT be spawned in the world. The creep is not deleted immediately, but a 24-hours delete timer is started instead (see deleteTime). You can cancel deletion by calling delete(true).
     * @param cancel Set this to true to cancel previously scheduled deletion.
     */
    delete(cancel: boolean): OK | ERR_NOT_OWNER | ERR_BUSY;
    /**
     * Enable powers usage in this room. The room controller should be at adjacent tile.
     * @param controller The room controller.
     */
    enableRoom(controller: StructureController): OK | ERR_NOT_OWNER | ERR_INVALID_TARGET | ERR_NOT_IN_RANGE;
    /**
     * Rename the power creep. It must not be spawned in the world.
     * @param name The new name of the power creep.
     */
    rename(name: string): OK | ERR_NOT_OWNER | ERR_NAME_EXISTS | ERR_BUSY;
    /**
     * Instantly restore time to live to the maximum using a Power Spawn or a Power Bank nearby. It has to be at adjacent tile.
     * @param target The target structure.
     */
    renew(target: StructurePowerBank | StructurePowerSpawn): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_INVALID_TARGET | ERR_NOT_IN_RANGE;
    /**
     * Spawn this power creep in the specified Power Spawn.
     * @param powerSpawn Your Power Spawn structure.
     */
    spawn(powerSpawn: StructurePowerSpawn): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_INVALID_TARGET | ERR_TIRED | ERR_RCL_NOT_ENOUGH;
    /**
     * Upgrade the creep, adding a new power ability to it or increasing level of the existing power. You need one free Power Level in your account to perform this action.
     * @param power The power ability to upgrade, one of the PWR_* constants.
     */
    upgrade(power: PowerType): OK | ERR_NOT_OWNER | ERR_NOT_ENOUGH_RESOURCES | ERR_FULL | ERR_INVALID_ARGS;
    /**
     * Apply one the creep's powers on the specified target. You can only use powers in rooms either without a controller, or with a power-enabled controller. Only one power can be used during the same tick, each usePower call will override the previous one. If the target has the same effect of a lower or equal level, it is overridden. If the existing effect level is higher, an error is returned.
     * @param power The power ability to use, one of the PWR_* constants.
     * @param target A target object in the room.
     */
    usePower(power: PowerType, target?: RoomObject): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NOT_ENOUGH_RESOURCES | ERR_INVALID_TARGET | ERR_FULL | ERR_NOT_IN_RANGE | ERR_INVALID_ARGS | ERR_TIRED | ERR_NO_BODYPART;
}

interface Power {
    /**
     * Current level of the power.
     */
    level: number;
    /**
     * Cooldown ticks remaining, or undefined if the power creep is not spawned in the world.
     */
    cooldown?: number;
}