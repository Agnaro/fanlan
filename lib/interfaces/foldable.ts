/**
 * 1. x.ap(f.alt(g)) is equivalent to x.ap(f).alt(x.ap(g)) (distributivity)
 * 2. x.ap(A.zero()) is equivalent to A.zero() (annihilation)
 */
export interface Foldable<A> {
  /**
   * fantasy-land/reduce :: Foldable f => f a ~> ((b, a) -> b, b) -> b
   */
  reduce: () => {};
}
