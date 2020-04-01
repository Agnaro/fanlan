import { Apply } from ".";

export interface Applicative<T> extends Apply<T> {
    /**
     * fantasy-land/of :: Applicative f => a -> f a
     */
    of: (val: T) => Applicative<T>
}
