import { RoomObject } from "./room-object";
import { ColorType, OK, ERR_INVALID_ARGS, ERR_INVALID_TARGET } from "./constants-types";
import { RoomPosition } from "./room-position";

/**
 * A flag. Flags can be used to mark particular spots in a room. Flags are visible to their owners only.
 */
export declare const Flag: {
    new(name: string, color: number, secondaryColor: number, roomName: string, x: number, y: number): Flag;
};
export interface Flag extends RoomObject {
    /**
     * Flag primary color. One of the COLOR_* constants.
     */
    color: ColorType;
    /**
     * A shorthand to Memory.flags[flag.name]. You can use it for quick access the flag's specific memory data object.
     */
    memory: any;
    /**
     * Flag’s name. You can choose the name while creating a new flag, and it cannot be changed later. This name is a hash key to access the spawn via the Game.flags object.
     */
    name: string;
    /**
     * Flag secondary color. One of the COLOR_* constants.
     */
    secondaryColor: ColorType;
    /**
     * Remove the flag.
     * @returns Result Code: OK
     */
    remove(): OK;
    /**
     * Set new color of the flag.
     * @param color Primary color of the flag. One of the COLOR_* constants.
     * @param secondaryColor Secondary color of the flag. One of the COLOR_* constants.
     * @returns Result Code: OK, ERR_INVALID_ARGS
     */
    setColor(color: ColorType, secondaryColor?: ColorType): OK | ERR_INVALID_ARGS;
    /**
     * Set new position of the flag.
     * @param x The X position in the room.
     * @param y The Y position in the room.
     * @param pos Can be a RoomPosition object or any object containing RoomPosition.
     * @returns Result Code: OK, ERR_INVALID_TARGET
     */
    setPosition(x: number, y: number): OK | ERR_INVALID_TARGET;
    setPosition(pos: RoomPosition | { pos: RoomPosition }): OK | ERR_INVALID_TARGET;
}
