import { Functor } from "./functor";

export interface Alt<T> extends Functor<T> {
    /**
     * fantasy-land/alt :: Alt f => f a ~> f a -> f a
     */
    alt: (a: Alt<T>) => Alt<T>
}