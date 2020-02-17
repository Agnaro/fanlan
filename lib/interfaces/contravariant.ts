/**
 * 1. u.contramap(a => a) is equivalent to u (identity)
 * 2. u.contramap(x => f(g(x))) is equivalent to u.contramap(f).contramap(g) (composition)
 */
export interface Contravariant<A> {
  /**
   * fantasy-land/contramap :: Contravariant f => f a ~> (b -> a) -> f b
   */
  contramap: () => {};
}
