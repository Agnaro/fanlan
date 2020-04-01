import { Functor } from ".";

export interface Apply extends Functor {
    /**
     * fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b
     */
    ap: () => {}
}