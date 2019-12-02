export type OK = 0;
export type ERR_NOT_OWNER = -1;
export type ERR_NO_PATH = -2;
export type ERR_NAME_EXISTS = -3;
export type ERR_BUSY = -4;
export type ERR_NOT_FOUND = -5;
export type ERR_NOT_ENOUGH_ENERGY = -6;
export type ERR_NOT_ENOUGH_RESOURCES = -6;
export type ERR_INVALID_TARGET = -7;
export type ERR_FULL = -8;
export type ERR_NOT_IN_RANGE = -9;
export type ERR_INVALID_ARGS = -10;
export type ERR_TIRED = -11;
export type ERR_NO_BODYPART = -12;
export type ERR_NOT_ENOUGH_EXTENSIONS = -6;
export type ERR_RCL_NOT_ENOUGH = -14;
export type ERR_GCL_NOT_ENOUGH = -15;

export type FIND_EXIT_TOP = 1;
export type FIND_EXIT_RIGHT = 3;
export type FIND_EXIT_BOTTOM = 5;
export type FIND_EXIT_LEFT = 7;
export type FIND_EXIT = 10;
export type FIND_CREEPS = 101;
export type FIND_MY_CREEPS = 102;
export type FIND_HOSTILE_CREEPS = 103;
export type FIND_SOURCES_ACTIVE = 104;
export type FIND_SOURCES = 105;
export type FIND_DROPPED_RESOURCES = 106;
export type FIND_STRUCTURES = 107;
export type FIND_MY_STRUCTURES = 108;
export type FIND_HOSTILE_STRUCTURES = 109;
export type FIND_FLAGS = 110;
export type FIND_CONSTRUCTION_SITES = 111;
export type FIND_MY_SPAWNS = 112;
export type FIND_HOSTILE_SPAWNS = 113;
export type FIND_MY_CONSTRUCTION_SITES = 114;
export type FIND_HOSTILE_CONSTRUCTION_SITES = 115;
export type FIND_MINERALS = 116;
export type FIND_NUKES = 117;
export type FIND_TOMBSTONES = 118;
export type FIND_POWER_CREEPS = 119;
export type FIND_MY_POWER_CREEPS = 120;
export type FIND_HOSTILE_POWER_CREEPS = 121;
export type FIND_DEPOSITS = 122;
export type FIND_RUINS = 123;
export type FindExitType = 1 | 3 | 5 | 7;

export type LOOK_CREEPS = "creep";
export type LOOK_ENERGY = "energy";
export type LOOK_RESOURCES = "resource";
export type LOOK_SOURCES = "source";
export type LOOK_MINERALS = "mineral";
export type LOOK_DEPOSITS = "deposit";
export type LOOK_STRUCTURES = "structure";
export type LOOK_FLAGS = "flag";
export type LOOK_CONSTRUCTION_SITES = "constructionSite";
export type LOOK_NUKES = "nuke";
export type LOOK_TERRAIN = "terrain";
export type LOOK_TOMBSTONES = "tombstone";
export type LOOK_POWER_CREEPS = "powerCreep";
export type LOOK_RUINS = "ruin";

export type TERRAIN_MASK_PLAIN = 0;
export type TERRAIN_MASK_WALL = 1;
export type TERRAIN_MASK_SWAMP = 2;
export type TerrainType = "plain" | "wall" | "swamp";

export type ORDER_SELL = "sell";
export type ORDER_BUY = "buy";

export type SUBSCRIPTION_TOKEN = "token";

export type EVENT_ATTACK = 1;
export type EVENT_OBJECT_DESTROYED = 2;
export type EVENT_ATTACK_CONTROLLER = 3;
export type EVENT_BUILD = 4;
export type EVENT_HARVEST = 5;
export type EVENT_HEAL = 6;
export type EVENT_REPAIR = 7;
export type EVENT_RESERVE_CONTROLLER = 8;
export type EVENT_UPGRADE_CONTROLLER = 9;
export type EVENT_EXIT = 10;
export type EVENT_POWER = 11;
export type EVENT_TRANSFER = 12;

export type EVENT_ATTACK_TYPE_MELEE = 1;
export type EVENT_ATTACK_TYPE_RANGED = 2;
export type EVENT_ATTACK_TYPE_RANGED_MASS = 3;
export type EVENT_ATTACK_TYPE_DISMANTLE = 4;
export type EVENT_ATTACK_TYPE_HIT_BACK = 5;
export type EVENT_ATTACK_TYPE_NUKE = 6;
export type EventAttackType = EVENT_ATTACK_TYPE_MELEE | EVENT_ATTACK_TYPE_RANGED | EVENT_ATTACK_TYPE_RANGED_MASS | EVENT_ATTACK_TYPE_DISMANTLE | EVENT_ATTACK_TYPE_HIT_BACK | EVENT_ATTACK_TYPE_NUKE;

export type EVENT_HEAL_TYPE_MELEE = 1;
export type EVENT_HEAL_TYPE_RANGED = 2;
export type EventHealType = EVENT_HEAL_TYPE_MELEE | EVENT_HEAL_TYPE_RANGED;

export declare type ColorType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export declare type Direction = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export declare type BodyPart = "move" | "work" | "carry" | "attack" | "ranged_attack" | "tough" | "heal" | "claim";

export declare type StructureType = "spawn" | "extension" | "road" | "constructedWall" | "rampart" | "keeperLair" | "portal" | "controller" | "link" | "storage" | "tower" | "observer" | "powerBank" | "powerSpawn" | "extractor" | "lab" | "terminal" | "container" | "nuker" | "factory" | "invaderCore";
export declare type RoomObjectType = "creep" | "powerCreep" | "source" | "mineral" | "deposit" | "flag" | "nuke" | "constructionSite" | "resource" | StructureType;

export declare type PowerClassType = keyof typeof POWER_CLASS;
export declare type PowerType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19;

export declare type DensityType = 1 | 2 | 3 | 4;

export declare type ResourceType = "energy" | "power" | "H" | "O" | "U" | "L" | "K" | "Z" | "X" | "G" | "silicon" | "metal" | "biomass" | "mist" | "OH" | "ZK" | "UL" | "UH" | "UO" | "KH" | "KO" | "LH" | "LO" | "ZH" | "ZO" | "GH" | "GO" | "UH2O" | "UHO2" | "KH2O" | "KHO2" | "LH2O" | "LHO2" | "ZH2O" | "ZHO2" | "GH2O" | "GHO2" | "XUH2O" | "XUHO2" | "XKH2O" | "XKHO2" | "XLH2O" | "XLHO2" | "XZH2O" | "XZHO2" | "XGH2O" | "XGHO2" | "ops" | "utrium_bar" | "lemergium_bar" | "zynthium_bar" | "keanium_bar" | "ghodium_melt" | "oxidant" | "reductant" | "purifier" | "battery" | "composite" | "crystal" | "liquid" | "wire" | "switch" | "transistor" | "microchip" | "circuit" | "device" | "cell" | "phlegm" | "tissue" | "muscle" | "organoid" | "organism" | "alloy" | "tube" | "fixtures" | "frame" | "hydraulics" | "machine" | "condensate" | "concentrate" | "extract" | "spirit" | "emanation" | "essence";
export declare type MineralResourceType = "H" | "O" | "U" | "L" | "K" | "Z" | "X" | "G";
export declare type BoostResourceType = "UH" | "UO" | "KH" | "KO" | "LH" | "LO" | "ZH" | "ZO" | "GH" | "GO" | "UH2O" | "UHO2" | "KH2O" | "KHO2" | "LH2O" | "LHO2" | "ZH2O" | "ZHO2" | "GH2O" | "GHO2" | "XUH2O" | "XUHO2" | "XKH2O" | "XKHO2" | "XLH2O" | "XLHO2" | "XZH2O" | "XZHO2" | "XGH2O" | "XGHO2";
export declare type DepositResourceType = "silicon" | "metal" | "biomass" | "mist";
export declare type CommodityResourceType = "ops" | "utrium_bar" | "lemergium_bar" | "zynthium_bar" | "keanium_bar" | "ghodium_melt" | "oxidant" | "reductant" | "purifier" | "battery" | "composite" | "crystal" | "liquid" | "wire" | "switch" | "transistor" | "microchip" | "circuit" | "device" | "cell" | "phlegm" | "tissue" | "muscle" | "organoid" | "organism" | "alloy" | "tube" | "fixtures" | "frame" | "hydraulics" | "machine" | "condensate" | "concentrate" | "extract" | "spirit" | "emanation" | "essence";

export declare type EffectType = 1001 | 1002;
