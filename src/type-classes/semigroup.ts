
export interface Semigroup {
    /**
     * fantasy-land/concat :: Semigroup a => a ~> a -> a
     */
    concat: <T extends Semigroup>(val: T) => T
}