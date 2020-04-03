/**
 * 1. a.equals(a) === true (reflexivity)
 * 2. a.equals(b) === b.equals(a) (symmetry)
 * 3. If a.equals(b) and b.equals(c), then a.equals(c) (transitivity)
 */
export interface Setoid {
  // TODO: find some way to force that you can only compare against the same type
  // not other Setoids
  /**
   * fantasy-land/equals :: Setoid a => a ~> a -> Boolean
   */
  equals: (b: Setoid) => boolean;
}

export function isASetoid(s: any): s is Setoid {
  return typeof s.equals === "function";
}
