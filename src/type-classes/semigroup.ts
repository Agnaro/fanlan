
export interface Semigroup<T> {
    /**
     * fantasy-land/concat :: Semigroup a => a ~> a -> a
     */
    concat: (val: Semigroup<T>) => Semigroup<T>
}