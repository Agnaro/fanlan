import { Functor } from ".";

export interface Apply<T> extends Functor<T> {
    /**
     * fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b
     */
    ap: () => {}
}