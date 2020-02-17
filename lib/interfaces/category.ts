import { Semigroupoid } from "./semigroupoid";

/**
 * 1. a.compose(C.id()) is equivalent to a (right identity)
 * 2. C.id().compose(a) is equivalent to a (left identity)
 */
export interface Category extends Semigroupoid {
  /**
   * fantasy-land/id :: Category c => () -> c a a
   */
  id: () => {};
}
