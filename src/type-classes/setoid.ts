
// find some what to force that you can only compare against the same type
// not other Setoids
export interface Setoid<T> {
    /**
     * fantasy-land/equals :: Setoid a => a ~> a -> Boolean
     */
    equals: (b: Setoid<T>) => boolean;
}