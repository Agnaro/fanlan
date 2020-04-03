import { Alt } from "./alt";

/**
 * 1. x.alt(A.zero()) is equivalent to x (right identity)
 * 2. A.zero().alt(x) is equivalent to x (left identity)
 * 3. A.zero().map(f) is equivalent to A.zero() (annihilation)
 */
export interface Plus<A> extends Alt<A> {
  /**
   * fantasy-land/zero :: Plus f => () -> f a
   */
  zero: () => {};
}
