/**
 * 1. a.compose(b).compose(c) === a.compose(b.compose(c)) (associativity)
 */
export interface Semigroupoid {
  /**
   * fantasy-land/compose :: Semigroupoid c => c i j ~> c j k -> c i k
   */
  compose: (b: Semigroupoid) => Semigroupoid;
}
