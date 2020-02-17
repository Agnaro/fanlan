import { assert } from "chai";
import { eqProps } from "ramda";

export function assertAdtIsEql<A>(a0: A, a1: A): void {
  assert(eqProps("value", a0, a1));
}
