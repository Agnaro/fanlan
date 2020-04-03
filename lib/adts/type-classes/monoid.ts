import { Semigroup } from ".";

/**
 * 1. m.concat(M.empty()) is equivalent to m (right identity)
 * 2. M.empty().concat(m) is equivalent to m (left identity)
 */
export interface Monoid<M> extends Semigroup<M> {
    /**
     * fantasy-land/empty :: Monoid m => () -> m
     */
    empty: () => Monoid<M>
}