import { Monoid } from "./monoid";

export interface Group<T> extends Monoid<T> {
    /**
     * fantasy-land/invert :: Group g => g ~> () -> g
     */
    invert: () => Group<T>
}