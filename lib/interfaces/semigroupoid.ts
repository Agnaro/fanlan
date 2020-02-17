/**
 * 1. a.compose(b).compose(c) === a.compose(b.compose(c)) (associativity)
 */
export interface Semigroupoid<I, J, K> {
  /**
   * fantasy-land/compose :: Semigroupoid c => c i j ~> c j k -> c i k
   */
  compose: <I, J, K>(b: Semigroupoid<I, J, K>) => Semigroupoid<I, J, K>;
}
