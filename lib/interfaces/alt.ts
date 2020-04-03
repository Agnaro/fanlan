import { Functor } from "./functor";

/**
 * 1. a.alt(b).alt(c) is equivalent to a.alt(b.alt(c)) (associativity)
 * 2. a.alt(b).map(f) is equivalent to a.map(f).alt(b['fantasy-land/map(f)) (distributivity)
 */
export interface Alt<A> extends Functor<A> {
  /**
   * fantasy-land/alt :: Alt f => f a ~> f a -> f a
   */
  alt: () => {};
}
