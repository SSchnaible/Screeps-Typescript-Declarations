/**
 * InterShardMemory object provides an interface for communicating between shards. Your script is executed separatedly on each shard, and their Memory objects are isolated from each other. In order to pass messages and data between shards, you need to use InterShardMemory instead.
 * 
 * Every shard can have its own 100 KB of data in string format that can be accessed by all other shards. A shard can write only to its own data, other shards' data is read-only.
 * 
 * This data has nothing to do with Memory contents, it's a separate data container.
 */
export declare const InterShardMemory: InterShardMemory;
export interface InterShardMemory {
    /**
     * @returns Returns the string contents of the current shard's data.
     */
    getLocal(): string | null;
    /**
     * Replace the current shard's data with the new value.
     * @param string New data value in string format.
     */
    setLocal(value: string): void;
    /**
     * @returns Returns the string contents of another shard's data.
     */
    getRemote(shard: string): string | null;
}