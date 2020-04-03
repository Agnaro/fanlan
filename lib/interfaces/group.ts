import { Monoid } from "./monoid";

/**
 * 1. g.concat(g.invert()) is equivalent to g.constructor.empty() (right inverse)
 * 2. g.invert().concat(g) is equivalent to g.constructor.empty() (left inverse)
 */
export interface Group extends Monoid {
  /**
   * fantasy-land/invert :: Group g => g ~> () -> g
   */
  invert: () => {};
}
