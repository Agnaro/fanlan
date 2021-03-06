import { Functor } from ".";
import { Func } from "./types";

/**
 * 1. v.ap(u.ap(a.map(f => g => x => f(g(x))))) is equivalent to v.ap(u).ap(a) (composition)
 */
export interface Apply<A> extends Functor<A> {
  /**
   * fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b
   */
  ap<B extends Apply<any>>(fn: Func<A, B>): Apply<B>;
}
