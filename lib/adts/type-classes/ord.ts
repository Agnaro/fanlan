import { Setoid } from ".";

export interface Ord<T> extends Setoid<T> {
    /**
     * fantasy-land/lte :: Ord a => a ~> a -> Boolean
     */
    lte: (b: Ord<T>) => boolean;
}
