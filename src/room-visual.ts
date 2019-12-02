import { RoomPosition } from "./room-position";

/**
 * Room visuals provide a way to show various visual debug info in game rooms. You can use the RoomVisual object to draw simple shapes that are visible only to you. Every existing Room object already contains the visual property, but you also can create new RoomVisual objects for any room (even without visibility) using the constructor.
 * 
 * Room visuals are not stored in the database, their only purpose is to display something in your browser. All drawings will persist for one tick and will disappear if not updated. All RoomVisual API calls have no added CPU cost (their cost is natural and mostly related to simple JSON.serialize calls). However, there is a usage limit: you cannot post more than 500 KB of serialized data per one room (see getSize method).
 * 
 * All draw coordinates are measured in game coordinates and centered to tile centers, i.e. (10,10) will point to the center of the creep at x:10; y:10 position. Fractional coordinates are allowed.
 */
export declare const RoomVisual: {
    /**
     * You can directly create new RoomVisual object in any room, even if it's invisible to your script.
     * @param roomName The room name. If undefined, visuals will be posted to all rooms simultaneously.
     */
    new(roomName?: string): RoomVisual;
};
export interface RoomVisual {
    /** 
     * The name of the room.
     */
    roomName: string;
    /**
     * Draw a line.
     * @param x1 The start X coordinate.
     * @param y1 The start Y coordinate.
     * @param x2 The finish X coordinate.
     * @param y2 The finish Y coordinate.
     * @param pos1 The start position object.
     * @param pos2 The finish position object.
     * @param style The (optional) style.
     * @returns The RoomVisual object itself, so that you can chain calls.
     */
    line(x1: number, y1: number, x2: number, y2: number, style?: LineStyle): RoomVisual;
    line(pos1: RoomPosition, pos2: RoomPosition, style?: LineStyle): RoomVisual;
    /**
     * Draw a circle.
     * @param x The X coordinate of the center.
     * @param y The Y coordinate of the center.
     * @param pos The position object of the center.
     * @param style The (optional) style.
     * @returns The RoomVisual object itself, so that you can chain calls.
     */
    circle(x: number, y: number, style?: CircleStyle): RoomVisual;
    circle(pos: RoomPosition, style?: CircleStyle): RoomVisual;
    /**
     * Draw a rectangle.
     * @param x The X coordinate of the top-left corner.
     * @param y The Y coordinate of the top-left corner.
     * @param topLeftPos The position object of the top-left corner.
     * @param width The width of the rectangle.
     * @param height The height of the rectangle.
     * @param style The (optional) style.
     * @returns The RoomVisual object itself, so that you can chain calls.
     */
    rect(x: number, y: number, width: number, height: number, style?: PolyStyle): RoomVisual;
    rect(topLeftPos: RoomPosition, width: number, height: number, style?: PolyStyle): RoomVisual;
    /**
     * Draw a polygon.
     * @param points An array of points. Every item should be either an array with 2 numbers (i.e. [10,15]), or a RoomPosition object.
     * @param style The (optional) style.
     * @returns The RoomVisual object itself, so that you can chain calls.
     */
    poly(points: [number, number][], style?: PolyStyle): RoomVisual;
    /**
     * Draw a text label. You can use any valid Unicode characters, including emoji.
     * @param text The text message.
     * @param x The X coordinate of the label baseline center point.
     * @param y The Y coordinate of the label baseline center point.
     * @param pos The position object of the label baseline.
     * @param style The (optional) text style.
     * @returns The RoomVisual object itself, so that you can chain calls.
     */
    text(text: string, x: number, y: number, style?: TextStyle): RoomVisual;
    text(text: string, pos: RoomPosition, style?: TextStyle): RoomVisual;
    /**
     * Remove all visuals from the room.
     * @returns The RoomVisual object itself, so that you can chain calls.
     */
    clear(): RoomVisual;
    /**
     * Get the stored size of all visuals added in the room in the current tick.
     * It must not exceed 512,000 (500 KB).
     * @returns The size of the visuals in bytes.
     */
    getSize(): number;
}

interface LineStyle {
    /**
     * Line width, default is 0.1.
     */
    width?: number;
    /**
     * Line color in any web format, default is #ffffff (white).
     */
    color?: string;
    /**
     * Opacity value, default is 0.5.
     */
    opacity?: number;
    /**
     * Either undefined (solid line), dashed, or dotted. Default is undefined.
     */
    lineStyle?: "dashed" | "dotted";
}

export interface PolyStyle {
    /**
     * Fill color in any web format, default is #ffffff (white).
     */
    fill?: string;
    /**
     * Opacity value, default is 0.5.
     */
    opacity?: number;
    /**
     * Stroke color in any web format, default is undefined (no stroke).
     */
    stroke?: string;
    /**
     * Stroke line width, default is 0.1.
     */
    strokeWidth?: number;
    /**
     * Either undefined (solid line), dashed, or dotted. Default is undefined.
     */
    lineStyle?: "dashed" | "dotted";
}

interface CircleStyle extends PolyStyle {
    /**
     * Circle radius, default is 0.15.
     */
    radius?: number;
}

interface TextStyle {
    /**
     * Font color in any web format, default is #ffffff (white).
     */
    color?: string;
    /**
     * Either a number or a string in one of the following forms:
     *  - 0.7 - relative size in game coordinates
     *  - 20px - absolute size in pixels
     *  - 0.7 serif
     *  - bold italic 1.5 Times New Roman
     */
    font?: number | string;
    /**
     * Stroke color in any web format, default is undefined (no stroke).
     */
    stroke?: string;
    /**
     * Stroke width, default is 0.15.
     */
    strokeWidth?: number;
    /**
     * Background color in any web format, default is undefined (no background). When background is enabled, text vertical align is set to middle (default is baseline).
     */
    backgroundColor?: string;
    /**
     * Background rectangle padding, default is 0.3.
     */
    backgroundPadding?: number;
    /**
     * Text align, either center, left, or right. Default is center.
     */
    align?: "center" | "left" | "right";
    /**
     * Opacity value, default is 1.0.
     */
    opacity?: number;
}
