import { Apply } from "./apply";

/**
 * 1. v.ap(A.of(x => x)) is equivalent to v (identity)
 * 2. A.of(x).ap(A.of(f)) is equivalent to A.of(f(x)) (homomorphism)
 * 3. A.of(y).ap(u) is equivalent to u.ap(A.of(f => f(y))) (interchange)
 */
export interface Applicative<A> extends Apply<A> {
  /**
   * fantasy-land/of :: Applicative f => a -> f a
   */
  of: (a: A) => Applicative<A>;
}
