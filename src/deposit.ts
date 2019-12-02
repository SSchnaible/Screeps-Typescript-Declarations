import { RoomObject } from "./room-object";
import { DepositResourceType } from "./constants-types";
import { ObjectId, _ConstructorById } from "./helpers";

/**
 * A rare resource deposit needed for producing commodities. Can be harvested by creeps with a WORK body part. Each harvest operation triggers a cooldown period, which becomes longer and longer over time.
 * Cooldown = 0.001 * totalHarvested ^ 1.2
 * Decay = 50,000 ticks after appearing or last harvest operation
 */
export declare const Deposit: _ConstructorById<Deposit>;
export interface Deposit extends RoomObject, ObjectId {
    /**
     * The amount of game ticks until the next harvest action is possible.
     */
    cooldown: number;
    /**
     * The deposit type.
     */
    depositType: DepositResourceType;
    /**
     * The cooldown of the last harvest operation on this deposit.
     */
    lastCooldown: number;
    /**
     * The amount of game ticks when this deposit will disappear.
     */
    ticksToDecay: number;
}