import { Functor } from "./functor";

/**
 * 1. p.promap(a => a, b => b) is equivalent to p (identity)
 * 2. p.promap(a => f(g(a)), b => h(i(b))) is equivalent to p.promap(f, i).promap(g, h) (composition)
 */
export interface Profunctor<A> extends Functor<A> {
  /**
   * fantasy-land/promap :: Profunctor p => p b c ~> (a -> b, c -> d) -> p a d
   */
  promap: () => {};
}
