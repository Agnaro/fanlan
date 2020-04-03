import { Setoid } from ".";

/**
 * 1. a.lte(b) or b.lte(a) (totality)
 * 2. If a.lte(b) and b.lte(a), then a.equals(b) (antisymmetry)
 * 3. If a.te(b) and b.lte(c), then a.lte(c) (transitivity)
 */
export interface Ord<A> extends Setoid<A> {
    /**
     * fantasy-land/lte :: Ord a => a ~> a -> Boolean
     */
    lte: (b: Ord<A>) => boolean;
}
