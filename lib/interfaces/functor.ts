/**
 * 1. u.map(a => a) is equivalent to u (identity)
 * 2. u.map(x => f(g(x))) is equivalent to u.map'(g).map(f) (composition)
 */
export interface Functor {
  /**
   * fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b
   */
  map: () => {};
}
