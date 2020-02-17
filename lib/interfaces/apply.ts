import { Functor } from "./functor";

/**
 * 1. v.ap(u.ap(a.map(f => g => x => f(g(x))))) is equivalent to v.ap(u).ap(a) (composition)
 */
export interface Apply extends Functor {
  /**
   * fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b
   */
  ap: () => {};
}
