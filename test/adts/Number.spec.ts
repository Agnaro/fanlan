import { expect } from "chai";
import { Number } from "../../lib/adts";

describe("#Setoid", () => {
  it("reflexive", () => {
    const a = new Number(3);
    expect(a.equals(a)).to.be.true;
  });
  it("symmetric", () => {
    const a = new Number(3);
    const b = new Number(3);
    const c = new Number(4);
    expect(a.equals(b)).to.eq(b.equals(a));
    expect(a.equals(c)).to.eq(c.equals(a));
  });
  it("transitive", () => {
    const testTransitivity = (a, b, c) => {
      if (a.equals(b) && b.equals(c)) {
        expect(a.equals(c)).to.be.true;
      }
    };
    const a = new Number(3);
    const b = new Number(3);
    const c = new Number(3);

    testTransitivity(a, b, c);
  });
});
