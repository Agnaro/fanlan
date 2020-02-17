import { Chain } from "./chain";

/**
 * 1. M.chainRec((next, done, v) => p(v) ? d(v).map(done) : n(v).map(next), i) is equivalent to (function step(v) { return p(v) ? d(v) : n(v).chain(step); }(i)) (equivalence)
 * 2. Stack usage of M.chainRec(f, i) must be at most a constant multiple of the stack usage of f itself.
 */
export interface ChainRec<A> extends Chain<A> {
  /**
   * fantasy-land/chainRec :: ChainRec m => ((a -> c, b -> c, a) -> m c, a) -> m b
   */
  chainRec: () => {};
}
