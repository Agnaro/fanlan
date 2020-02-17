import { Semigroup } from "./semigroup";

/**
 * 1. m.concat(M.empty()) is equivalent to m (right identity)
 * 2. M.empty().concat(m) is equivalent to m (left identity)
 */
export interface Monoid extends Semigroup {
  /**
   * fantasy-land/empty :: Monoid m => () -> m
   */
  empty: () => {};
}
