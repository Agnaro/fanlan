import { Setoid } from ".";

export interface Ord extends Setoid {
    /**
     * fantasy-land/lte :: Ord a => a ~> a -> Boolean
     */
    lte: (b:Ord) => boolean;
}
