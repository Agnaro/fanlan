import { Functor } from "./functor";

/**
 * 1. w.extend(g).extend(f) is equivalent to w.extend(_w => f(_w.extend(g)))
 */
export interface Extend<A> extends Functor<A> {
  /**
   * fantasy-land/extend :: Extend w => w a ~> (w a -> b) -> w b
   */
  extend: () => {};
}
