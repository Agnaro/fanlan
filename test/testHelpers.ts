import { assert } from "chai";
import { eqProps } from "ramda";
import { isASetoid } from "../lib/interfaces";

export function assertAdtIsEql<A>(a0: A, a1: A): void {
  if (isASetoid(a0) && isASetoid(a1)) {
    assert(a0.equals(a1));
  } else {
    assert(eqProps("value", a0, a1));
  }
}
