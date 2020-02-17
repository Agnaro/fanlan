/**
 * 1. v.filter(x => p(x) && q(x)) is equivalent to v.filter(p).filter(q) (distributivity)
 * 2. v.filter(x => true) is equivalent to v (identity)
 * 3. v.filter(x => false) is equivalent to w.filter(x => false) if v and w are values of the same Filterable (annihilation)
 */
export interface Filterable<A> {
  /**
   * fantasy-land/filter :: Filterable f => f a ~> (a -> Boolean) -> f a
   */
  filter: () => {};
}
