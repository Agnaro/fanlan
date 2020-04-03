/**
 * 1. a.concat(b).concat(c) is equivalent to a.concat(b.concat(c)) (associativity)
 */
export interface Semigroup<A> {
    /**
     * fantasy-land/concat :: Semigroup a => a ~> a -> a
     */
    concat: (val: Semigroup<A>) => Semigroup<A>
}