import { identity, Identity } from "../../lib/adts";
import { expect } from "chai";
import { assertAdtIsEql } from "../testHelpers";

describe("$Identity", () => {
  describe("@Functor", () => {
    const val = 1;
    let u: Identity<number>;
    beforeEach(() => {
      u = identity(val);
    });
    it("u['fantasy-land/map'](a => a) is equivalent to u (identity)", () => {
      assertAdtIsEql(
        u.map(a => a),
        u
      );
    });
  });
});
