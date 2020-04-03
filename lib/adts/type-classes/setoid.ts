
// find some what to force that you can only compare against the same type
// not other Setoids
/**
 * 1. a.equals(a) === true (reflexivity)
 * 2. a.equals(b) === b.equals(a) (symmetry)
 * 3. If a.equals(b) and b.equals(c), then a.equals(c) (transitivity)
 */
export interface Setoid<A> {
    /**
     * fantasy-land/equals :: Setoid a => a ~> a -> Boolean
     */
    equals: (a: Setoid<A>) => boolean;
}

export function isASetoid(s: any): s is Setoid<unknown> {
  return typeof s.equals === "function";
}
