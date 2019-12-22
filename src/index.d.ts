/////////////////////////
// Constants
/////////////////////////

declare const OK: 0;
declare const ERR_NOT_OWNER: -1;
declare const ERR_NO_PATH: -2;
declare const ERR_NAME_EXISTS: -3;
declare const ERR_BUSY: -4;
declare const ERR_NOT_FOUND: -5;
declare const ERR_NOT_ENOUGH_ENERGY: -6;
declare const ERR_NOT_ENOUGH_RESOURCES: -6;
declare const ERR_INVALID_TARGET: -7;
declare const ERR_FULL: -8;
declare const ERR_NOT_IN_RANGE: -9;
declare const ERR_INVALID_ARGS: -10;
declare const ERR_TIRED: -11;
declare const ERR_NO_BODYPART: -12;
declare const ERR_NOT_ENOUGH_EXTENSIONS: -6;
declare const ERR_RCL_NOT_ENOUGH: -14;
declare const ERR_GCL_NOT_ENOUGH: -15;
declare const FIND_EXIT_TOP: 1;
declare const FIND_EXIT_RIGHT: 3;
declare const FIND_EXIT_BOTTOM: 5;
declare const FIND_EXIT_LEFT: 7;
declare const FIND_EXIT: 10;
declare const FIND_CREEPS: 101;
declare const FIND_MY_CREEPS: 102;
declare const FIND_HOSTILE_CREEPS: 103;
declare const FIND_SOURCES_ACTIVE: 104;
declare const FIND_SOURCES: 105;
declare const FIND_DROPPED_RESOURCES: 106;
declare const FIND_STRUCTURES: 107;
declare const FIND_MY_STRUCTURES: 108;
declare const FIND_HOSTILE_STRUCTURES: 109;
declare const FIND_FLAGS: 110;
declare const FIND_CONSTRUCTION_SITES: 111;
declare const FIND_MY_SPAWNS: 112;
declare const FIND_HOSTILE_SPAWNS: 113;
declare const FIND_MY_CONSTRUCTION_SITES: 114;
declare const FIND_HOSTILE_CONSTRUCTION_SITES: 115;
declare const FIND_MINERALS: 116;
declare const FIND_NUKES: 117;
declare const FIND_TOMBSTONES: 118;
declare const FIND_POWER_CREEPS: 119;
declare const FIND_MY_POWER_CREEPS: 120;
declare const FIND_HOSTILE_POWER_CREEPS: 121;
declare const FIND_DEPOSITS: 122;
declare const FIND_RUINS: 123;
declare const TOP: 1;
declare const TOP_RIGHT: 2;
declare const RIGHT: 3;
declare const BOTTOM_RIGHT: 4;
declare const BOTTOM: 5;
declare const BOTTOM_LEFT: 6;
declare const LEFT: 7;
declare const TOP_LEFT: 8;
declare const COLOR_RED: 1;
declare const COLOR_PURPLE: 2;
declare const COLOR_BLUE: 3;
declare const COLOR_CYAN: 4;
declare const COLOR_GREEN: 5;
declare const COLOR_YELLOW: 6;
declare const COLOR_ORANGE: 7;
declare const COLOR_BROWN: 8;
declare const COLOR_GREY: 9;
declare const COLOR_WHITE: 10;
declare const LOOK_CREEPS: 'creep';
declare const LOOK_ENERGY: 'energy';
declare const LOOK_RESOURCES: 'resource';
declare const LOOK_SOURCES: 'source';
declare const LOOK_MINERALS: 'mineral';
declare const LOOK_DEPOSITS: 'deposit';
declare const LOOK_STRUCTURES: 'structure';
declare const LOOK_FLAGS: 'flag';
declare const LOOK_CONSTRUCTION_SITES: 'constructionSite';
declare const LOOK_NUKES: 'nuke';
declare const LOOK_TERRAIN: 'terrain';
declare const LOOK_TOMBSTONES: 'tombstone';
declare const LOOK_POWER_CREEPS: 'powerCreep';
declare const LOOK_RUINS: 'ruin';
declare const OBSTACLE_OBJECT_TYPES: ['spawn', 'creep', 'powerCreep', 'source', 'mineral', 'deposit', 'controller', 'constructedWall', 'extension', 'link', 'storage', 'tower', 'observer', 'powerSpawn', 'powerBank', 'lab', 'terminal', 'nuker', 'factory', 'invaderCore'];
declare const MOVE: 'move';
declare const WORK: 'work';
declare const CARRY: 'carry';
declare const ATTACK: 'attack';
declare const RANGED_ATTACK: 'ranged_attack';
declare const TOUGH: 'tough';
declare const HEAL: 'heal';
declare const CLAIM: 'claim';
declare const BODYPART_COST: { 'move': 50, 'work': 100, 'attack': 80, 'carry': 50, 'heal': 250, 'ranged_attack': 150, 'tough': 10, 'claim': 600 };
declare const WORLD_WIDTH: 202;
declare const WORLD_HEIGHT: 202;
declare const CREEP_LIFE_TIME: 1500;
declare const CREEP_CLAIM_LIFE_TIME: 600;
declare const CREEP_CORPSE_RATE: 0.2;
declare const CREEP_PART_MAX_ENERGY: 125;
declare const CARRY_CAPACITY: 50;
declare const HARVEST_POWER: 2;
declare const HARVEST_MINERAL_POWER: 1;
declare const HARVEST_DEPOSIT_POWER: 1;
declare const REPAIR_POWER: 100;
declare const DISMANTLE_POWER: 50;
declare const BUILD_POWER: 5;
declare const ATTACK_POWER: 30;
declare const UPGRADE_CONTROLLER_POWER: 1;
declare const RANGED_ATTACK_POWER: 10;
declare const HEAL_POWER: 12;
declare const RANGED_HEAL_POWER: 4;
declare const REPAIR_COST: 0.01;
declare const DISMANTLE_COST: 0.005;
declare const RAMPART_DECAY_AMOUNT: 300;
declare const RAMPART_DECAY_TIME: 100;
declare const RAMPART_HITS: 1;
declare const RAMPART_HITS_MAX: { '2': 300000, '3': 1000000, '4': 3000000, '5': 10000000, '6': 30000000, '7': 100000000, '8': 300000000 };
declare const ENERGY_REGEN_TIME: 300;
declare const ENERGY_DECAY: 1000;
declare const SPAWN_HITS: 5000;
declare const SPAWN_ENERGY_START: 300;
declare const SPAWN_ENERGY_CAPACITY: 300;
declare const CREEP_SPAWN_TIME: 3;
declare const SPAWN_RENEW_RATIO: 1.2;
declare const SOURCE_ENERGY_CAPACITY: 3000;
declare const SOURCE_ENERGY_NEUTRAL_CAPACITY: 1500;
declare const SOURCE_ENERGY_KEEPER_CAPACITY: 4000;
declare const WALL_HITS: 1;
declare const WALL_HITS_MAX: 300000000;
declare const EXTENSION_HITS: 1000;
declare const EXTENSION_ENERGY_CAPACITY: { '0': 50, '1': 50, '2': 50, '3': 50, '4': 50, '5': 50, '6': 50, '7': 100, '8': 200 };
declare const ROAD_HITS: 5000;
declare const ROAD_WEAROUT: 1;
declare const ROAD_WEAROUT_POWER_CREEP: 100;
declare const ROAD_DECAY_AMOUNT: 100;
declare const ROAD_DECAY_TIME: 1000;
declare const LINK_HITS: 1000;
declare const LINK_HITS_MAX: 1000;
declare const LINK_CAPACITY: 800;
declare const LINK_COOLDOWN: 1;
declare const LINK_LOSS_RATIO: 0.03;
declare const STORAGE_CAPACITY: 1000000;
declare const STORAGE_HITS: 10000;
declare const STRUCTURE_SPAWN: 'spawn';
declare const STRUCTURE_EXTENSION: 'extension';
declare const STRUCTURE_ROAD: 'road';
declare const STRUCTURE_WALL: 'constructedWall';
declare const STRUCTURE_RAMPART: 'rampart';
declare const STRUCTURE_KEEPER_LAIR: 'keeperLair';
declare const STRUCTURE_PORTAL: 'portal';
declare const STRUCTURE_CONTROLLER: 'controller';
declare const STRUCTURE_LINK: 'link';
declare const STRUCTURE_STORAGE: 'storage';
declare const STRUCTURE_TOWER: 'tower';
declare const STRUCTURE_OBSERVER: 'observer';
declare const STRUCTURE_POWER_BANK: 'powerBank';
declare const STRUCTURE_POWER_SPAWN: 'powerSpawn';
declare const STRUCTURE_EXTRACTOR: 'extractor';
declare const STRUCTURE_LAB: 'lab';
declare const STRUCTURE_TERMINAL: 'terminal';
declare const STRUCTURE_CONTAINER: 'container';
declare const STRUCTURE_NUKER: 'nuker';
declare const STRUCTURE_FACTORY: 'factory';
declare const STRUCTURE_INVADER_CORE: 'invaderCore';
declare const CONSTRUCTION_COST: { 'spawn': 15000, 'extension': 3000, 'road': 300, 'constructedWall': 1, 'rampart': 1, 'link': 5000, 'storage': 30000, 'tower': 5000, 'observer': 8000, 'powerSpawn': 100000, 'extractor': 5000, 'lab': 50000, 'terminal': 100000, 'container': 5000, 'nuker': 100000, 'factory': 100000 };
declare const CONSTRUCTION_COST_ROAD_SWAMP_RATIO: 5;
declare const CONSTRUCTION_COST_ROAD_WALL_RATIO: 150;
declare const CONTROLLER_LEVELS: { '1': 200, '2': 45000, '3': 135000, '4': 405000, '5': 1215000, '6': 3645000, '7': 10935000 };
declare const CONTROLLER_STRUCTURES: { 'spawn': { '0': 0, '1': 1, '2': 1, '3': 1, '4': 1, '5': 1, '6': 1, '7': 2, '8': 3 }, 'extension': { '0': 0, '1': 0, '2': 5, '3': 10, '4': 20, '5': 30, '6': 40, '7': 50, '8': 60 }, 'link': { '1': 0, '2': 0, '3': 0, '4': 0, '5': 2, '6': 3, '7': 4, '8': 6 }, 'road': { '0': 2500, '1': 2500, '2': 2500, '3': 2500, '4': 2500, '5': 2500, '6': 2500, '7': 2500, '8': 2500 }, 'constructedWall': { '1': 0, '2': 2500, '3': 2500, '4': 2500, '5': 2500, '6': 2500, '7': 2500, '8': 2500 }, 'rampart': { '1': 0, '2': 2500, '3': 2500, '4': 2500, '5': 2500, '6': 2500, '7': 2500, '8': 2500 }, 'storage': { '1': 0, '2': 0, '3': 0, '4': 1, '5': 1, '6': 1, '7': 1, '8': 1 }, 'tower': { '1': 0, '2': 0, '3': 1, '4': 1, '5': 2, '6': 2, '7': 3, '8': 6 }, 'observer': { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 1 }, 'powerSpawn': { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 1 }, 'extractor': { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 1, '7': 1, '8': 1 }, 'terminal': { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 1, '7': 1, '8': 1 }, 'lab': { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 3, '7': 6, '8': 10 }, 'container': { '0': 5, '1': 5, '2': 5, '3': 5, '4': 5, '5': 5, '6': 5, '7': 5, '8': 5 }, 'nuker': { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 1 }, 'factory': { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 1, '8': 1 } };
declare const CONTROLLER_DOWNGRADE: { '1': 20000, '2': 10000, '3': 20000, '4': 40000, '5': 80000, '6': 120000, '7': 150000, '8': 200000 };
declare const CONTROLLER_DOWNGRADE_RESTORE: 100;
declare const CONTROLLER_DOWNGRADE_SAFEMODE_THRESHOLD: 5000;
declare const CONTROLLER_CLAIM_DOWNGRADE: 300;
declare const CONTROLLER_RESERVE: 1;
declare const CONTROLLER_RESERVE_MAX: 5000;
declare const CONTROLLER_MAX_UPGRADE_PER_TICK: 15;
declare const CONTROLLER_ATTACK_BLOCKED_UPGRADE: 1000;
declare const CONTROLLER_NUKE_BLOCKED_UPGRADE: 200;
declare const SAFE_MODE_DURATION: 20000;
declare const SAFE_MODE_COOLDOWN: 50000;
declare const SAFE_MODE_COST: 1000;
declare const TOWER_HITS: 3000;
declare const TOWER_CAPACITY: 1000;
declare const TOWER_ENERGY_COST: 10;
declare const TOWER_POWER_ATTACK: 600;
declare const TOWER_POWER_HEAL: 400;
declare const TOWER_POWER_REPAIR: 800;
declare const TOWER_OPTIMAL_RANGE: 5;
declare const TOWER_FALLOFF_RANGE: 20;
declare const TOWER_FALLOFF: 0.75;
declare const OBSERVER_HITS: 500;
declare const OBSERVER_RANGE: 10;
declare const POWER_BANK_HITS: 2000000;
declare const POWER_BANK_CAPACITY_MAX: 5000;
declare const POWER_BANK_CAPACITY_MIN: 500;
declare const POWER_BANK_CAPACITY_CRIT: 0.3;
declare const POWER_BANK_DECAY: 5000;
declare const POWER_BANK_HIT_BACK: 0.5;
declare const POWER_SPAWN_HITS: 5000;
declare const POWER_SPAWN_ENERGY_CAPACITY: 5000;
declare const POWER_SPAWN_POWER_CAPACITY: 100;
declare const POWER_SPAWN_ENERGY_RATIO: 50;
declare const EXTRACTOR_HITS: 500;
declare const EXTRACTOR_COOLDOWN: 5;
declare const LAB_HITS: 500;
declare const LAB_MINERAL_CAPACITY: 3000;
declare const LAB_ENERGY_CAPACITY: 2000;
declare const LAB_BOOST_ENERGY: 20;
declare const LAB_BOOST_MINERAL: 30;
declare const LAB_COOLDOWN: 10;
declare const LAB_REACTION_AMOUNT: 5;
declare const LAB_UNBOOST_ENERGY: 0;
declare const LAB_UNBOOST_MINERAL: 15;
declare const GCL_POW: 2.4;
declare const GCL_MULTIPLY: 1000000;
declare const GCL_NOVICE: 3;
declare const MODE_SIMULATION: null;
declare const MODE_WORLD: null;
declare const TERRAIN_MASK_WALL: 1;
declare const TERRAIN_MASK_SWAMP: 2;
declare const TERRAIN_MASK_LAVA: 4;
declare const MAX_CONSTRUCTION_SITES: 100;
declare const MAX_CREEP_SIZE: 50;
declare const MINERAL_REGEN_TIME: 50000;
declare const MINERAL_MIN_AMOUNT: { 'H': 35000, 'O': 35000, 'L': 35000, 'K': 35000, 'Z': 35000, 'U': 35000, 'X': 35000 };
declare const MINERAL_RANDOM_FACTOR: 2;
declare const MINERAL_DENSITY: { '1': 15000, '2': 35000, '3': 70000, '4': 100000 };
declare const MINERAL_DENSITY_PROBABILITY: { '1': 0.1, '2': 0.5, '3': 0.9, '4': 1 };
declare const MINERAL_DENSITY_CHANGE: 0.05;
declare const DENSITY_LOW: 1;
declare const DENSITY_MODERATE: 2;
declare const DENSITY_HIGH: 3;
declare const DENSITY_ULTRA: 4;
declare const DEPOSIT_EXHAUST_MULTIPLY: 0.001;
declare const DEPOSIT_EXHAUST_POW: 1.2;
declare const DEPOSIT_DECAY_TIME: 50000;
declare const TERMINAL_CAPACITY: 300000;
declare const TERMINAL_HITS: 3000;
declare const TERMINAL_SEND_COST: 0.1;
declare const TERMINAL_MIN_SEND: 100;
declare const TERMINAL_COOLDOWN: 10;
declare const CONTAINER_HITS: 250000;
declare const CONTAINER_CAPACITY: 2000;
declare const CONTAINER_DECAY: 5000;
declare const CONTAINER_DECAY_TIME: 100;
declare const CONTAINER_DECAY_TIME_OWNED: 500;
declare const NUKER_HITS: 1000;
declare const NUKER_COOLDOWN: 100000;
declare const NUKER_ENERGY_CAPACITY: 300000;
declare const NUKER_GHODIUM_CAPACITY: 5000;
declare const NUKE_LAND_TIME: 50000;
declare const NUKE_RANGE: 10;
declare const NUKE_DAMAGE: { '0': 10000000, '2': 5000000 };
declare const FACTORY_HITS: 1000;
declare const FACTORY_CAPACITY: 50000;
declare const TOMBSTONE_DECAY_PER_PART: 5;
declare const TOMBSTONE_DECAY_POWER_CREEP: 500;
declare const RUIN_DECAY: 500;
declare const RUIN_DECAY_STRUCTURES: { 'powerBank': 10 };
declare const PORTAL_DECAY: 30000;
declare const ORDER_SELL: 'sell';
declare const ORDER_BUY: 'buy';
declare const MARKET_FEE: 0.05;
declare const MARKET_MAX_ORDERS: 300;
declare const MARKET_ORDER_LIFE_TIME: 2592000000;
declare const FLAGS_LIMIT: 10000;
declare const SUBSCRIPTION_TOKEN: 'token';
declare const RESOURCE_ENERGY: 'energy';
declare const RESOURCE_POWER: 'power';
declare const RESOURCE_HYDROGEN: 'H';
declare const RESOURCE_OXYGEN: 'O';
declare const RESOURCE_UTRIUM: 'U';
declare const RESOURCE_LEMERGIUM: 'L';
declare const RESOURCE_KEANIUM: 'K';
declare const RESOURCE_ZYNTHIUM: 'Z';
declare const RESOURCE_CATALYST: 'X';
declare const RESOURCE_GHODIUM: 'G';
declare const RESOURCE_SILICON: 'silicon';
declare const RESOURCE_METAL: 'metal';
declare const RESOURCE_BIOMASS: 'biomass';
declare const RESOURCE_MIST: 'mist';
declare const RESOURCE_HYDROXIDE: 'OH';
declare const RESOURCE_ZYNTHIUM_KEANITE: 'ZK';
declare const RESOURCE_UTRIUM_LEMERGITE: 'UL';
declare const RESOURCE_UTRIUM_HYDRIDE: 'UH';
declare const RESOURCE_UTRIUM_OXIDE: 'UO';
declare const RESOURCE_KEANIUM_HYDRIDE: 'KH';
declare const RESOURCE_KEANIUM_OXIDE: 'KO';
declare const RESOURCE_LEMERGIUM_HYDRIDE: 'LH';
declare const RESOURCE_LEMERGIUM_OXIDE: 'LO';
declare const RESOURCE_ZYNTHIUM_HYDRIDE: 'ZH';
declare const RESOURCE_ZYNTHIUM_OXIDE: 'ZO';
declare const RESOURCE_GHODIUM_HYDRIDE: 'GH';
declare const RESOURCE_GHODIUM_OXIDE: 'GO';
declare const RESOURCE_UTRIUM_ACID: 'UH2O';
declare const RESOURCE_UTRIUM_ALKALIDE: 'UHO2';
declare const RESOURCE_KEANIUM_ACID: 'KH2O';
declare const RESOURCE_KEANIUM_ALKALIDE: 'KHO2';
declare const RESOURCE_LEMERGIUM_ACID: 'LH2O';
declare const RESOURCE_LEMERGIUM_ALKALIDE: 'LHO2';
declare const RESOURCE_ZYNTHIUM_ACID: 'ZH2O';
declare const RESOURCE_ZYNTHIUM_ALKALIDE: 'ZHO2';
declare const RESOURCE_GHODIUM_ACID: 'GH2O';
declare const RESOURCE_GHODIUM_ALKALIDE: 'GHO2';
declare const RESOURCE_CATALYZED_UTRIUM_ACID: 'XUH2O';
declare const RESOURCE_CATALYZED_UTRIUM_ALKALIDE: 'XUHO2';
declare const RESOURCE_CATALYZED_KEANIUM_ACID: 'XKH2O';
declare const RESOURCE_CATALYZED_KEANIUM_ALKALIDE: 'XKHO2';
declare const RESOURCE_CATALYZED_LEMERGIUM_ACID: 'XLH2O';
declare const RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE: 'XLHO2';
declare const RESOURCE_CATALYZED_ZYNTHIUM_ACID: 'XZH2O';
declare const RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE: 'XZHO2';
declare const RESOURCE_CATALYZED_GHODIUM_ACID: 'XGH2O';
declare const RESOURCE_CATALYZED_GHODIUM_ALKALIDE: 'XGHO2';
declare const RESOURCE_OPS: 'ops';
declare const RESOURCE_UTRIUM_BAR: 'utrium_bar';
declare const RESOURCE_LEMERGIUM_BAR: 'lemergium_bar';
declare const RESOURCE_ZYNTHIUM_BAR: 'zynthium_bar';
declare const RESOURCE_KEANIUM_BAR: 'keanium_bar';
declare const RESOURCE_GHODIUM_MELT: 'ghodium_melt';
declare const RESOURCE_OXIDANT: 'oxidant';
declare const RESOURCE_REDUCTANT: 'reductant';
declare const RESOURCE_PURIFIER: 'purifier';
declare const RESOURCE_BATTERY: 'battery';
declare const RESOURCE_COMPOSITE: 'composite';
declare const RESOURCE_CRYSTAL: 'crystal';
declare const RESOURCE_LIQUID: 'liquid';
declare const RESOURCE_WIRE: 'wire';
declare const RESOURCE_SWITCH: 'switch';
declare const RESOURCE_TRANSISTOR: 'transistor';
declare const RESOURCE_MICROCHIP: 'microchip';
declare const RESOURCE_CIRCUIT: 'circuit';
declare const RESOURCE_DEVICE: 'device';
declare const RESOURCE_CELL: 'cell';
declare const RESOURCE_PHLEGM: 'phlegm';
declare const RESOURCE_TISSUE: 'tissue';
declare const RESOURCE_MUSCLE: 'muscle';
declare const RESOURCE_ORGANOID: 'organoid';
declare const RESOURCE_ORGANISM: 'organism';
declare const RESOURCE_ALLOY: 'alloy';
declare const RESOURCE_TUBE: 'tube';
declare const RESOURCE_FIXTURES: 'fixtures';
declare const RESOURCE_FRAME: 'frame';
declare const RESOURCE_HYDRAULICS: 'hydraulics';
declare const RESOURCE_MACHINE: 'machine';
declare const RESOURCE_CONDENSATE: 'condensate';
declare const RESOURCE_CONCENTRATE: 'concentrate';
declare const RESOURCE_EXTRACT: 'extract';
declare const RESOURCE_SPIRIT: 'spirit';
declare const RESOURCE_EMANATION: 'emanation';
declare const RESOURCE_ESSENCE: 'essence';
declare const REACTIONS: { 'H': { 'O': 'OH', 'L': 'LH', 'K': 'KH', 'U': 'UH', 'Z': 'ZH', 'G': 'GH' }, 'O': { 'H': 'OH', 'L': 'LO', 'K': 'KO', 'U': 'UO', 'Z': 'ZO', 'G': 'GO' }, 'Z': { 'K': 'ZK', 'H': 'ZH', 'O': 'ZO' }, 'L': { 'U': 'UL', 'H': 'LH', 'O': 'LO' }, 'K': { 'Z': 'ZK', 'H': 'KH', 'O': 'KO' }, 'G': { 'H': 'GH', 'O': 'GO' }, 'U': { 'L': 'UL', 'H': 'UH', 'O': 'UO' }, 'OH': { 'UH': 'UH2O', 'UO': 'UHO2', 'ZH': 'ZH2O', 'ZO': 'ZHO2', 'KH': 'KH2O', 'KO': 'KHO2', 'LH': 'LH2O', 'LO': 'LHO2', 'GH': 'GH2O', 'GO': 'GHO2' }, 'X': { 'UH2O': 'XUH2O', 'UHO2': 'XUHO2', 'LH2O': 'XLH2O', 'LHO2': 'XLHO2', 'KH2O': 'XKH2O', 'KHO2': 'XKHO2', 'ZH2O': 'XZH2O', 'ZHO2': 'XZHO2', 'GH2O': 'XGH2O', 'GHO2': 'XGHO2' }, 'ZK': { 'UL': 'G' }, 'UL': { 'ZK': 'G' }, 'LH': { 'OH': 'LH2O' }, 'ZH': { 'OH': 'ZH2O' }, 'GH': { 'OH': 'GH2O' }, 'KH': { 'OH': 'KH2O' }, 'UH': { 'OH': 'UH2O' }, 'LO': { 'OH': 'LHO2' }, 'ZO': { 'OH': 'ZHO2' }, 'KO': { 'OH': 'KHO2' }, 'UO': { 'OH': 'UHO2' }, 'GO': { 'OH': 'GHO2' }, 'LH2O': { 'X': 'XLH2O' }, 'KH2O': { 'X': 'XKH2O' }, 'ZH2O': { 'X': 'XZH2O' }, 'UH2O': { 'X': 'XUH2O' }, 'GH2O': { 'X': 'XGH2O' }, 'LHO2': { 'X': 'XLHO2' }, 'UHO2': { 'X': 'XUHO2' }, 'KHO2': { 'X': 'XKHO2' }, 'ZHO2': { 'X': 'XZHO2' }, 'GHO2': { 'X': 'XGHO2' } };
declare const BOOSTS: { 'work': { 'UO': { 'harvest': 3 }, 'UHO2': { 'harvest': 5 }, 'XUHO2': { 'harvest': 7 }, 'LH': { 'build': 1.5, 'repair': 1.5 }, 'LH2O': { 'build': 1.8, 'repair': 1.8 }, 'XLH2O': { 'build': 2, 'repair': 2 }, 'ZH': { 'dismantle': 2 }, 'ZH2O': { 'dismantle': 3 }, 'XZH2O': { 'dismantle': 4 }, 'GH': { 'upgradeController': 1.5 }, 'GH2O': { 'upgradeController': 1.8 }, 'XGH2O': { 'upgradeController': 2 } }, 'attack': { 'UH': { 'attack': 2 }, 'UH2O': { 'attack': 3 }, 'XUH2O': { 'attack': 4 } }, 'ranged_attack': { 'KO': { 'rangedAttack': 2, 'rangedMassAttack': 2 }, 'KHO2': { 'rangedAttack': 3, 'rangedMassAttack': 3 }, 'XKHO2': { 'rangedAttack': 4, 'rangedMassAttack': 4 } }, 'heal': { 'LO': { 'heal': 2, 'rangedHeal': 2 }, 'LHO2': { 'heal': 3, 'rangedHeal': 3 }, 'XLHO2': { 'heal': 4, 'rangedHeal': 4 } }, 'carry': { 'KH': { 'capacity': 2 }, 'KH2O': { 'capacity': 3 }, 'XKH2O': { 'capacity': 4 } }, 'move': { 'ZO': { 'fatigue': 2 }, 'ZHO2': { 'fatigue': 3 }, 'XZHO2': { 'fatigue': 4 } }, 'tough': { 'GO': { 'damage': 0.7 }, 'GHO2': { 'damage': 0.5 }, 'XGHO2': { 'damage': 0.3 } } };
declare const REACTION_TIME: { 'OH': 20, 'ZK': 5, 'UL': 5, 'G': 5, 'UH': 10, 'UH2O': 5, 'XUH2O': 60, 'UO': 10, 'UHO2': 5, 'XUHO2': 60, 'KH': 10, 'KH2O': 5, 'XKH2O': 60, 'KO': 10, 'KHO2': 5, 'XKHO2': 60, 'LH': 15, 'LH2O': 10, 'XLH2O': 65, 'LO': 10, 'LHO2': 5, 'XLHO2': 60, 'ZH': 20, 'ZH2O': 40, 'XZH2O': 160, 'ZO': 10, 'ZHO2': 5, 'XZHO2': 60, 'GH': 10, 'GH2O': 15, 'XGH2O': 80, 'GO': 10, 'GHO2': 30, 'XGHO2': 150 };
declare const PORTAL_UNSTABLE: 864000000;
declare const PORTAL_MIN_TIMEOUT: 1036800000;
declare const PORTAL_MAX_TIMEOUT: 1900800000;
declare const POWER_BANK_RESPAWN_TIME: 50000;
declare const INVADERS_ENERGY_GOAL: 100000;
declare const SYSTEM_USERNAME: 'Screeps';
declare const SIGN_NOVICE_AREA: 'A new Novice or Respawn Area is being planned somewhere in this sector. Please make sure all important rooms are reserved.';
declare const SIGN_RESPAWN_AREA: 'A new Novice or Respawn Area is being planned somewhere in this sector. Please make sure all important rooms are reserved.';
declare const SIGN_PLANNED_AREA: 'A new Novice or Respawn Area is being planned somewhere in this sector. Please make sure all important rooms are reserved.';
declare const EVENT_ATTACK: 1;
declare const EVENT_OBJECT_DESTROYED: 2;
declare const EVENT_ATTACK_CONTROLLER: 3;
declare const EVENT_BUILD: 4;
declare const EVENT_HARVEST: 5;
declare const EVENT_HEAL: 6;
declare const EVENT_REPAIR: 7;
declare const EVENT_RESERVE_CONTROLLER: 8;
declare const EVENT_UPGRADE_CONTROLLER: 9;
declare const EVENT_EXIT: 10;
declare const EVENT_POWER: 11;
declare const EVENT_TRANSFER: 12;
declare const EVENT_ATTACK_TYPE_MELEE: 1;
declare const EVENT_ATTACK_TYPE_RANGED: 2;
declare const EVENT_ATTACK_TYPE_RANGED_MASS: 3;
declare const EVENT_ATTACK_TYPE_DISMANTLE: 4;
declare const EVENT_ATTACK_TYPE_HIT_BACK: 5;
declare const EVENT_ATTACK_TYPE_NUKE: 6;
declare const EVENT_HEAL_TYPE_MELEE: 1;
declare const EVENT_HEAL_TYPE_RANGED: 2;
declare const POWER_LEVEL_MULTIPLY: 1000;
declare const POWER_LEVEL_POW: 2;
declare const POWER_CREEP_SPAWN_COOLDOWN: 28800000;
declare const POWER_CREEP_DELETE_COOLDOWN: 86400000;
declare const POWER_CREEP_MAX_LEVEL: 25;
declare const POWER_CREEP_LIFE_TIME: 5000;
declare const POWER_CLASS: { 'OPERATOR': 'operator' };
declare const PWR_GENERATE_OPS: 1;
declare const PWR_OPERATE_SPAWN: 2;
declare const PWR_OPERATE_TOWER: 3;
declare const PWR_OPERATE_STORAGE: 4;
declare const PWR_OPERATE_LAB: 5;
declare const PWR_OPERATE_EXTENSION: 6;
declare const PWR_OPERATE_OBSERVER: 7;
declare const PWR_OPERATE_TERMINAL: 8;
declare const PWR_DISRUPT_SPAWN: 9;
declare const PWR_DISRUPT_TOWER: 10;
declare const PWR_DISRUPT_SOURCE: 11;
declare const PWR_SHIELD: 12;
declare const PWR_REGEN_SOURCE: 13;
declare const PWR_REGEN_MINERAL: 14;
declare const PWR_DISRUPT_TERMINAL: 15;
declare const PWR_OPERATE_POWER: 16;
declare const PWR_FORTIFY: 17;
declare const PWR_OPERATE_CONTROLLER: 18;
declare const PWR_OPERATE_FACTORY: 19;
declare const EFFECT_INVULNERABILITY: 1001;
declare const EFFECT_COLLAPSE_TIMER: 1002;
declare const INVADER_CORE_HITS: 100000;
declare const INVADER_CORE_CREEP_SPAWN_TIME: { '0': 0, '1': 0, '2': 6, '3': 3, '4': 2, '5': 1 };
declare const INVADER_CORE_EXPAND_TIME: { '1': 4000, '2': 3500, '3': 3000, '4': 2500, '5': 2000 };
declare const INVADER_CORE_CONTROLLER_POWER: 2;
declare const INVADER_CORE_CONTROLLER_DOWNGRADE: 5000;
declare const STRONGHOLD_RAMPART_HITS: { '0': 0, '1': 100000, '2': 200000, '3': 500000, '4': 1000000, '5': 2000000 };
declare const STRONGHOLD_DECAY_TICKS: 75000;
declare const POWER_INFO: { '1': { 'className': 'operator', 'level': [0, 2, 7, 14, 22], 'cooldown': 50, 'effect': [1, 2, 4, 6, 8] }, '2': { 'className': 'operator', 'level': [0, 2, 7, 14, 22], 'cooldown': 300, 'duration': 1000, 'range': 3, 'ops': 100, 'effect': [0.9, 0.7, 0.5, 0.35, 0.2] }, '3': { 'className': 'operator', 'level': [0, 2, 7, 14, 22], 'cooldown': 10, 'duration': 100, 'range': 3, 'ops': 10, 'effect': [1.1, 1.2, 1.3, 1.4, 1.5] }, '4': { 'className': 'operator', 'level': [0, 2, 7, 14, 22], 'cooldown': 800, 'duration': 1000, 'range': 3, 'ops': 100, 'effect': [500000, 1000000, 2000000, 4000000, 7000000] }, '5': { 'className': 'operator', 'level': [0, 2, 7, 14, 22], 'cooldown': 50, 'duration': 1000, 'range': 3, 'ops': 10, 'effect': [2, 4, 6, 8, 10] }, '6': { 'className': 'operator', 'level': [0, 2, 7, 14, 22], 'cooldown': 50, 'range': 3, 'ops': 2, 'effect': [0.2, 0.4, 0.6, 0.8, 1] }, '7': { 'className': 'operator', 'level': [0, 2, 7, 14, 22], 'cooldown': 400, 'duration': [200, 400, 600, 800, 1000], 'range': 3, 'ops': 10 }, '8': { 'className': 'operator', 'level': [0, 2, 7, 14, 22], 'cooldown': 500, 'duration': 1000, 'range': 3, 'ops': 100, 'effect': [0.9, 0.8, 0.7, 0.6, 0.5] }, '9': { 'className': 'operator', 'level': [0, 2, 7, 14, 22], 'cooldown': 5, 'range': 20, 'ops': 10, 'duration': [1, 2, 3, 4, 5] }, '10': { 'className': 'operator', 'level': [0, 2, 7, 14, 22], 'cooldown': 0, 'duration': 5, 'range': 50, 'ops': 10, 'effect': [0.9, 0.8, 0.7, 0.6, 0.5] }, '11': { 'className': 'operator', 'level': [0, 2, 7, 14, 22], 'cooldown': 100, 'range': 3, 'ops': 100, 'duration': [100, 200, 300, 400, 500] }, '12': { 'className': 'operator', 'level': [0, 2, 7, 14, 22], 'effect': [5000, 10000, 15000, 20000, 25000], 'duration': 50, 'cooldown': 20, 'energy': 100 }, '13': { 'className': 'operator', 'level': [10, 11, 12, 14, 22], 'cooldown': 100, 'duration': 300, 'range': 3, 'effect': [50, 100, 150, 200, 250], 'period': 15 }, '14': { 'className': 'operator', 'level': [10, 11, 12, 14, 22], 'cooldown': 100, 'duration': 100, 'range': 3, 'effect': [2, 4, 6, 8, 10], 'period': 10 }, '15': { 'className': 'operator', 'level': [20, 21, 22, 23, 24], 'cooldown': 8, 'duration': 10, 'range': 50, 'ops': [50, 40, 30, 20, 10] }, '16': { 'className': 'operator', 'level': [10, 11, 12, 14, 22], 'cooldown': 800, 'range': 3, 'duration': 1000, 'ops': 200, 'effect': [1, 2, 3, 4, 5] }, '17': { 'className': 'operator', 'level': [0, 2, 7, 14, 22], 'cooldown': 5, 'range': 3, 'ops': 5, 'duration': [1, 2, 3, 4, 5] }, '18': { 'className': 'operator', 'level': [20, 21, 22, 23, 24], 'cooldown': 800, 'range': 3, 'duration': 1000, 'ops': 200, 'effect': [10, 20, 30, 40, 50] }, '19': { 'className': 'operator', 'level': [0, 2, 7, 14, 22], 'cooldown': 800, 'range': 3, 'duration': 1000, 'ops': 100 } };
declare const BODYPARTS_ALL: ['move', 'work', 'carry', 'attack', 'ranged_attack', 'tough', 'heal', 'claim'];
declare const RESOURCES_ALL: ['energy', 'power', 'H', 'O', 'U', 'K', 'L', 'Z', 'X', 'G', 'OH', 'ZK', 'UL', 'UH', 'UO', 'KH', 'KO', 'LH', 'LO', 'ZH', 'ZO', 'GH', 'GO', 'UH2O', 'UHO2', 'KH2O', 'KHO2', 'LH2O', 'LHO2', 'ZH2O', 'ZHO2', 'GH2O', 'GHO2', 'XUH2O', 'XUHO2', 'XKH2O', 'XKHO2', 'XLH2O', 'XLHO2', 'XZH2O', 'XZHO2', 'XGH2O', 'XGHO2', 'ops', 'silicon', 'metal', 'biomass', 'mist', 'utrium_bar', 'lemergium_bar', 'zynthium_bar', 'keanium_bar', 'ghodium_melt', 'oxidant', 'reductant', 'purifier', 'battery', 'composite', 'crystal', 'liquid', 'wire', 'switch', 'transistor', 'microchip', 'circuit', 'device', 'cell', 'phlegm', 'tissue', 'muscle', 'organoid', 'organism', 'alloy', 'tube', 'fixtures', 'frame', 'hydraulics', 'machine', 'condensate', 'concentrate', 'extract', 'spirit', 'emanation', 'essence'];
declare const COLORS_ALL: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
declare const INTERSHARD_RESOURCES: ['token'];
declare const COMMODITIES: { 'utrium_bar': { 'amount': 100, 'cooldown': 20, 'components': { 'U': 500, 'energy': 200 } }, 'U': { 'amount': 500, 'cooldown': 20, 'components': { 'utrium_bar': 100, 'energy': 200 } }, 'lemergium_bar': { 'amount': 100, 'cooldown': 20, 'components': { 'L': 500, 'energy': 200 } }, 'L': { 'amount': 500, 'cooldown': 20, 'components': { 'lemergium_bar': 100, 'energy': 200 } }, 'zynthium_bar': { 'amount': 100, 'cooldown': 20, 'components': { 'Z': 500, 'energy': 200 } }, 'Z': { 'amount': 500, 'cooldown': 20, 'components': { 'zynthium_bar': 100, 'energy': 200 } }, 'keanium_bar': { 'amount': 100, 'cooldown': 20, 'components': { 'K': 500, 'energy': 200 } }, 'K': { 'amount': 500, 'cooldown': 20, 'components': { 'keanium_bar': 100, 'energy': 200 } }, 'ghodium_melt': { 'amount': 100, 'cooldown': 20, 'components': { 'G': 500, 'energy': 200 } }, 'G': { 'amount': 500, 'cooldown': 20, 'components': { 'ghodium_melt': 100, 'energy': 200 } }, 'oxidant': { 'amount': 100, 'cooldown': 20, 'components': { 'O': 500, 'energy': 200 } }, 'O': { 'amount': 500, 'cooldown': 20, 'components': { 'oxidant': 100, 'energy': 200 } }, 'reductant': { 'amount': 100, 'cooldown': 20, 'components': { 'H': 500, 'energy': 200 } }, 'H': { 'amount': 500, 'cooldown': 20, 'components': { 'reductant': 100, 'energy': 200 } }, 'purifier': { 'amount': 100, 'cooldown': 20, 'components': { 'X': 500, 'energy': 200 } }, 'X': { 'amount': 500, 'cooldown': 20, 'components': { 'purifier': 100, 'energy': 200 } }, 'battery': { 'amount': 50, 'cooldown': 10, 'components': { 'energy': 600 } }, 'energy': { 'amount': 500, 'cooldown': 10, 'components': { 'battery': 50 } }, 'composite': { 'level': 1, 'amount': 20, 'cooldown': 50, 'components': { 'utrium_bar': 20, 'zynthium_bar': 20, 'energy': 20 } }, 'crystal': { 'level': 2, 'amount': 6, 'cooldown': 21, 'components': { 'lemergium_bar': 6, 'keanium_bar': 6, 'purifier': 6, 'energy': 45 } }, 'liquid': { 'level': 3, 'amount': 12, 'cooldown': 60, 'components': { 'oxidant': 12, 'reductant': 12, 'ghodium_melt': 12, 'energy': 90 } }, 'wire': { 'amount': 20, 'cooldown': 8, 'components': { 'utrium_bar': 20, 'silicon': 100, 'energy': 40 } }, 'switch': { 'level': 1, 'amount': 5, 'cooldown': 70, 'components': { 'wire': 40, 'oxidant': 95, 'utrium_bar': 35, 'energy': 20 } }, 'transistor': { 'level': 2, 'amount': 1, 'cooldown': 59, 'components': { 'switch': 4, 'wire': 15, 'reductant': 85, 'energy': 8 } }, 'microchip': { 'level': 3, 'amount': 1, 'cooldown': 250, 'components': { 'transistor': 2, 'composite': 50, 'wire': 117, 'purifier': 25, 'energy': 16 } }, 'circuit': { 'level': 4, 'amount': 1, 'cooldown': 800, 'components': { 'microchip': 1, 'transistor': 5, 'switch': 4, 'oxidant': 115, 'energy': 32 } }, 'device': { 'level': 5, 'amount': 1, 'cooldown': 600, 'components': { 'circuit': 1, 'microchip': 3, 'crystal': 110, 'ghodium_melt': 150, 'energy': 64 } }, 'cell': { 'amount': 20, 'cooldown': 8, 'components': { 'lemergium_bar': 20, 'biomass': 100, 'energy': 40 } }, 'phlegm': { 'level': 1, 'amount': 2, 'cooldown': 35, 'components': { 'cell': 20, 'oxidant': 36, 'lemergium_bar': 16, 'energy': 8 } }, 'tissue': { 'level': 2, 'amount': 2, 'cooldown': 164, 'components': { 'phlegm': 10, 'cell': 10, 'reductant': 110, 'energy': 16 } }, 'muscle': { 'level': 3, 'amount': 1, 'cooldown': 250, 'components': { 'tissue': 3, 'phlegm': 3, 'zynthium_bar': 50, 'reductant': 50, 'energy': 16 } }, 'organoid': { 'level': 4, 'amount': 1, 'cooldown': 800, 'components': { 'muscle': 1, 'tissue': 5, 'purifier': 208, 'oxidant': 256, 'energy': 32 } }, 'organism': { 'level': 5, 'amount': 1, 'cooldown': 600, 'components': { 'organoid': 1, 'liquid': 150, 'tissue': 6, 'cell': 310, 'energy': 64 } }, 'alloy': { 'amount': 20, 'cooldown': 8, 'components': { 'zynthium_bar': 20, 'metal': 100, 'energy': 40 } }, 'tube': { 'level': 1, 'amount': 2, 'cooldown': 45, 'components': { 'alloy': 40, 'zynthium_bar': 16, 'energy': 8 } }, 'fixtures': { 'level': 2, 'amount': 1, 'cooldown': 115, 'components': { 'composite': 20, 'alloy': 41, 'oxidant': 161, 'energy': 8 } }, 'frame': { 'level': 3, 'amount': 1, 'cooldown': 125, 'components': { 'fixtures': 2, 'tube': 4, 'reductant': 330, 'zynthium_bar': 31, 'energy': 16 } }, 'hydraulics': { 'level': 4, 'amount': 1, 'cooldown': 800, 'components': { 'liquid': 150, 'fixtures': 3, 'tube': 15, 'purifier': 208, 'energy': 32 } }, 'machine': { 'level': 5, 'amount': 1, 'cooldown': 600, 'components': { 'hydraulics': 1, 'frame': 2, 'fixtures': 3, 'tube': 12, 'energy': 64 } }, 'condensate': { 'amount': 20, 'cooldown': 8, 'components': { 'keanium_bar': 20, 'mist': 100, 'energy': 40 } }, 'concentrate': { 'level': 1, 'amount': 3, 'cooldown': 41, 'components': { 'condensate': 30, 'keanium_bar': 15, 'reductant': 54, 'energy': 12 } }, 'extract': { 'level': 2, 'amount': 2, 'cooldown': 128, 'components': { 'concentrate': 10, 'condensate': 30, 'oxidant': 60, 'energy': 16 } }, 'spirit': { 'level': 3, 'amount': 1, 'cooldown': 200, 'components': { 'extract': 2, 'concentrate': 6, 'reductant': 90, 'purifier': 20, 'energy': 16 } }, 'emanation': { 'level': 4, 'amount': 1, 'cooldown': 800, 'components': { 'spirit': 2, 'extract': 2, 'concentrate': 3, 'keanium_bar': 112, 'energy': 32 } }, 'essence': { 'level': 5, 'amount': 1, 'cooldown': 600, 'components': { 'emanation': 1, 'spirit': 3, 'crystal': 110, 'ghodium_melt': 150, 'energy': 64 } } };

/////////////////////////
// Constants types
/////////////////////////

type OK = 0;
type ERR_NOT_OWNER = -1;
type ERR_NO_PATH = -2;
type ERR_NAME_EXISTS = -3;
type ERR_BUSY = -4;
type ERR_NOT_FOUND = -5;
type ERR_NOT_ENOUGH_ENERGY = -6;
type ERR_NOT_ENOUGH_RESOURCES = -6;
type ERR_INVALID_TARGET = -7;
type ERR_FULL = -8;
type ERR_NOT_IN_RANGE = -9;
type ERR_INVALID_ARGS = -10;
type ERR_TIRED = -11;
type ERR_NO_BODYPART = -12;
type ERR_NOT_ENOUGH_EXTENSIONS = -6;
type ERR_RCL_NOT_ENOUGH = -14;
type ERR_GCL_NOT_ENOUGH = -15;

type FIND_EXIT_TOP = 1;
type FIND_EXIT_RIGHT = 3;
type FIND_EXIT_BOTTOM = 5;
type FIND_EXIT_LEFT = 7;
type FIND_EXIT = 10;
type FIND_CREEPS = 101;
type FIND_MY_CREEPS = 102;
type FIND_HOSTILE_CREEPS = 103;
type FIND_SOURCES_ACTIVE = 104;
type FIND_SOURCES = 105;
type FIND_DROPPED_RESOURCES = 106;
type FIND_STRUCTURES = 107;
type FIND_MY_STRUCTURES = 108;
type FIND_HOSTILE_STRUCTURES = 109;
type FIND_FLAGS = 110;
type FIND_CONSTRUCTION_SITES = 111;
type FIND_MY_SPAWNS = 112;
type FIND_HOSTILE_SPAWNS = 113;
type FIND_MY_CONSTRUCTION_SITES = 114;
type FIND_HOSTILE_CONSTRUCTION_SITES = 115;
type FIND_MINERALS = 116;
type FIND_NUKES = 117;
type FIND_TOMBSTONES = 118;
type FIND_POWER_CREEPS = 119;
type FIND_MY_POWER_CREEPS = 120;
type FIND_HOSTILE_POWER_CREEPS = 121;
type FIND_DEPOSITS = 122;
type FIND_RUINS = 123;
type FindExitType = 1 | 3 | 5 | 7;

type LOOK_CREEPS = 'creep';
type LOOK_ENERGY = 'energy';
type LOOK_RESOURCES = 'resource';
type LOOK_SOURCES = 'source';
type LOOK_MINERALS = 'mineral';
type LOOK_DEPOSITS = 'deposit';
type LOOK_STRUCTURES = 'structure';
type LOOK_FLAGS = 'flag';
type LOOK_CONSTRUCTION_SITES = 'constructionSite';
type LOOK_NUKES = 'nuke';
type LOOK_TERRAIN = 'terrain';
type LOOK_TOMBSTONES = 'tombstone';
type LOOK_POWER_CREEPS = 'powerCreep';
type LOOK_RUINS = 'ruin';

type TERRAIN_MASK_PLAIN = 0;
type TERRAIN_MASK_WALL = 1;
type TERRAIN_MASK_SWAMP = 2;
type TerrainType = 'plain' | 'wall' | 'swamp';

type ORDER_SELL = 'sell';
type ORDER_BUY = 'buy';

type SUBSCRIPTION_TOKEN = 'token';

type EVENT_ATTACK = 1;
type EVENT_OBJECT_DESTROYED = 2;
type EVENT_ATTACK_CONTROLLER = 3;
type EVENT_BUILD = 4;
type EVENT_HARVEST = 5;
type EVENT_HEAL = 6;
type EVENT_REPAIR = 7;
type EVENT_RESERVE_CONTROLLER = 8;
type EVENT_UPGRADE_CONTROLLER = 9;
type EVENT_EXIT = 10;
type EVENT_POWER = 11;
type EVENT_TRANSFER = 12;

type EVENT_ATTACK_TYPE_MELEE = 1;
type EVENT_ATTACK_TYPE_RANGED = 2;
type EVENT_ATTACK_TYPE_RANGED_MASS = 3;
type EVENT_ATTACK_TYPE_DISMANTLE = 4;
type EVENT_ATTACK_TYPE_HIT_BACK = 5;
type EVENT_ATTACK_TYPE_NUKE = 6;
type EventAttackType = EVENT_ATTACK_TYPE_MELEE | EVENT_ATTACK_TYPE_RANGED | EVENT_ATTACK_TYPE_RANGED_MASS | EVENT_ATTACK_TYPE_DISMANTLE | EVENT_ATTACK_TYPE_HIT_BACK | EVENT_ATTACK_TYPE_NUKE;

type EVENT_HEAL_TYPE_MELEE = 1;
type EVENT_HEAL_TYPE_RANGED = 2;
type EventHealType = EVENT_HEAL_TYPE_MELEE | EVENT_HEAL_TYPE_RANGED;

declare type ColorType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
declare type Direction = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
declare type BodyPart = 'move' | 'work' | 'carry' | 'attack' | 'ranged_attack' | 'tough' | 'heal' | 'claim';

declare type StructureType = 'spawn' | 'extension' | 'road' | 'constructedWall' | 'rampart' | 'keeperLair' | 'portal' | 'controller' | 'link' | 'storage' | 'tower' | 'observer' | 'powerBank' | 'powerSpawn' | 'extractor' | 'lab' | 'terminal' | 'container' | 'nuker' | 'factory' | 'invaderCore';
declare type RoomObjectType = 'creep' | 'powerCreep' | 'source' | 'mineral' | 'deposit' | 'flag' | 'nuke' | 'constructionSite' | 'resource' | StructureType;

declare type PowerClassType = keyof typeof POWER_CLASS;
declare type PowerType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19;

declare type DensityType = 1 | 2 | 3 | 4;

declare type ResourceType = 'energy' | 'power' | 'H' | 'O' | 'U' | 'L' | 'K' | 'Z' | 'X' | 'G' | 'silicon' | 'metal' | 'biomass' | 'mist' | 'OH' | 'ZK' | 'UL' | 'UH' | 'UO' | 'KH' | 'KO' | 'LH' | 'LO' | 'ZH' | 'ZO' | 'GH' | 'GO' | 'UH2O' | 'UHO2' | 'KH2O' | 'KHO2' | 'LH2O' | 'LHO2' | 'ZH2O' | 'ZHO2' | 'GH2O' | 'GHO2' | 'XUH2O' | 'XUHO2' | 'XKH2O' | 'XKHO2' | 'XLH2O' | 'XLHO2' | 'XZH2O' | 'XZHO2' | 'XGH2O' | 'XGHO2' | 'ops' | 'utrium_bar' | 'lemergium_bar' | 'zynthium_bar' | 'keanium_bar' | 'ghodium_melt' | 'oxidant' | 'reductant' | 'purifier' | 'battery' | 'composite' | 'crystal' | 'liquid' | 'wire' | 'switch' | 'transistor' | 'microchip' | 'circuit' | 'device' | 'cell' | 'phlegm' | 'tissue' | 'muscle' | 'organoid' | 'organism' | 'alloy' | 'tube' | 'fixtures' | 'frame' | 'hydraulics' | 'machine' | 'condensate' | 'concentrate' | 'extract' | 'spirit' | 'emanation' | 'essence';
declare type MineralResourceType = 'H' | 'O' | 'U' | 'L' | 'K' | 'Z' | 'X' | 'G';
declare type BoostResourceType = 'UH' | 'UO' | 'KH' | 'KO' | 'LH' | 'LO' | 'ZH' | 'ZO' | 'GH' | 'GO' | 'UH2O' | 'UHO2' | 'KH2O' | 'KHO2' | 'LH2O' | 'LHO2' | 'ZH2O' | 'ZHO2' | 'GH2O' | 'GHO2' | 'XUH2O' | 'XUHO2' | 'XKH2O' | 'XKHO2' | 'XLH2O' | 'XLHO2' | 'XZH2O' | 'XZHO2' | 'XGH2O' | 'XGHO2';
declare type DepositResourceType = 'silicon' | 'metal' | 'biomass' | 'mist';
declare type CommodityResourceType = 'ops' | 'utrium_bar' | 'lemergium_bar' | 'zynthium_bar' | 'keanium_bar' | 'ghodium_melt' | 'oxidant' | 'reductant' | 'purifier' | 'battery' | 'composite' | 'crystal' | 'liquid' | 'wire' | 'switch' | 'transistor' | 'microchip' | 'circuit' | 'device' | 'cell' | 'phlegm' | 'tissue' | 'muscle' | 'organoid' | 'organism' | 'alloy' | 'tube' | 'fixtures' | 'frame' | 'hydraulics' | 'machine' | 'condensate' | 'concentrate' | 'extract' | 'spirit' | 'emanation' | 'essence';

declare type EffectType = 1001 | 1002;

/////////////////////////
// Construction site
/////////////////////////

/**
 * A site of a structure which is currently under construction. A construction site can be created using the 'Construct' button at the left of the game field or the Room.createConstructionSite method.
 * To build a structure on the construction site, give a worker creep some amount of energy and perform Creep.build action.
 * You can remove enemy construction sites by moving a creep on it.
 */
declare const ConstructionSite: _ConstructorById<ConstructionSite>;
interface ConstructionSite extends RoomObject, OwnedObject, ObjectId {
    /**
     * The current construction progress.
     */
    progress: number;
    /**
     * The total construction progress needed for the structure to be built.
     */
    progressTotal: number;
    /**
     * One of the following constants: STRUCTURE_EXTENSION, STRUCTURE_RAMPART, STRUCTURE_ROAD, STRUCTURE_SPAWN, STRUCTURE_WALL, STRUCTURE_LINK
     */
    structureType: StructureType;
    /**
     * Remove the construction site.
     * @returns Result Code: OK, ERR_NOT_OWNER
     */
    remove(): OK | ERR_NOT_OWNER;
}

/////////////////////////
// Creep
/////////////////////////

interface CreepCommon extends RoomObject, OwnedObject, ObjectId {
    room: Room;
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
declare const Creep: _ConstructorById<Creep>;
interface Creep extends CreepCommon {
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
declare const PowerCreep: _ConstructorById<PowerCreep> & {
    /**
     * A static method to create new Power Creep instance in your account. It will be added in an unspawned state, use spawn method to spawn it in the world.
     * You need one free Power Level in your account to perform this action.
     * @param name The name of the new power creep.
     * @param className The class of the new power creep, one of the POWER_CLASS constants.
     */
    create(name: string, className: PowerClassType): OK | ERR_NAME_EXISTS | ERR_NOT_ENOUGH_RESOURCES;
};
interface PowerCreep extends CreepCommon {
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

/////////////////////////
// Deposit
/////////////////////////

/**
 * A rare resource deposit needed for producing commodities. Can be harvested by creeps with a WORK body part. Each harvest operation triggers a cooldown period, which becomes longer and longer over time.
 * Cooldown = 0.001 * totalHarvested ^ 1.2
 * Decay = 50,000 ticks after appearing or last harvest operation
 */
declare const Deposit: _ConstructorById<Deposit>;
interface Deposit extends RoomObject, ObjectId {
    room: Room;
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

/////////////////////////
// Effect
/////////////////////////

interface Effect {
    /**
     * Effect ID of the applied effect. Can be either natural effect ID or Power ID.
     */
    effect: EffectType;
    /**
     * Power level of the applied effect. Absent if the effect is not a Power effect.
     */
    level?: number;
    /**
     * How many ticks will the effect last.
     */
    ticksRemaining: number;
}

/////////////////////////
// Flag
/////////////////////////

/**
 * A flag. Flags can be used to mark particular spots in a room. Flags are visible to their owners only.
 */
declare const Flag: {
    new(name: string, color: number, secondaryColor: number, roomName: string, x: number, y: number): Flag;
};
interface Flag extends RoomObject {
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

/////////////////////////
// Game
/////////////////////////

/**
 * The main global game object containing all the gameplay information.
 */
declare var Game: Game;
interface Game {
    /**
     * A hash containing all your construction sites with their id as hash keys.
     */
    constructionSites: { [constructionSiteId: string]: ConstructionSite };
    /**
     * An object containing information about your CPU usage with the following properties:
     */
    cpu: CPU;
    /**
     * A hash containing all your creeps with creep names as hash keys.
     */
    creeps: { [creepName: string]: Creep };
    /**
     * A hash containing all your flags with flag names as hash keys.
     */
    flags: { [flagName: string]: Flag };
    /**
     * Your Global Control Level, an object with the following properties :
     */
    gcl: GlobalControlLevel;
    /**
     * Your Global Power Level, an object with the following properties :
     */
    gpl: GlobalControlLevel;
    /**
     * A global object representing world GameMap.
     */
    map: GameMap;
    /**
     * A global object representing the in-game market.
     */
    market: Market;
    /**
     * A hash containing all your power creeps with their names as hash keys. Even power creeps not spawned in the world can be accessed here.
     */
    powerCreeps: { [creepName: string]: PowerCreep };
    /**
     * An object with your global resources that are bound to the account, like subscription tokens. Each object key is a resource constant, values are resources amounts.
     */
    resources: { [resourceType in ResourceType | SUBSCRIPTION_TOKEN]?: number };
    /**
     * A hash containing all the rooms available to you with room names as hash keys.
     */
    rooms: { [roomName: string]: Room };
    /**
     * An object describing the world shard where your script is currently being executed in.
     */
    shard: Shard;
    /**
     * A hash containing all your spawns with spawn names as hash keys.
     */
    spawns: { [spawnName: string]: StructureSpawn };
    /**
     * A hash containing all your structures with structure id as hash keys.
     */
    structures: { [structureId: string]: Structure };
    /**
     * System game tick counter. It is automatically incremented on every tick.
     */
    time: number;
    /**
     * Get an object with the specified unique ID. It may be a game object of any type. Only objects from the rooms which are visible to you can be accessed.
     * @param id The unique identifier.
     * @returns an object instance or null if it cannot be found.
     */
    getObjectById<T>(id: string): T | null;
    /**
     * Send a custom message at your profile email. This way, you can set up notifications to yourself on any occasion within the game. You can schedule up to 20 notifications during one game tick. Not available in the Simulation Room.
     * @param message Custom text which will be sent in the message. Maximum length is 1000 characters.
     * @param groupInterval If set to 0 (default), the notification will be scheduled immediately. Otherwise, it will be grouped with other notifications and mailed out later using the specified time in minutes.
     */
    notify(message: string, groupInterval?: number): void;
}

interface GlobalControlLevel {
    /**
     * The current level.
     */
    level: number;
    /**
     * The current progress to the next level.
     */
    progress: number;
    /**
     * The progress required to reach the next level.
     */
    progressTotal: number;
}

interface CPU {
    /**
     * Your assigned CPU limit for the current shard.
     */
    limit: number;
    /**
     * An amount of available CPU time at the current game tick. Usually it is higher than Game.cpu.limit.
     */
    tickLimit: number;
    /**
     * An amount of unused CPU accumulated in your bucket.
     */
    bucket: number;
    /**
     * An object with limits for each shard with shard names as keys. You can use setShardLimits method to re-assign them.
     */
    shardLimits: ShardLimits;

    /**
     * This method is only available when Virtual machine is set to Isolated in your account runtime settings.
     *
     * Use this method to get heap statistics for your virtual machine. The return value is almost identical to the Node.js function v8.getHeapStatistics(). This function returns one additional property: externally_allocated_size which is the total amount of currently allocated memory which is not included in the v8 heap but counts against this isolate's memory limit. ArrayBuffer instances over a certain size are externally allocated and will be counted here.
     * @returns Returns an objects with heap statistics
     */
    getHeapStatistics(): HeapStatistics;
    /**
     * Get amount of CPU time used from the beginning of the current game tick. Always returns 0 in the Simulation mode.
     * @returns Returns currently used CPU time as a float number.
     */
    getUsed(): number;
    /**
     * This method is only available when Virtual machine is set to Isolated in your account runtime settings.
     *
     * Reset your runtime environment and wipe all data in heap memory.
     */
    halt(): void;
    /**
     * Allocate CPU limits to different shards. Total amount of CPU should remain equal to Game.cpu.shardLimits. This method can be used only once per 12 hours.
     * @param limits An object with CPU values for each shard in the same format as Game.cpu.shardLimits.
     */
    setShardLimits(limits: ShardLimits): OK | ERR_BUSY | ERR_INVALID_ARGS;
}

type ShardLimits = { [shardId: string]: number };

interface HeapStatistics {
    total_heap_size: number;
    total_heap_size_executable: number;
    total_physical_size: number;
    total_available_size: number;
    used_heap_size: number;
    heap_size_limit: number;
    malloced_memory: number;
    peak_malloced_memory: number;
    does_zap_garbage: number;
    externally_allocated_size: number;
}

interface Shard {
    /**
     * The name of the shard.
     */
    name: string;
    /**
     * Currently always equals to "normal".
     */
    type: string;
    /**
     * Whether this shard belongs to the PTR.
     */
    ptr?: boolean;
}

/////////////////////////
// Helper
/////////////////////////

type _ConstructorById<T> = {
    new(id: string): T;
}

interface ObjectId {
    /**
     * A unique object identifier. You can use `Game.getObjectById` method to retrieve an object instance by its `id`.
     */
    id: string;
}

interface OwnedObject {
    /**
     * Whether this is your own object. Walls and roads don't have this property as they are considered neutral structures.
     */
    my: boolean;
    /**
     * An object with the object’s owner info (if present) containing the following properties: username
     */
    owner: Owner;
}

interface Owner {
    username: string;
}

type PosMatrix<T> = {
    [y: number]: {
        [x: number]: T[];
    };
}

type WithPos<T> = {
    x: number;
    y: number;
} & T;

type LookResult =
    LookCreepResult |
    LookEnergyResult |
    LookResourceResult |
    LookSourceResult |
    LookMineralResult |
    LookDepositResult |
    LookStructureResult |
    LookFlagResult |
    LookConstructionSiteResult |
    LookNukeResult |
    LookTerrainResult |
    LookTombstoneResult |
    LookPowerCreepResult |
    LookRuinResult;

type LookCreepResult = LookForCreepResult & {
    type: LOOK_CREEPS;
};

type LookEnergyResult = LookForEnergyResult & {
    type: LOOK_ENERGY;
};

type LookResourceResult = LookForResourceResult & {
    type: LOOK_RESOURCES;
};

type LookSourceResult = LookForSourceResult & {
    type: LOOK_SOURCES;
};

type LookMineralResult = LookForMineralResult & {
    type: LOOK_MINERALS;
};

type LookDepositResult = LookForDepositResult & {
    type: LOOK_DEPOSITS;
};

type LookStructureResult = LookForStructureResult & {
    type: LOOK_STRUCTURES;
};

type LookFlagResult = LookForFlagResult & {
    type: LOOK_FLAGS;
};

type LookConstructionSiteResult = LookForConstructionSiteResult & {
    type: LOOK_CONSTRUCTION_SITES;
};

type LookNukeResult = LookForNukeResult & {
    type: LOOK_NUKES;
};

type LookTerrainResult = LookForTerrainResult & {
    type: LOOK_TERRAIN;
};

type LookTombstoneResult = LookForTombstoneResult & {
    type: LOOK_TOMBSTONES;
};

type LookPowerCreepResult = LookForPowerCreepResult & {
    type: LOOK_POWER_CREEPS;
};

type LookRuinResult = LookForRuinResult & {
    type: LOOK_RUINS;
};

type LookForCreepResult = {
    creep: Creep;
};

type LookForEnergyResult = {
    energy: Resource;
};

type LookForResourceResult = {
    resource: Resource;
};

type LookForSourceResult = {
    source: Source;
};

type LookForMineralResult = {
    mineral: Mineral;
};

type LookForDepositResult = {
    deposit: Deposit;
};

type LookForStructureResult = {
    structure: Structure;
};

type LookForFlagResult = {
    flag: Flag;
};

type LookForConstructionSiteResult = {
    constructionSite: ConstructionSite;
};

type LookForNukeResult = {
    nuke: Nuke;
};

type LookForTerrainResult = {
    terrain: TerrainType;
};

type LookForTombstoneResult = {
    tembstone: Tombstone;
};

type LookForPowerCreepResult = {
    powerCreep: PowerCreep;
};

type LookForRuinResult = {
    ruin: Ruin;
};

interface FindPathOpts {
    /**
     * Treat squares with creeps as walkable. Can be useful with too many moving creeps around or in some other cases. The default
     * value is false.
     */
    ignoreCreeps?: boolean;

    /**
     * Treat squares with destructible structures (constructed walls, ramparts, spawns, extensions) as walkable. Use this flag when
     * you need to move through a territory blocked by hostile structures. If a creep with an ATTACK body part steps on such a square,
     * it automatically attacks the structure. The default value is false.
     */
    ignoreDestructibleStructures?: boolean;

    /**
     * Ignore road structures. Enabling this option can speed up the search. The default value is false. This is only used when the
     * new PathFinder is enabled.
     */
    ignoreRoads?: boolean;

    /**
     * You can use this callback to modify a CostMatrix for any room during the search. The callback accepts two arguments, roomName
     * and costMatrix. Use the costMatrix instance to make changes to the positions costs. If you return a new matrix from this callback,
     * it will be used instead of the built-in cached one. This option is only used when the new PathFinder is enabled.
     *
     * @param roomName The name of the room.
     * @param costMatrix The current CostMatrix
     * @returns The new CostMatrix to use
     */
    costCallback?(roomName: string, costMatrix: CostMatrix): boolean | CostMatrix;

    /**
     * An array of the room's objects or RoomPosition objects which should be treated as walkable tiles during the search. This option
     * cannot be used when the new PathFinder is enabled (use costCallback option instead).
     */
    ignore?: any[] | RoomPosition[];

    /**
     * An array of the room's objects or RoomPosition objects which should be treated as obstacles during the search. This option cannot
     * be used when the new PathFinder is enabled (use costCallback option instead).
     */
    avoid?: any[] | RoomPosition[];

    /**
     * The maximum limit of possible pathfinding operations. You can limit CPU time used for the search based on ratio 1 op ~ 0.001 CPU.
     * The default value is 2000.
     */
    maxOps?: number;

    /**
     * Weight to apply to the heuristic in the A* formula F = G + weight * H. Use this option only if you understand the underlying
     * A* algorithm mechanics! The default value is 1.2.
     */
    heuristicWeight?: number;

    /**
     * If true, the result path will be serialized using Room.serializePath. The default is false.
     */
    serialize?: boolean;

    /**
     * The maximum allowed rooms to search. The default (and maximum) is 16. This is only used when the new PathFinder is enabled.
     */
    maxRooms?: number;

    /**
     * Path to within (range) tiles of target tile. The default is to path to the tile that the target is on (0).
     */
    range?: number;
}

interface PathStep {
    x: number;
    dx: number;
    y: number;
    dy: number;
    direction: Direction;
}

type Filter<T> = Partial<T> | ((aobj: T) => boolean) | keyof T;

/////////////////////////
// InterShardMemory
/////////////////////////

/**
 * InterShardMemory object provides an interface for communicating between shards. Your script is executed separatedly on each shard, and their Memory objects are isolated from each other. In order to pass messages and data between shards, you need to use InterShardMemory instead.
 *
 * Every shard can have its own 100 KB of data in string format that can be accessed by all other shards. A shard can write only to its own data, other shards' data is read-only.
 *
 * This data has nothing to do with Memory contents, it's a separate data container.
 */
declare const InterShardMemory: InterShardMemory;
interface InterShardMemory {
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

/////////////////////////
// Map
/////////////////////////

/**
 * A global object representing world map. Use it to navigate between rooms. The object is accessible via Game.map property.
 */
interface GameMap {
    /**
     * List all exits available from the room with the given name.
     * @param roomName The room name.
     * @returns The exits information or null if the room not found.
     */
    describeExits(roomName: string): { '1'?: string; '3'?: string; '5'?: string; '7'?: string } | null;
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

/////////////////////////
// Market
/////////////////////////

/**
 * A global object representing the in-game market. You can use this object to track resource transactions to/from your
 * terminals, and your buy/sell orders. The object is accessible via the singleton Game.market property.
 */
interface Market {
    /**
     * Your current credits balance.
     */
    credits: number;
    /**
     * An array of the last 100 incoming transactions to your terminals
     */
    incomingTransactions: Transaction[];
    /**
     * An array of the last 100 outgoing transactions from your terminals
     */
    outgoingTransactions: Transaction[];
    /**
     * An object with your active and inactive buy/sell orders on the market.
     */
    orders: { [key: string]: Order };
    /**
     * Estimate the energy transaction cost of StructureTerminal.send and Market.deal methods. The formula: Math.ceil( amount * (Math.log(0.1*linearDistanceBetweenRooms + 0.9) + 0.1) )
     * @param amount Amount of resources to be sent.
     * @param roomName1 The name of the first room.
     * @param roomName2 The name of the second room.
     * @returns The amount of energy required to perform the transaction.
     */
    calcTransactionCost(amount: number, roomName1: string, roomName2: string): number;
    /**
     * Cancel a previously created order. The 5% fee is not returned.
     * @param orderId The order ID as provided in Game.market.orders
     * @returns Result Code: OK, ERR_INVALID_ARGS
     */
    cancelOrder(orderId: string): OK | ERR_INVALID_ARGS;
    /**
     * Change the price of an existing order. If newPrice is greater than old price, you will be charged (newPrice-oldPrice)*remainingAmount*0.05 credits.
     * @param orderId The order ID as provided in Game.market.orders
     * @param newPrice The new order price.
     * @returns Result Code: OK, ERR_NOT_OWNER, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_ARGS
     */
    changeOrderPrice(orderId: string, newPrice: number): OK | ERR_NOT_OWNER | ERR_NOT_ENOUGH_RESOURCES | ERR_INVALID_ARGS;
    /**
     * Create a market order in your terminal. You will be charged price*amount*0.05 credits when the order is placed.
     * The maximum orders count is 20 per player. You can create an order at any time with any amount,
     * it will be automatically activated and deactivated depending on the resource/credits availability.
     */
    createOrder(params: CreateOrderParams): OK | ERR_NOT_OWNER | ERR_NOT_ENOUGH_RESOURCES | ERR_FULL | ERR_INVALID_ARGS;
    /**
     * Execute a trade deal from your Terminal to another player's Terminal using the specified buy/sell order.
     * Your Terminal will be charged energy units of transfer cost regardless of the order resource type.
     * You can use Game.market.calcTransactionCost method to estimate it.
     * When multiple players try to execute the same deal, the one with the shortest distance takes precedence.
     * @param orderId The order ID as provided in Game.market.getAllOrders.
     * @param amount The amount of resources to transfer.
     * @param targetRoomName The name of your room which has to contain an active Terminal with enough amount of energy. This argument is not used when the order resource type equals to SUBSCRIPTION_TOKEN.
     */
    deal(orderId: string, amount: number, targetRoomName?: string): OK | ERR_NOT_OWNER | ERR_NOT_ENOUGH_RESOURCES | ERR_FULL | ERR_INVALID_ARGS | ERR_TIRED;
    /**
     * Add more capacity to an existing order. It will affect remainingAmount and totalAmount properties. You will be charged price*addAmount*0.05 credits.
     * @param orderId The order ID as provided in Game.market.orders
     * @param addAmount How much capacity to add. Cannot be a negative value.
     * @returns Result Code: OK, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_ARGS
     */
    extendOrder(orderId: string, addAmount: number): OK | ERR_NOT_ENOUGH_RESOURCES | ERR_INVALID_ARGS;
    /**
     * Get other players' orders currently active on the market.
     * @param filter (optional) An object or function that will filter the resulting list using the lodash.filter method.
     * @returns An array of objects containing order information.
     */
    getAllOrders(filter?: Partial<Order> | ((o: Order) => boolean)): Order[];
    /**
     * Get daily price history of the specified resource on the market for the last 14 days.
     * @param resourceType One of the RESOURCE_* constants. If undefined, returns history data for all resources.
     */
    getHistory(resourceType?: ResourceType): OrderHistory[];
    /**
     * Retrieve info for specific market order.
     * @param orderId The order ID
     * @returns An object with the order info. See getAllOrders for properties explanation.
     */
    getOrderById(id: string): Order | null;
}

interface Transaction {
    transactionId: string;
    time: number;
    sender?: { username: string };
    recipient?: { username: string };
    resourceType: string;
    amount: number;
    from: string;
    to: string;
    description: string;
}

interface CreateOrderParams {
    /**
     * The order type
     */
    type: ORDER_SELL | ORDER_BUY;
    /**
     * Either one of the RESOURCE_* constants or SUBSCRIPTION_TOKEN. If your Terminal doesn't have the specified resource, the order will be temporary inactive.
     */
    resourceType: ResourceType | SUBSCRIPTION_TOKEN;
    /**
     * The price for one resource unit in credits. Can be a decimal number.
     */
    price: number;
    /**
     * The amount of resources to be traded in total.
     */
    totalAmount: number;
    /**
     * The room where your order will be created. You must have your own Terminal structure in this room, otherwise the created order will be temporary inactive. This argument is not used when resourceType equals to SUBSCRIPTION_TOKEN.
     */
    roomName?: string;
}

interface Order {
    /**
     * The unique order ID.
     */
    id: string;
    /**
     * The order creation time in game ticks. This property is absent for orders of the inter-shard market.
     */
    created?: number;
    /**
     * The order creation time in milliseconds since UNIX epoch time. This property is absent for old orders.
     */
    createdTimestamp: number;
    /**
     * Either ORDER_SELL or ORDER_BUY.
     */
    type: ORDER_SELL | ORDER_BUY;
    /**
     * Either one of the RESOURCE_* constants or SUBSCRIPTION_TOKEN.
     */
    resourceType: ResourceType | SUBSCRIPTION_TOKEN;
    /**
     * The room where this order is placed.
     */
    roomName?: string;
    /**
     * Currently available amount to trade.
     */
    amount: number;
    /**
     * How many resources are left to trade via this order.
     */
    remainingAmount: number;
    /**
     * The current price per unit.
     */
    price: number;
}

interface OrderHistory {
    resourceType: ResourceType;
    date: string;
    transactions: number;
    volumne: number;
    avgPrice: number;
    stddevPrice: number;
}

/////////////////////////
// Memory
/////////////////////////

declare const Memory: Memory;
interface Memory {
    [name: string]: any;
    creeps: { [name: string]: any };
    flags: { [name: string]: any };
    rooms: { [name: string]: any };
    spawns: { [name: string]: any };
}

/////////////////////////
// Mineral
/////////////////////////

/**
 * A mineral deposit object. Can be harvested by creeps with a WORK body part using the extractor structure.
 *
 * Regeneration amount:
 *  - DENSITY_LOW: 15,000
 *  - DENSITY_MODERATE: 35,000
 *  - DENSITY_HIGH: 70,000
 *  - DENSITY_ULTRA: 100,000
 *
 * Regeneration time: 50,000 ticks
 *
 * Density change probability:
 *  - DENSITY_LOW: 100% chance
 *  - DENSITY_MODERATE: 5% chance
 *  - DENSITY_HIGH: 5% chance
 *  - DENSITY_ULTRA: 100% chance
 */
declare const Mineral: _ConstructorById<Mineral>;
interface Mineral extends RoomObject, ObjectId {
    room: Room;
    /**
     * The prototype is stored in the Mineral.prototype global object. You can use it to extend game objects behaviour globally.
     */
    readonly prototype: Mineral;
    /**
     * The density of this mineral deposit, one of the DENSITY_* constants.
     */
    density: number;
    /**
     * The remaining amount of resources.
     */
    mineralAmount: number;
    /**
     * The resource type, one of the RESOURCE_* constants.
     */
    mineralType: MineralResourceType;
    /**
     * The remaining time after which the deposit will be refilled.
     */
    ticksToRegeneration: number;
}

/////////////////////////
// Nuke
/////////////////////////

/**
 * A nuke landing position. This object cannot be removed or modified. You can find incoming nukes in the room using the FIND_NUKES constant.
 */
declare const Nuke: _ConstructorById<Nuke>;
interface Nuke extends RoomObject, ObjectId {
    room: Room;
    /**
     * The name of the room where this nuke has been launched from.
     */
    launchRoomName: string;
    /**
     * The remaining landing time.
     */
    timeToLand: number;
}

/////////////////////////
// PathFinder
/////////////////////////

/**
 * Contains powerful methods for pathfinding in the game world. This module is written in fast native C++ code and supports custom navigation costs and paths which span multiple rooms.
 */
declare const PathFinder: PathFinder;
interface PathFinder {
    CostMatrix: CostMatrixConstructor;
    /**
     * Find an optimal path between origin and goal.
     *
     * @param origin The start position.
     * @param goal A goal or an array of goals. If more than one goal is supplied then the cheapest path found out of all the goals will be returned. A goal is either a RoomPosition or an object as defined below.
     * Important: Please note that if your goal is not walkable (for instance, a source) then you should set range to at least 1 or else you will waste many CPU cycles searching for a target that you can't walk on.
     * @param opts An object containing additional pathfinding flags.
     */
    search(origin: RoomPosition, goal: RoomPosition | { pos: RoomPosition, range: number } | RoomPosition[] | { pos: RoomPosition, range: number }[], opts?: PathFinderOpts): PathFinderPath;
    /**
     * Specify whether to use this new experimental pathfinder in game objects methods.
     * This method should be invoked every tick. It affects the following methods behavior:
     * Room.findPath, RoomPosition.findPathTo, RoomPosition.findClosestByPath, Creep.moveTo....
     * @deprecated This method is deprecated and will be removed soon.
     * @param isEnabled Whether to activate the new pathfinder or deactivate. The default is true.
     */
    use(isEnabled: boolean): void;
}

interface PathFinderPath {
    /**
     * An array of RoomPosition objects.
     */
    path: RoomPosition[];
    /**
     * Total number of operations performed before this path was calculated.
     */
    ops: number;
    /**
     * The total cost of the path as derived from plainCost, swampCost and any given CostMatrix instances.
     */
    cost: number;
    /**
     * If the pathfinder fails to find a complete path, this will be true. Note that path will still be populated with a partial path which represents the closest path it could find given the search parameters.
     */
    incomplete: boolean;
}

/**
 * An object containing additional pathfinding flags.
 */
interface PathFinderOpts {
    /**
     * Cost for walking on plain positions. The default is 1.
     */
    plainCost?: number;
    /**
     * Cost for walking on swamp positions. The default is 5.
     */
    swampCost?: number;
    /**
     * Instead of searching for a path to the goals this will search for a path away from the goals.
     * The cheapest path that is out of range of every goal will be returned. The default is false.
     */
    flee?: boolean;
    /**
     * The maximum allowed pathfinding operations. You can limit CPU time used for the search based on ratio 1 op ~ 0.001 CPU. The default value is 2000.
     */
    maxOps?: number;
    /**
     * The maximum allowed rooms to search. The default (and maximum) is 16.
     */
    maxRooms?: number;
    /**
     * The maximum allowed cost of the path returned. If at any point the pathfinder detects that it is impossible to find a path with a cost less than or equal to maxCost it will immediately halt the search. The default is Infinity.
     */
    maxCosts?: number;
    /**
     * Weight to apply to the heuristic in the A* formula F = G + weight * H. Use this option only if you understand
     * the underlying A* algorithm mechanics! The default value is 1.
     */
    heuristicWeight?: number;

    /**
     * Request from the pathfinder to generate a CostMatrix for a certain room. The callback accepts one argument, roomName.
     * This callback will only be called once per room per search. If you are running multiple pathfinding operations in a
     * single room and in a single tick you may consider caching your CostMatrix to speed up your code. Please read the
     * CostMatrix documentation below for more information on CostMatrix.
     *
     * @param roomName
     */
    roomCallback?(roomName: string): boolean | CostMatrix;
}

/**
 * Container for custom navigation cost data. By default PathFinder will only consider terrain data (plain, swamp, wall) — if you need to route around obstacles such as buildings or creeps you must put them into a CostMatrix. Generally you will create your CostMatrix from within roomCallback. If a non-0 value is found in a room's CostMatrix then that value will be used instead of the default terrain cost. You should avoid using large values in your CostMatrix and terrain cost flags. For example, running PathFinder.search with { plainCost: 1, swampCost: 5 } is faster than running it with {plainCost: 2, swampCost: 10 } even though your paths will be the same.
 */
interface CostMatrixConstructor {
    /**
     * Creates a new CostMatrix containing 0's for all positions.
     * @constructor
     */
    new(): CostMatrix;
    /**
     * Static method which deserializes a new CostMatrix using the return value of serialize.
     * @param val Whatever serialize returned
     * @returns Returns new CostMatrix instance
     */
    deserialize(val: number[]): CostMatrix;
}
interface CostMatrix {
    /**
     * Set the cost of a position in this CostMatrix.
     * @param x X position in the room.
     * @param y Y position in the room.
     * @param cost Cost of this position. Must be a whole number. A cost of 0 will use the terrain cost for that tile. A cost greater than or equal to 255 will be treated as unwalkable.
     */
    set(x: number, y: number, cost: number): void;
    /**
     * Get the cost of a position in this CostMatrix.
     * @param x X position in the room.
     * @param y Y position in the room.
     */
    get(x: number, y: number): number;
    /**
     * Copy this CostMatrix into a new CostMatrix with the same data.
     */
    clone(): CostMatrix;
    /**
     * Returns a compact representation of this CostMatrix which can be stored via JSON.stringify.
     * @returns An array of numbers. There's not much you can do with the numbers besides store them for later.
     */
    serialize(): number[];
}

/////////////////////////
// RawMemory
/////////////////////////

/**
 * RawMemory object allows to implement your own memory stringifier instead of built-in serializer based on JSON.stringify. It also allows to request up to 10 MB of additional memory using asynchronous memory segments feature.
 * You can also access memory segments of other players using methods below.
 */
declare const RawMemory: RawMemory;
interface RawMemory {
    /**
     * An object with asynchronous memory segments available on this tick. Each object key is the segment ID with data in string values. Use setActiveSegments to fetch segments on the next tick. Segments data is saved automatically in the end of the tick. The maximum size per segment is 100 KB.
     */
    segments: { [segmentId: string]: string };
    /**
     * An object with a memory segment of another player available on this tick. Use setActiveForeignSegment to fetch segments on the next tick.
     */
    foreignSegment: ForeignMemorySegment | undefined;
    /**
     * A string with a shared memory segment available on every world shard. Maximum string length is 100 KB.
     * Warning: this segment is not safe for concurrent usage! All shards have shared access to the same instance of data. When the segment contents is changed by two shards simultaneously, you may lose some data, since the segment string value is written all at once atomically. You must implement your own system to determine when each shard is allowed to rewrite the inter-shard memory, e.g. based on mutual exclusions.
     * @deprecated This property is deprecated and will be removed soon. Please use InterShardMemory instead.
     */
    interShardSegment: string;
    /**
     * Get a raw string representation of the Memory object.
     */
    get(): string;
    /**
     * Set new memory value.
     * @param value New memory value as a string.
     */
    set(value: string): void;
    /**
     * Request memory segments using the list of their IDs. Memory segments will become available on the next tick in RawMemory.segments object.
     * @param ids An array of segment IDs. Each ID should be a number from 0 to 99. Maximum 10 segments can be active at the same time. Subsequent calls of setActiveSegments override previous ones.
     */
    setActiveSegments(ids: number[]): void;
    /**
     * Request a memory segment of another user.
     * The segment should be marked by its owner as public using setPublicSegments.
     * The segment data will become available on the next tick in foreignSegment object.
     * You can only have access to one foreign segment at the same time.
     * @param {(string | null)} username The name of another user. Pass null to clear the foreign segment.
     * @param {number} [id] The ID of the requested segment from 0 to 99. If undefined, the user's default public segment is requested as set by setDefaultPublicSegment.
     */
    setActiveForeignSegment(username: string | null, id?: number): void;
    /**
     * Set the specified segment as your default public segment.
     * It will be returned if no id parameter is passed to setActiveForeignSegment by another user.
     * @param {(number | null)} id The ID of the memory segment from 0 to 99. Pass null to remove your default public segment.
     */
    setDefaultPublicSegment(id: number | null): void;
    /**
     * Set specified segments as public. Other users will be able to request access to them using setActiveForeignSegment.
     * @param {number[]} ids An array of segment IDs. Each ID should be a number from 0 to 99. Subsequent calls of setPublicSegments override previous ones.
     */
    setPublicSegments(ids: number[]): void;
}

interface ForeignMemorySegment {
    /**
     * Another player's name.
     */
    username: string;
    /**
     * The ID of the requested memory segment.
     */
    id: number;
    /**
     * The segment contents.
     */
    data: string;
}

/////////////////////////
// Resource
/////////////////////////

/**
 * A dropped piece of resource. It will decay after a while if not picked up. Dropped resource pile decays for ceil(amount/1000) units per tick.
 */
declare const Resource: _ConstructorById<Resource>;
interface Resource extends RoomObject, ObjectId {
    room: Room;
    /**
     * The amount of resource units containing.
     */
    amount: number;
    /**
     * One of the `RESOURCE_*` constants.
     */
    resourceType: ResourceType;
}

/////////////////////////
// RoomObject
/////////////////////////

/**
 * Any object with a position in a room. Almost all game objects prototypes
 * are derived from RoomObject.
 */
declare const RoomObject: {
    new(x: number, y: number, roomName: string): RoomObject;
};
interface RoomObject {
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

/////////////////////////
// RoomPosition
/////////////////////////

/**
 * An object representing the specified position in the room. Every object in the room contains RoomPosition as the pos property. The position object of a custom location can be obtained using the Room.getPositionAt() method or using the constructor.
 */
declare const RoomPosition: {
    /**
     * You can create new RoomPosition object using its constructor.
     * @param x X position in the room.
     * @param y Y position in the room.
     * @param roomName The room name.
     */
    new(x: number, y: number, roomName: string): RoomPosition;
};
interface RoomPosition {
    /**
     * The name of the room.
     */
    roomName: string;
    /**
     * X position in the room.
     */
    x: number;
    /**
     * Y position in the room.
     */
    y: number;
    /**
     * Create new ConstructionSite at the specified location.
     * @param structureType One of the STRUCTURE_* constants.
     * @param name The name of the structure, for structures that support it (currently only spawns).
     */
    createConstructionSite(structureType: StructureType, name?: string): OK | ERR_INVALID_TARGET | ERR_FULL | ERR_INVALID_ARGS | ERR_RCL_NOT_ENOUGH;
    /**
     * Create new Flag at the specified location.
     * @param name The name of a new flag. It should be unique, i.e. the Game.flags object should not contain another flag with the same name (hash key). If not defined, a random name will be generated.
     * @param color The color of a new flag. Should be one of the COLOR_* constants
     * @param secondaryColor The secondary color of a new flag. Should be one of the COLOR_* constants. The default value is equal to color.
     */
    createFlag(name?: string, color?: ColorType, secondaryColor?: ColorType): string | ERR_NAME_EXISTS | ERR_INVALID_ARGS;
    /**
     * Find an object with the shortest path from the given position. Uses Jump Point Search algorithm and Dijkstra's algorithm.
     * @param type See Room.find
     * @param objects An array of room's objects or RoomPosition objects that the search should be executed against.
     * @param opts An object containing pathfinding options (see Room.findPath), or one of the following: filter, algorithm
     * @todo allow objects to be a union type of subtypes of RoomObject
     */
    findClosestByPath(type: FIND_EXIT_TOP | FIND_EXIT_RIGHT | FIND_EXIT_BOTTOM | FIND_EXIT_LEFT | FIND_EXIT, opts?: FindClosestByPathOpts<RoomPosition>): RoomPosition | null;
    findClosestByPath(type: FIND_CREEPS | FIND_MY_CREEPS | FIND_HOSTILE_CREEPS, opts?: FindClosestByPathOpts<Creep>): Creep | null;
    findClosestByPath(type: FIND_SOURCES_ACTIVE | FIND_SOURCES, opts?: FindClosestByPathOpts<Source>): Source | null;
    findClosestByPath(type: FIND_DROPPED_RESOURCES, opts?: FindClosestByPathOpts<Resource>): Resource | null;
    findClosestByPath(type: FIND_STRUCTURES | FIND_MY_STRUCTURES | FIND_HOSTILE_STRUCTURES, opts?: FindClosestByPathOpts<Structure>): Structure | null;
    findClosestByPath(type: FIND_FLAGS, opts?: FindClosestByPathOpts<Flag>): Flag | null;
    findClosestByPath(type: FIND_MY_SPAWNS | FIND_HOSTILE_SPAWNS, opts?: FindClosestByPathOpts<StructureSpawn>): StructureSpawn | null;
    findClosestByPath(type: FIND_CONSTRUCTION_SITES | FIND_MY_CONSTRUCTION_SITES | FIND_HOSTILE_CONSTRUCTION_SITES, opts?: FindClosestByPathOpts<ConstructionSite>): ConstructionSite | null;
    findClosestByPath(type: FIND_MINERALS, opts?: FindClosestByPathOpts<Mineral>): Mineral | null;
    findClosestByPath(type: FIND_NUKES, opts?: FindClosestByPathOpts<Nuke>): Nuke | null;
    findClosestByPath(type: FIND_TOMBSTONES, opts?: FindClosestByPathOpts<Tombstone>): Tombstone | null;
    findClosestByPath(type: FIND_POWER_CREEPS | FIND_MY_POWER_CREEPS | FIND_HOSTILE_POWER_CREEPS, opts?: FindClosestByPathOpts<PowerCreep>): PowerCreep | null;
    findClosestByPath(type: FIND_DEPOSITS, opts?: FindClosestByPathOpts<Deposit>): Deposit | null;
    findClosestByPath(type: FIND_RUINS, opts?: FindClosestByPathOpts<Ruin>): Ruin | null;
    findClosestByPath<T extends RoomObject>(objects: T[], opts?: FindClosestByPathOpts<T>): T | null;
    findClosestByPath(objects: RoomPosition[], opts?: FindClosestByPathOpts<RoomPosition>): RoomPosition | null;
    /**
     * Find an object with the shortest linear distance from the given position.
     * @param type See Room.find.
     * @param objects An array of room's objects or RoomPosition objects that the search should be executed against.
     * @param opts An object containing one of the following options: filter
     */
    findClosestByRange(type: FIND_EXIT_TOP | FIND_EXIT_RIGHT | FIND_EXIT_BOTTOM | FIND_EXIT_LEFT | FIND_EXIT, opts?: FindClosestByRangeOpts<RoomPosition>): RoomPosition | null;
    findClosestByRange(type: FIND_CREEPS | FIND_MY_CREEPS | FIND_HOSTILE_CREEPS, opts?: FindClosestByRangeOpts<Creep>): Creep | null;
    findClosestByRange(type: FIND_SOURCES_ACTIVE | FIND_SOURCES, opts?: FindClosestByRangeOpts<Source>): Source | null;
    findClosestByRange(type: FIND_DROPPED_RESOURCES, opts?: FindClosestByRangeOpts<Resource>): Resource | null;
    findClosestByRange(type: FIND_STRUCTURES | FIND_MY_STRUCTURES | FIND_HOSTILE_STRUCTURES, opts?: FindClosestByRangeOpts<Structure>): Structure | null;
    findClosestByRange(type: FIND_FLAGS, opts?: FindClosestByRangeOpts<Flag>): Flag | null;
    findClosestByRange(type: FIND_MY_SPAWNS | FIND_HOSTILE_SPAWNS, opts?: FindClosestByRangeOpts<StructureSpawn>): StructureSpawn | null;
    findClosestByRange(type: FIND_CONSTRUCTION_SITES | FIND_MY_CONSTRUCTION_SITES | FIND_HOSTILE_CONSTRUCTION_SITES, opts?: FindClosestByRangeOpts<ConstructionSite>): ConstructionSite | null;
    findClosestByRange(type: FIND_MINERALS, opts?: FindClosestByRangeOpts<Mineral>): Mineral | null;
    findClosestByRange(type: FIND_NUKES, opts?: FindClosestByRangeOpts<Nuke>): Nuke | null;
    findClosestByRange(type: FIND_TOMBSTONES, opts?: FindClosestByRangeOpts<Tombstone>): Tombstone | null;
    findClosestByRange(type: FIND_POWER_CREEPS | FIND_MY_POWER_CREEPS | FIND_HOSTILE_POWER_CREEPS, opts?: FindClosestByRangeOpts<PowerCreep>): PowerCreep | null;
    findClosestByRange(type: FIND_DEPOSITS, opts?: FindClosestByRangeOpts<Deposit>): Deposit | null;
    findClosestByRange(type: FIND_RUINS, opts?: FindClosestByRangeOpts<Ruin>): Ruin | null;
    findClosestByRange<T extends RoomObject>(objects: T[], opts?: FindClosestByRangeOpts<T>): T | null;
    findClosestByRange(objects: RoomPosition[], opts?: FindClosestByRangeOpts<RoomPosition>): RoomPosition | null;
    /**
     * Find all objects in the specified linear range.
     * @param type See Room.find.
     * @param objects An array of room's objects or RoomPosition objects that the search should be executed against.
     * @param range The range distance.
     * @param opts See Room.find.
     */
    findInRange(type: FIND_EXIT_TOP | FIND_EXIT_RIGHT | FIND_EXIT_BOTTOM | FIND_EXIT_LEFT | FIND_EXIT, opts?: FindPathOpts): RoomPosition | null;
    findInRange(type: FIND_CREEPS | FIND_MY_CREEPS | FIND_HOSTILE_CREEPS, opts?: FindPathOpts): Creep | null;
    findInRange(type: FIND_SOURCES_ACTIVE | FIND_SOURCES, opts?: FindPathOpts): Source | null;
    findInRange(type: FIND_DROPPED_RESOURCES, opts?: FindPathOpts): Resource | null;
    findInRange(type: FIND_STRUCTURES | FIND_MY_STRUCTURES | FIND_HOSTILE_STRUCTURES, opts?: FindPathOpts): Structure | null;
    findInRange(type: FIND_FLAGS, opts?: FindPathOpts): Flag | null;
    findInRange(type: FIND_MY_SPAWNS | FIND_HOSTILE_SPAWNS, opts?: FindPathOpts): StructureSpawn | null;
    findInRange(type: FIND_CONSTRUCTION_SITES | FIND_MY_CONSTRUCTION_SITES | FIND_HOSTILE_CONSTRUCTION_SITES, opts?: FindPathOpts): ConstructionSite | null;
    findInRange(type: FIND_MINERALS, opts?: FindPathOpts): Mineral | null;
    findInRange(type: FIND_NUKES, opts?: FindPathOpts): Nuke | null;
    findInRange(type: FIND_TOMBSTONES, opts?: FindPathOpts): Tombstone | null;
    findInRange(type: FIND_POWER_CREEPS | FIND_MY_POWER_CREEPS | FIND_HOSTILE_POWER_CREEPS, opts?: FindPathOpts): PowerCreep | null;
    findInRange(type: FIND_DEPOSITS, opts?: FindPathOpts): Deposit | null;
    findInRange(type: FIND_RUINS, opts?: FindPathOpts): Ruin | null;
    findInRange<T extends RoomObject>(objects: T[], opts?: FindPathOpts): T | null;
    findInRange(objects: RoomPosition[], opts?: FindPathOpts): RoomPosition | null;
    /**
     * Find an optimal path to the specified position using Jump Point Search algorithm. This method is a shorthand for Room.findPath. If the target is in another room, then the corresponding exit will be used as a target
     * @param x X position in the room.
     * @param y Y position in the room.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @param opts An object containing pathfinding options flags (see Room.findPath for more details).
     */
    findPathTo(x: number, y: number, opts?: FindPathOpts): PathStep[];
    findPathTo(target: RoomPosition | { pos: RoomPosition }, opts?: FindPathOpts): PathStep[];
    /**
     * Get linear direction to the specified position.
     * @param x X position in the room.
     * @param y Y position in the room.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @returns A number representing one of the direction constants.
     */
    getDirectionTo(x: number, y: number): Direction;
    getDirectionTo(target: RoomPosition | { pos: RoomPosition }): Direction;
    /**
     * Get linear range to the specified position.
     * @param x X position in the room.
     * @param y Y position in the room.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @returns A number of squares to the given position.
     */
    getRangeTo(x: number, y: number): number;
    getRangeTo(target: RoomPosition | { pos: RoomPosition }): number;
    /**
     * Check whether this position is in the given range of another position.
     * @param x X position in the room.
     * @param y Y position in the room.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @param range The range distance.
     * @returns A boolean value.
     */
    inRangeTo(x: number, y: number, range: number): boolean;
    inRangeTo(target: RoomPosition | { pos: RoomPosition }, range: number): boolean;
    /**
     * Check whether this position is the same as the specified position.
     * @param x X position in the room.
     * @param y Y position in the room.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @returns A boolean value.
     */
    isEqualTo(x: number, y: number): boolean;
    isEqualTo(target: RoomPosition | { pos: RoomPosition }): boolean;
    /**
     * Check whether this position is on the adjacent square to the specified position. The same as inRangeTo(target, 1).
     * @param x X position in the room.
     * @param y Y position in the room.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @returns A boolean value.
     */
    isNearTo(x: number, y: number): boolean;
    isNearTo(target: RoomPosition | { pos: RoomPosition }): boolean;
    /**
     * Get the list of objects at the specified room position.
     * @returns An array with objects at the specified position.
     */
    look(): LookResult[];
    /**
     * Get an object with the given type at the specified room position.
     * @param type One of the LOOK_* constants.
     * @returns An array of objects of the given type at the specified position if found.
     */
    lookFor(type: LOOK_CREEPS): Creep[];
    lookFor(type: LOOK_ENERGY): Resource[];
    lookFor(type: LOOK_RESOURCES): Resource[];
    lookFor(type: LOOK_SOURCES): Source[];
    lookFor(type: LOOK_MINERALS): Mineral[];
    lookFor(type: LOOK_DEPOSITS): Deposit[];
    lookFor(type: LOOK_STRUCTURES): Structure[];
    lookFor(type: LOOK_FLAGS): Flag[];
    lookFor(type: LOOK_CONSTRUCTION_SITES): ConstructionSite[];
    lookFor(type: LOOK_NUKES): Nuke[];
    lookFor(type: LOOK_TERRAIN): TerrainType[];
    lookFor(type: LOOK_TOMBSTONES): Tombstone[];
    lookFor(type: LOOK_POWER_CREEPS): PowerCreep[];
    lookFor(type: LOOK_RUINS): Ruin[];
}

type FindClosestByPathOpts<T> = FindPathOpts & {
    filter?: Filter<T>;
    algorithm?: 'astar' | 'dijkstra';
};

type FindClosestByRangeOpts<T> = FindPathOpts & {
    filter?: Filter<T>;
};

/////////////////////////
// RoomVisual
/////////////////////////

/**
 * Room visuals provide a way to show various visual debug info in game rooms. You can use the RoomVisual object to draw simple shapes that are visible only to you. Every existing Room object already contains the visual property, but you also can create new RoomVisual objects for any room (even without visibility) using the constructor.
 *
 * Room visuals are not stored in the database, their only purpose is to display something in your browser. All drawings will persist for one tick and will disappear if not updated. All RoomVisual API calls have no added CPU cost (their cost is natural and mostly related to simple JSON.serialize calls). However, there is a usage limit: you cannot post more than 500 KB of serialized data per one room (see getSize method).
 *
 * All draw coordinates are measured in game coordinates and centered to tile centers, i.e. (10,10) will point to the center of the creep at x:10; y:10 position. Fractional coordinates are allowed.
 */
declare const RoomVisual: {
    /**
     * You can directly create new RoomVisual object in any room, even if it's invisible to your script.
     * @param roomName The room name. If undefined, visuals will be posted to all rooms simultaneously.
     */
    new(roomName?: string): RoomVisual;
};
interface RoomVisual {
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
    lineStyle?: 'dashed' | 'dotted';
}

interface PolyStyle {
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
    lineStyle?: 'dashed' | 'dotted';
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
    align?: 'center' | 'left' | 'right';
    /**
     * Opacity value, default is 1.0.
     */
    opacity?: number;
}

/////////////////////////
// Room
/////////////////////////

/**
 * An object representing the room in which your units and structures are in. It can be used to look around, find paths, etc. Every object in the room contains its linked Room instance in the room property.
 */
declare const Room: _ConstructorById<Room> & {
    Terrain: TerrainConstructor;
    /**
     * Serialize a path array into a short string representation, which is suitable to store in memory.
     * @param path A path array retrieved from Room.findPath.
     * @returns A serialized string form of the given path.
     */
    serializePath(path: PathStep[]): string;
    /**
     * Deserialize a short string path representation into an array form.
     * @param path A serialized path string.
     * @returns A path array.
     */
    deserializePath(path: string): PathStep[];
};
interface Room {
    /**
     * The Controller structure of this room, if present, otherwise undefined.
     */
    controller: StructureController | undefined;
    /**
     * Total amount of energy available in all spawns and extensions in the room.
     */
    energyAvailable: number;
    /**
     * Total amount of energyCapacity of all spawns and extensions in the room.
     */
    energyCapacityAvailable: number;
    /**
     * A shorthand to Memory.rooms[room.name]. You can use it for quick access the room’s specific memory data object.
     */
    memory: any;
    /**
     * The name of the room.
     */
    name: string;
    /**
     * The Storage structure of this room, if present, otherwise undefined.
     */
    storage: StructureStorage | undefined;
    /**
     * The Terminal structure of this room, if present, otherwise undefined.
     */
    terminal: StructureTerminal | undefined;
    /**
     * The RoomVisual object for this room.
     */
    visual: RoomVisual;
    /**
     * Create new ConstructionSite at the specified location.
     * @param x The X position.
     * @param y The Y position.
     * @param pos Can be a RoomPosition object or any object containing RoomPosition.
     * @param structureType One of the following constants: STRUCTURE_EXTENSION, STRUCTURE_RAMPART, STRUCTURE_ROAD, STRUCTURE_SPAWN, STRUCTURE_WALL, STRUCTURE_LINK
     * @param name The name of the structure, for structures that support it (currently only spawns).
     * @returns Result Code: OK, ERR_INVALID_TARGET, ERR_INVALID_ARGS, ERR_RCL_NOT_ENOUGH
     */
    createConstructionSite(x: number, y: number, structureType: StructureType, name?: string): OK | ERR_INVALID_TARGET | ERR_FULL | ERR_INVALID_ARGS | ERR_RCL_NOT_ENOUGH;
    createConstructionSite(pos: RoomPosition | { pos: RoomPosition }, structureType: StructureType, name?: string): OK | ERR_INVALID_TARGET | ERR_FULL | ERR_INVALID_ARGS | ERR_RCL_NOT_ENOUGH;
    /**
     * Create new Flag at the specified location.
     * @param x The X position.
     * @param y The Y position.
     * @param pos Can be a RoomPosition object or any object containing RoomPosition.
     * @param name (optional) The name of a new flag. It should be unique, i.e. the Game.flags object should not contain another flag with the same name (hash key). If not defined, a random name will be generated.
     * @param color The color of a new flag. Should be one of the COLOR_* constants. The default value is COLOR_WHITE.
     * @param secondaryColor The secondary color of a new flag. Should be one of the COLOR_* constants. The default value is equal to color.
     */
    createFlag(x: number, y: number, name?: string, color?: ColorType, secondaryColor?: ColorType): string | ERR_NAME_EXISTS | ERR_FULL | ERR_INVALID_ARGS;
    createFlag(pos: RoomPosition | { pos: RoomPosition }, name?: string, color?: ColorType, secondaryColor?: ColorType): string | ERR_NAME_EXISTS | ERR_FULL | ERR_INVALID_ARGS;
    /**
     * Find all objects of the specified type in the room. Results are cached automatically for the specified room and type before applying any custom filters. This automatic cache lasts until the end of the tick.
     * @param type One of the FIND_* constants.
     * @param opts An object with additional options
     * @returns An array with the objects found.
     */
    find(type: FIND_EXIT_TOP | FIND_EXIT_RIGHT | FIND_EXIT_BOTTOM | FIND_EXIT_LEFT | FIND_EXIT, opts?: { filter: Filter<RoomPosition> }): RoomPosition[];
    find(type: FIND_CREEPS | FIND_MY_CREEPS | FIND_HOSTILE_CREEPS, opts?: { filter: Filter<Creep> }): Creep[];
    find(type: FIND_SOURCES_ACTIVE | FIND_SOURCES, opts?: { filter: Filter<Source> }): Source[];
    find(type: FIND_DROPPED_RESOURCES, opts?: { filter: Filter<Resource> }): Resource[];
    find<T extends Structure>(type: FIND_STRUCTURES | FIND_MY_STRUCTURES | FIND_HOSTILE_STRUCTURES, opts?: { filter: Filter<T> }): T[];
    find(type: FIND_FLAGS, opts?: { filter: Filter<Flag> }): Flag[];
    find(type: FIND_MY_SPAWNS | FIND_HOSTILE_SPAWNS, opts?: { filter: Filter<StructureSpawn> }): StructureSpawn[];
    find(type: FIND_CONSTRUCTION_SITES | FIND_MY_CONSTRUCTION_SITES | FIND_HOSTILE_CONSTRUCTION_SITES, opts?: { filter: Filter<ConstructionSite> }): ConstructionSite[];
    find(type: FIND_MINERALS, opts?: { filter: Filter<Mineral> }): Mineral[];
    find(type: FIND_NUKES, opts?: { filter: Filter<Nuke> }): Nuke[];
    find(type: FIND_TOMBSTONES, opts?: { filter: Filter<Tombstone> }): Tombstone[];
    find(type: FIND_POWER_CREEPS | FIND_MY_POWER_CREEPS | FIND_HOSTILE_POWER_CREEPS, opts?: { filter: Filter<PowerCreep> }): PowerCreep[];
    find(type: FIND_DEPOSITS, opts?: { filter: Filter<Deposit> }): Deposit[];
    find(type: FIND_RUINS, opts?: { filter: Filter<Ruin> }): Ruin[];
    /**
     * Find the exit direction en route to another room. Please note that this method is not required for inter-room movement, you can simply pass the target in another room into Creep.moveTo method.
     * @param room Another room name or room object.
     * @returns The room direction constant, one of the following: FIND_EXIT_TOP, FIND_EXIT_RIGHT, FIND_EXIT_BOTTOM, FIND_EXIT_LEFT
     * Or one of the following error codes: ERR_NO_PATH, ERR_INVALID_ARGS
     */
    findExitTo(room: string | Room): FindExitType | ERR_NO_PATH | ERR_INVALID_ARGS;
    /**
     * Find an optimal path inside the room between fromPos and toPos using Jump Point Search algorithm.
     * @param fromPos The start position.
     * @param toPos The end position.
     * @param opts (optional) An object containing additonal pathfinding flags
     * @returns An array with path steps
     */
    findPath(fromPos: RoomPosition, toPos: RoomPosition, opts?: FindPathOpts): PathStep[];
    /**
     * Returns an array of events happened on the previous tick in this room.
     * @param raw If this parameter is false or undefined, the method returns an object parsed using JSON.parse which incurs some CPU cost on the first access (the return value is cached on subsequent calls). If raw is truthy, then raw JSON in string format is returned.
     */
    getEventLog(raw?: false): RoomEvent[];
    getEventLog(raw: true): string;
    /**
     * Creates a RoomPosition object at the specified location.
     * @param x The X position.
     * @param y The Y position.
     * @returns A RoomPosition object or null if it cannot be obtained.
     */
    getPositionAt(x: number, y: number): RoomPosition | null;
    /**
     * Get a Room.Terrain object which provides fast access to static terrain data. This method works for any room in the world even if you have no access to it.
     */
    getTerrain(): Terrain;
    /**
     * Get the list of objects at the specified room position.
     * @param x The X position.
     * @param y The Y position.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @returns An array with objects at the specified position.
     */
    lookAt(x: number, y: number): LookResult[];
    lookAt(target: RoomPosition | { pos: RoomPosition }): LookResult[];
    /**
     * Get the list of objects at the specified room area. This method is more CPU efficient in comparison to multiple lookAt calls.
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @param asArray Set to true if you want to get the result as a plain array.
     * @returns An object with all the objects in the specified area
     */
    lookAtArea(top: number, left: number, bottom: number, right: number, asArray?: false): PosMatrix<LookResult>;
    lookAtArea(top: number, left: number, bottom: number, right: number, asArray: true): WithPos<LookResult>[];
    /**
     * Get an object with the given type at the specified room position.
     * @param type One of the LOOK_* constants.
     * @param x The X position.
     * @param y The Y position.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @returns An array of objects of the given type at the specified position if found.
     */
    lookForAt(type: LOOK_CREEPS, x: number, y: number): Creep[];
    lookForAt(type: LOOK_ENERGY, x: number, y: number): Resource[];
    lookForAt(type: LOOK_RESOURCES, x: number, y: number): Resource[];
    lookForAt(type: LOOK_SOURCES, x: number, y: number): Source[];
    lookForAt(type: LOOK_MINERALS, x: number, y: number): Mineral[];
    lookForAt(type: LOOK_DEPOSITS, x: number, y: number): Deposit[];
    lookForAt(type: LOOK_STRUCTURES, x: number, y: number): Structure[];
    lookForAt(type: LOOK_FLAGS, x: number, y: number): Flag[];
    lookForAt(type: LOOK_CONSTRUCTION_SITES, x: number, y: number): ConstructionSite[];
    lookForAt(type: LOOK_NUKES, x: number, y: number): Nuke[];
    lookForAt(type: LOOK_TERRAIN, x: number, y: number): TerrainType[];
    lookForAt(type: LOOK_TOMBSTONES, x: number, y: number): Tombstone[];
    lookForAt(type: LOOK_POWER_CREEPS, x: number, y: number): PowerCreep[];
    lookForAt(type: LOOK_RUINS, x: number, y: number): Ruin[];
    lookForAt(type: LOOK_CREEPS, target: RoomPosition | { pos: RoomPosition }): Creep[];
    lookForAt(type: LOOK_ENERGY, target: RoomPosition | { pos: RoomPosition }): Resource[];
    lookForAt(type: LOOK_RESOURCES, target: RoomPosition | { pos: RoomPosition }): Resource[];
    lookForAt(type: LOOK_SOURCES, target: RoomPosition | { pos: RoomPosition }): Source[];
    lookForAt(type: LOOK_MINERALS, target: RoomPosition | { pos: RoomPosition }): Mineral[];
    lookForAt(type: LOOK_DEPOSITS, target: RoomPosition | { pos: RoomPosition }): Deposit[];
    lookForAt(type: LOOK_STRUCTURES, target: RoomPosition | { pos: RoomPosition }): Structure[];
    lookForAt(type: LOOK_FLAGS, target: RoomPosition | { pos: RoomPosition }): Flag[];
    lookForAt(type: LOOK_CONSTRUCTION_SITES, target: RoomPosition | { pos: RoomPosition }): ConstructionSite[];
    lookForAt(type: LOOK_NUKES, target: RoomPosition | { pos: RoomPosition }): Nuke[];
    lookForAt(type: LOOK_TERRAIN, target: RoomPosition | { pos: RoomPosition }): TerrainType[];
    lookForAt(type: LOOK_TOMBSTONES, target: RoomPosition | { pos: RoomPosition }): Tombstone[];
    lookForAt(type: LOOK_POWER_CREEPS, target: RoomPosition | { pos: RoomPosition }): PowerCreep[];
    lookForAt(type: LOOK_RUINS, target: RoomPosition | { pos: RoomPosition }): Ruin[];
    /**
     * Get the list of objects with the given type at the specified room area. This method is more CPU efficient in comparison to multiple lookForAt calls.
     * @param type One of the following string constants: constructionSite, creep, energy, exit, flag, source, structure, terrain
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @returns An object with all the objects of the given type in the specified area
     */
    lookForAtArea(type: LOOK_CREEPS, top: number, left: number, bottom: number, right: number, asArray?: false): PosMatrix<Creep | undefined>;
    lookForAtArea(type: LOOK_ENERGY, top: number, left: number, bottom: number, right: number, asArray?: false): PosMatrix<Resource | undefined>;
    lookForAtArea(type: LOOK_RESOURCES, top: number, left: number, bottom: number, right: number, asArray?: false): PosMatrix<Resource | undefined>;
    lookForAtArea(type: LOOK_SOURCES, top: number, left: number, bottom: number, right: number, asArray?: false): PosMatrix<Source | undefined>;
    lookForAtArea(type: LOOK_MINERALS, top: number, left: number, bottom: number, right: number, asArray?: false): PosMatrix<Mineral | undefined>;
    lookForAtArea(type: LOOK_DEPOSITS, top: number, left: number, bottom: number, right: number, asArray?: false): PosMatrix<Deposit | undefined>;
    lookForAtArea(type: LOOK_STRUCTURES, top: number, left: number, bottom: number, right: number, asArray?: false): PosMatrix<Structure | undefined>;
    lookForAtArea(type: LOOK_FLAGS, top: number, left: number, bottom: number, right: number, asArray?: false): PosMatrix<Flag | undefined>;
    lookForAtArea(type: LOOK_CONSTRUCTION_SITES, top: number, left: number, bottom: number, right: number, asArray?: false): PosMatrix<ConstructionSite | undefined>;
    lookForAtArea(type: LOOK_NUKES, top: number, left: number, bottom: number, right: number, asArray?: false): PosMatrix<Nuke | undefined>;
    lookForAtArea(type: LOOK_TERRAIN, top: number, left: number, bottom: number, right: number, asArray?: false): PosMatrix<TerrainType>;
    lookForAtArea(type: LOOK_TOMBSTONES, top: number, left: number, bottom: number, right: number, asArray?: false): PosMatrix<Tombstone | undefined>;
    lookForAtArea(type: LOOK_POWER_CREEPS, top: number, left: number, bottom: number, right: number, asArray?: false): PosMatrix<PowerCreep | undefined>;
    lookForAtArea(type: LOOK_RUINS, top: number, left: number, bottom: number, right: number, asArray?: false): PosMatrix<Ruin | undefined>;
    lookForAtArea(type: LOOK_CREEPS, top: number, left: number, bottom: number, right: number, asArray: true): WithPos<LookForCreepResult>[];
    lookForAtArea(type: LOOK_ENERGY, top: number, left: number, bottom: number, right: number, asArray: true): WithPos<LookForEnergyResult>[];
    lookForAtArea(type: LOOK_RESOURCES, top: number, left: number, bottom: number, right: number, asArray: true): WithPos<LookForResourceResult>[];
    lookForAtArea(type: LOOK_SOURCES, top: number, left: number, bottom: number, right: number, asArray: true): WithPos<LookForSourceResult>[];
    lookForAtArea(type: LOOK_MINERALS, top: number, left: number, bottom: number, right: number, asArray: true): WithPos<LookForMineralResult>[];
    lookForAtArea(type: LOOK_DEPOSITS, top: number, left: number, bottom: number, right: number, asArray: true): WithPos<LookForDepositResult>[];
    lookForAtArea(type: LOOK_STRUCTURES, top: number, left: number, bottom: number, right: number, asArray: true): WithPos<LookForStructureResult>[];
    lookForAtArea(type: LOOK_FLAGS, top: number, left: number, bottom: number, right: number, asArray: true): WithPos<LookForFlagResult>[];
    lookForAtArea(type: LOOK_CONSTRUCTION_SITES, top: number, left: number, bottom: number, right: number, asArray: true): WithPos<LookForConstructionSiteResult>[];
    lookForAtArea(type: LOOK_NUKES, top: number, left: number, bottom: number, right: number, asArray: true): WithPos<LookForNukeResult>[];
    lookForAtArea(type: LOOK_TERRAIN, top: number, left: number, bottom: number, right: number, asArray: true): WithPos<LookForTerrainResult>[];
    lookForAtArea(type: LOOK_TOMBSTONES, top: number, left: number, bottom: number, right: number, asArray: true): WithPos<LookForTombstoneResult>[];
    lookForAtArea(type: LOOK_POWER_CREEPS, top: number, left: number, bottom: number, right: number, asArray: true): WithPos<LookForPowerCreepResult>[];
    lookForAtArea(type: LOOK_RUINS, top: number, left: number, bottom: number, right: number, asArray: true): WithPos<LookForRuinResult>[];
}

type RoomEvent = {
    objectId: string;
} & ({
    event: EVENT_ATTACK;
    data: {
        targetId: string;
        damage: number;
        attackType: EventAttackType;
    };
} | {
    event: EVENT_OBJECT_DESTROYED;
    data: {
        type: RoomObjectType;
    };
} | {
    event: EVENT_ATTACK_CONTROLLER;
    data: {
    };
} | {
    event: EVENT_BUILD;
    data: {
        targetId: string;
        amount: number;
        energySpent: number;
    };
} | {
    event: EVENT_HARVEST;
    data: {
        targetId: string;
        amount: number;
    };
} | {
    event: EVENT_HEAL;
    data: {
        targetId: string;
        amount: number;
        healType: EventHealType;
    };
} | {
    event: EVENT_REPAIR;
    data: {
        targetId: string;
        amount: number;
        energySpent: number;
    };
} | {
    event: EVENT_RESERVE_CONTROLLER;
    data: {
        amount: number;
    };
} | {
    event: EVENT_UPGRADE_CONTROLLER;
    data: {
        amount: number;
        energySpent: number;
    };
} | {
    event: EVENT_EXIT;
    data: {
        room: string;
        x: number;
        y: number;
    };
} | {
    event: EVENT_POWER;
    data: {
        power: PowerType;
        targetId: string;
    };
} | {
    event: EVENT_TRANSFER;
    data: {
        targetId: string;
        resourceType: ResourceType;
        amount: number;
    };
});

/**
 * An object which provides fast access to room terrain data. These objects can be constructed for any room in the world even if you have no access to it.
 * Technically every Room.Terrain object is a very lightweight adapter to underlying static terrain buffers with corresponding minimal accessors.
 */
interface Terrain {
    /**
     * Get terrain type at the specified room position by (x,y) coordinates. Unlike the Game.map.getTerrainAt(...) method, this one doesn't perform any string operations and returns integer terrain type values (see below).
     * @param x X position in the room.
     * @param y Y position in the room.
     */
    get(x: number, y: number): TERRAIN_MASK_PLAIN | TERRAIN_MASK_WALL | TERRAIN_MASK_SWAMP;
    /**
     * Get copy of underlying static terrain buffer. Current underlying representation is Uint8Array.
     * WARNING: this method relies on underlying representation of terrain data. This is the fastest way to obtain terrain data of the whole room (2500 tiles), but users should keep in mind that it can be marked as deprecated anytime in the future, or return value type can be changed due to underlying data representation changing.
     * @param destinationArray A typed array view in which terrain will be copied to.
     * @returns Copy of underlying room terrain representations as a new Uint8Array typed array of size 2500.
     * Each element is an integer number, terrain type can be obtained by applying bitwise AND (&) operator with appropriate TERRAIN_MASK_* constant. Room tiles are stored row by row.
     * If destinationArray is specified, function returns reference to this filled destinationArray if coping succeeded, or error code otherwise.
     */
    getRawBuffer(destinationArray?: Uint8Array): Uint8Array | ERR_INVALID_ARGS;
}

interface TerrainConstructor {
    /**
     * Creates a new Terrain of room by its name. Terrain objects can be constructed for any room in the world even if you have no access to it.
     * @param roomName The room name.
     */
    new(roomName: string): Terrain;
}

/////////////////////////
// Ruin
/////////////////////////

/**
 * A destroyed structure. This is a walkable object.
 * - Decay - 500 ticks except some special cases
 */
declare const Ruin: _ConstructorById<Ruin>;
interface Ruin extends RoomObject, ObjectId {
    room: Room;
    /**
     * The time when the structure has been destroyed.
     */
    destroyTime: number;
    /**
     * A Store object that contains resources of this structure.
     */
    store: Store;
    /**
     * An object containing basic data of the destroyed structure.
     */
    structure: Structure | OwnedStructure;
    /**
     * The amount of game ticks before this ruin decays.
     */
    ticksToDecay: number;
}

/////////////////////////
// Source
/////////////////////////

/**
 * An energy source object. Can be harvested by creeps with a WORK body part.
 *
 * Energy amount
 *  - 4000 in center rooms
 *  - 3000 in an owned or reserved room
 *  - 1500 in an unreserved room
 *
 * Energy regeneration
 *  - Every 300 game ticks
 */
declare const Source: _ConstructorById<Source>;
interface Source extends RoomObject, ObjectId {
    room: Room;
    /**
     * The remaining amount of energy.
     */
    energy: number;
    /**
     * The total amount of energy in the source.
     */
    energyCapacity: number;
    /**
     * The remaining time after which the source will be refilled.
     */
    ticksToRegeneration: number;
}

/////////////////////////
// Store
/////////////////////////

type StoringStructure = { store: Store };

/**
 * An object that can contain resources in its cargo.
 *
 * There are two types of stores in the game: general purpose stores and limited stores.
 * - General purpose stores can contain any resource within its capacity (e.g. creeps, containers, storages, terminals).
 * - Limited stores can contain only a few types of resources needed for that particular object (e.g. spawns, extensions, labs, nukers).
 *
 * The Store prototype is the same for both types of stores, but they have different behavior depending on the resource argument in its methods.
 *
 * You can get specific resources from the store by addressing them as object properties: console.log(creep.store[RESOURCE_ENERGY]);
 */
declare const Store: {
    new(object: StoringStructure): Store;
};
interface Store {
    /**
     * Returns capacity of this store for the specified resource, or total capacity if resource is undefined.
     * @param resource The type of the resource.
     * @returns Returns capacity number, or null in case of a not valid resource for this store type.
     */
    getCapacity(resource?: ResourceType): number | null;
    /**
     * A shorthand for getCapacity(resource) - getUsedCapacity(resource).
     * @param resource The type of the resource.
     * @returns Returns free capacity number, or null in case of a not valid resource for this store type.
     */
    getFreeCapacity(resource?: ResourceType): number | null;
    /**
     * Returns the capacity used by the specified resource, or total used capacity for general purpose stores if resource is undefined.
     * @param resource The type of the resource.
     * @returns Returns used capacity number, or null in case of a not valid resource for this store type.
     */
    getUsedCapacity(resource?: ResourceType): number | null;
}

/////////////////////////
// Structure
/////////////////////////

/**
 * The base prototype object of all structures.
 */
declare const Structure: _ConstructorById<Structure>;
interface Structure extends RoomObject, ObjectId {
    room: Room;
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
declare const OwnedStructure: _ConstructorById<OwnedStructure>;
interface OwnedStructure extends Structure, OwnedObject {
}

/**
 * A small container that can be used to store resources. This is a walkable structure. All dropped resources automatically goes to the container at the same tile.
 */
declare const StructureContainer: _ConstructorById<StructureContainer>;
interface StructureContainer extends Structure {
    /**
     * A Store object that contains cargo of this structure.
     */
    store: Store;
    /**
     * The amount of game ticks when this container will lose some hit points.
     */
    ticksToDecay: number;
}

/**
 * Claim this structure to take control over the room. The controller structure cannot be damaged or destroyed.
 */
declare const StructureController: _ConstructorById<StructureController>;
interface StructureController extends OwnedStructure {
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

declare type Rcl = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
declare type OwnedRcl = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

interface ReservationDefinition {
    /**
     * The name of a player who reserved this controller.
     */
    username: string;
    /**
     * The amount of game ticks when the reservation will end.
     */
    ticksToEnd: number;
}

interface SignDefinition {
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
declare const StructureExtension: _ConstructorById<StructureExtension>;
interface StructureExtension extends OwnedStructure {
    /**
     * A Store object that contains cargo of this structure.
     */
    store: Store;
}

/**
 * Allows to harvest mineral deposits.
 */
declare const StructureExtractor: _ConstructorById<StructureExtractor>;
interface StructureExtractor extends OwnedStructure {
    /**
     * The amount of game ticks until the next harvest action is possible.
     */
    cooldown: number;
}

/**
 * Produces trade commodities from base minerals and other commodities.
 */
declare const StructureFactory: _ConstructorById<StructureFactory>;
interface StructureFactory extends OwnedStructure {
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
declare const StructureInvaderCore: _ConstructorById<StructureInvaderCore>;
interface StructureInvaderCore extends OwnedStructure {
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
declare const StructureKeeperLair: _ConstructorById<StructureKeeperLair>;
interface StructureKeeperLair extends OwnedStructure {
    /**
     * Time to spawning of the next Source Keeper.
     */
    ticksToSpawn: number;
}

/**
 * Produces mineral compounds from base minerals and boosts creeps.
 */
declare const StructureLab: _ConstructorById<StructureLab>;
interface StructureLab extends OwnedStructure {
    /**
     * The amount of game ticks the lab has to wait until the next reaction is possible.
     */
    cooldown: number;
    /**
     * The type of minerals containing in the lab. Labs can contain only one mineral type at the same time.
     */
    mineralType: MineralResourceType | BoostResourceType | undefined;
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
declare const StructureLink: _ConstructorById<StructureLink>;
interface StructureLink extends OwnedStructure {
    /**
     * The amount of game ticks the link has to wait until the next transfer is possible.
     */
    cooldown: number;
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
declare const StructureNuker: _ConstructorById<StructureNuker>;
interface StructureNuker extends OwnedStructure {
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
declare const StructureObserver: _ConstructorById<StructureObserver>;
interface StructureObserver extends OwnedStructure {
    /**
     * Provide visibility into a distant room from your script. The target room object will be available on the next tick.
     * @param roomName The name of the target room.
     */
    observeRoom(roomName: string): OK | ERR_NOT_OWNER | ERR_NOT_IN_RANGE | ERR_INVALID_ARGS | ERR_RCL_NOT_ENOUGH;
}

/**
 * Non-player structure. Contains power resource which can be obtained by destroying the structure. Hits the attacker creep back on each attack.
 */
declare const StructurePowerBank: _ConstructorById<StructurePowerBank>;
interface StructurePowerBank extends OwnedStructure {
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
declare const StructurePowerSpawn: _ConstructorById<StructurePowerSpawn>;
interface StructurePowerSpawn extends OwnedStructure {
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
declare const StructurePortal: _ConstructorById<StructurePortal>;
interface StructurePortal extends Structure {
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
declare const StructureRampart: _ConstructorById<StructureRampart>;
interface StructureRampart extends OwnedStructure {
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
declare const StructureRoad: _ConstructorById<StructureRoad>;
interface StructureRoad extends Structure {
    /**
     * The amount of game ticks when this road will lose some hit points.
     */
    ticksToDecay: number;
}

/**
 * Spawn is your colony center. This structure can create, renew, and recycle creeps. All your spawns are accessible through Game.spawns hash list. Spawns auto-regenerate a little amount of energy each tick, so that you can easily recover even if all your creeps died.
 */
declare const StructureSpawn: _ConstructorById<StructureSpawn> & {
    Spawning: _ConstructorById<Spawning>;
};
interface StructureSpawn extends OwnedStructure {
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
    directions?: Direction[];
}

/**
 * A structure that can store huge amount of resource units. Only one structure per room is allowed that can be addressed by Room.storage property.
 */
declare const StructureStorage: _ConstructorById<StructureStorage>;
interface StructureStorage extends OwnedStructure {
    /**
     * A Store object that contains cargo of this structure.
     */
    store: Store;
}

/**
 * Sends any resources to a Terminal in another room. The destination Terminal can belong to any player. Each transaction requires additional energy (regardless of the transfer resource type) that can be calculated using Game.market.calcTransactionCost method. For example, sending 1000 mineral units from W0N0 to W10N5 will consume 742 energy units. You can track your incoming and outgoing transactions using the Game.market object. Only one Terminal per room is allowed that can be addressed by Room.terminal property.
 *
 * Terminals are used in the Market system.
 */
declare const StructureTerminal: _ConstructorById<StructureTerminal>;
interface StructureTerminal extends OwnedStructure {
    /**
     * The remaining amount of ticks while this terminal cannot be used to make StructureTerminal.send or Game.market.deal calls.
     */
    cooldown: number;
    /**
     * A Store object that contains cargo of this structure.
     */
    store: Store;
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
declare const StructureTower: _ConstructorById<StructureTower>;
interface StructureTower extends OwnedStructure {
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
declare const StructureWall: _ConstructorById<StructureWall>;
interface StructureWall extends Structure {
}

/////////////////////////
// Tombstone
/////////////////////////

/**
 * A remnant of dead creeps. This is a walkable object.
 */
declare const Tombstone: _ConstructorById<Tombstone>;
interface Tombstone extends RoomObject, ObjectId {
    room: Room;
    /**
     * An object containing the deceased creep or power creep.
     */
    creep: Creep | PowerCreep;
    /**
     * Time of death.
     */
    deathTime: number;
    /**
     * A Store object that contains cargo of this structure.
     */
    store: Store;
    /**
     * The amount of game ticks before this tombstone decays.
     */
    ticksToDecay: number;
}
