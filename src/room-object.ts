import { RoomPosition } from "./room-position";
import { Effect } from "./effect";
import { Room } from "./room";

/**
 * Any object with a position in a room. Almost all game objects prototypes
 * are derived from RoomObject.
 */
export declare const RoomObject: {
    new(x: number, y: number, roomName: string): RoomObject;
};
export interface RoomObject {
    /**
     * Applied effects
     */
    effects: Effect[];
    /**
     * An object representing the position of this object in the room.
     */
    pos: RoomPosition;
    /**
     * The link to the Room object. May be undefined in case if an object is a
     * flag or a construction site and is placed in a room that is not visible
     * to you.
     */
    room: Room | undefined;
}
