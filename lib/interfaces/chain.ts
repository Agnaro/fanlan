import { Applicative } from "./applicative";

/**
 * 1. m.chain(f).chain(g) is equivalent to m.chain(x => f(x).chain(g)) (associativity)
 */
export interface Chain<M> extends Applicative {
  /**
   * fantasy-land/chain :: Chain m => m a ~> (a -> m b) -> m b
   */
  chain: <R extends Chain<M>>(fn: (val: M) => R) => R;
}
