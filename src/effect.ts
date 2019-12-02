import { EffectType } from "./constants-types";

export interface Effect {
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