import { identity, Identity } from "../../lib/adts";
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
    it("u['fantasy-land/map'](x => f(g(x))) is equivalent to u['fantasy-land/map'](g)['fantasy-land/map'](f) (composition", () => {
      const f = x => x + 1;
      const g = x => x * 10;
      assertAdtIsEql(
        u.map(x => f(g(x))),
        u.map(g).map(f)
      );
    });
  });
});
