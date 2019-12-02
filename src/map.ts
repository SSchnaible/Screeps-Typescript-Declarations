import { FindExitType, ERR_NO_PATH, ERR_INVALID_ARGS, TerrainType } from "./constants-types";
import { RoomPosition } from "./room-position";
import { Room, Terrain } from "./room";

/**
 * A global object representing world map. Use it to navigate between rooms. The object is accessible via Game.map property.
 */
export interface GameMap {
  /**
   * List all exits available from the room with the given name.
   * @param roomName The room name.
   * @returns The exits information or null if the room not found.
   */
  describeExits(roomName: string): { "1"?: string; "3"?: string; "5"?: string; "7"?: string } | null;
  /**
   * Find the exit direction from the given room en route to another room.
   * @param fromRoom Start room name or room object.
   * @param toRoom Finish room name or room object.
   * @param opts (optional) An object with the pathfinding options.
   * @return The room direction constant, one of the following:
   * FIND_EXIT_TOP, FIND_EXIT_RIGHT, FIND_EXIT_BOTTOM, FIND_EXIT_LEFT
   * Or one of the following Result codes:
   * ERR_NO_PATH, ERR_INVALID_ARGS
   */
  findExit(fromRoom: string | Room, toRoom: string | Room, opts?: RouteOptions): FindExitType | ERR_NO_PATH | ERR_INVALID_ARGS;
  /**
   * Find route from the given room to another room.
   * @param fromRoom Start room name or room object.
   * @param toRoom Finish room name or room object.
   * @param opts (optional) An object with the pathfinding options.
   * @returns the route array or ERR_NO_PATH code
   */
  findRoute(fromRoom: string | Room, toRoom: string | Room, opts?: RouteOptions): FindRouteResult | ERR_NO_PATH;
  /**
   * Get the linear distance (in rooms) between two rooms. You can use this function to estimate the energy cost of
   * sending resources through terminals, or using observers and nukes.
   * @param roomName1 The name of the first room.
   * @param roomName2 The name of the second room.
   * @param continuous Whether to treat the world map continuous on borders. Set to true if you
   *                   want to calculate the trade or terminal send cost. Default is false.
   */
  getRoomLinearDistance(roomName1: string, roomName2: string, continuous?: boolean): number;
  /**
   * Get a Room.Terrain object which provides fast access to static terrain data. This method works for any room in the world even if you have no access to it.
   * @param roomName The room name.
   * @returns Returns new Room.Terrain object. 
   */
  getRoomTerrain(roomName: string): Terrain;
  /**
   * Get terrain type at the specified room position. This method works for any room in the world even if you have no access to it.
   * @deprecated This method is deprecated and will be removed soon. Please use a faster method Game.map.getRoomTerrain instead.
   * @param x X position in the room.
   * @param y Y position in the room.
   * @param roomName The room name.
   * @returns One of the following string values: plain, swamp, wall
   */
  getTerrainAt(x: number, y: number, roomName: string): TerrainType;
  /**
   * Get terrain type at the specified room position. This method works for any room in the world even if you have no access to it.
   * @deprecated This method is deprecated and will be removed soon. Please use a faster method Game.map.getRoomTerrain instead.
   * @param pos The position object.
   * @returns One of the following string values: plain, swamp, wall
   */
  getTerrainAt(pos: RoomPosition): TerrainType;
  /**
   * @returns Returns the world size as a number of rooms between world corners. For example, for a world with rooms from W50N50 to E50S50 this method will return 102.
   */
  getWorldSize(): number;
  /**
   * Check if the room is available to move into.
   * @param roomName The room name.
   * @returns A boolean value.
   */
  isRoomAvailable(roomName: string): boolean;
}

/**
 * The options that can be accepted by `findRoute()` and friends.
 */
interface RouteOptions {
  routeCallback: (roomName: string, fromRoomName: string) => number;
}

type FindRouteResult = { exit: FindExitType, room: string }[];
