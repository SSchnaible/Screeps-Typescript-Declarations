import { ERR_INVALID_ARGS, OK, ERR_NOT_OWNER, ERR_NOT_ENOUGH_RESOURCES, ORDER_SELL, ORDER_BUY, ResourceType, SUBSCRIPTION_TOKEN, ERR_FULL, ERR_TIRED } from "./constants-types";

/**
 * A global object representing the in-game market. You can use this object to track resource transactions to/from your
 * terminals, and your buy/sell orders. The object is accessible via the singleton Game.market property.
 */
export interface Market {
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
