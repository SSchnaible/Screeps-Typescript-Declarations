import { RoomObject } from "./room-object";
import { ObjectId, _ConstructorById } from "./helpers";

/**
 * A nuke landing position. This object cannot be removed or modified. You can find incoming nukes in the room using the FIND_NUKES constant.
 */
export declare const Nuke: _ConstructorById<Nuke>;
export interface Nuke extends RoomObject, ObjectId {
    /**
     * The name of the room where this nuke has been launched from.
     */
    launchRoomName: string;
    /**
     * The remaining landing time.
     */
    timeToLand: number;
}
