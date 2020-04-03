import { Functor } from "./functor";

/**
 * 1. p.bimap(a => a, b => b) is equivalent to p (identity)
 * 2. p.bimap(a => f(g(a)), b => h(i(b)) is equivalent to p.bimap(g, i).bimap(f, h) (composition)
 */
export interface Bifunctor<A> extends Functor<A> {
  /**
   * fantasy-land/bimap :: Bifunctor f => f a c ~> (a -> b, c -> d) -> f b d
   */
  bimap: () => {};
}
