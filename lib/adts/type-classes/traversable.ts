import { Functor } from "./functor";
import { Foldable } from "./foldable";

/**
 * 1. t(u.traverse(F, x => x)) is equivalent to u.traverse(G, t) for any t such that t(a).map(f) is equivalent to t(a.map(f)) (naturality)
 * 2. u.traverse(F, F.of) is equivalent to F.of(u) for any Applicative F (identity)
 * 3. u.traverse(Compose, x => new Compose(x)) is equivalent to new Compose(u.traverse(F, x => x).map(x => x.traverse(G, x => x))) for Compose and any Applicatives F and G (composition)
 */
export interface Traversable<A> extends Functor<A>, Foldable<A> {
  /**
   * fantasy-land/traverse :: Applicative f, Traversable t => t a ~> (TypeRep f, a -> f b) -> f (t b)
   */
  traverse: () => {};
}
