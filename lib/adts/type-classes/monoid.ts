import { Semigroup } from "./semigroup";

export interface Monoid<T> extends Semigroup<T> {
    /**
     * fantasy-land/empty :: Monoid m => () -> m
     */
    empty: () => Monoid<T>
}