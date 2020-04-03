import { Semigroupoid } from ".";

/**
 * 1. a.compose(C.id()) is equivalent to a (right identity)
 * 2. C.id().compose(a) is equivalent to a (left identity)
 */
export interface Category<I, J, K> extends Semigroupoid<I, J, K> {
    /**
     * fantasy-land/id :: Category c => () -> c a a
     */
    id: () => {};
  }
  