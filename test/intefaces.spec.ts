import { expect } from "chai";
import { Setoid } from "../src/type-classes";

describe("#Setoid", () => {
  class Num implements Setoid {
    public inspect(): string {
      return `Num(${this.x})`;
    }
    public x: number;
    constructor(val: number) {
      this.x = val;
    }
    /**
     * equals
     */
    public equals(a: Num) {
      return this.x === a.x;
    }
  }
  it("reflexive", () => {
    const a = new Num(3);
    expect(a.equals(a)).to.be.true;
  });
  it("symmetric", () => {
    const a = new Num(3);
    const b = new Num(3);
    const c = new Num(4);
    expect(a.equals(b)).to.eq(b.equals(a));
    expect(a.equals(c)).to.eq(c.equals(a));
  });
  it("transitive", () => {
      const testTransitivity = (a, b, c) => {
    if (a.equals(b) && b.equals(c)) {
      expect(a.equals(c)).to.be.true;
    }
  };
    const a = new Num(3);
    const b = new Num(3);
    const c = new Num(3);

    testTransitivity(a,b,c);
  });
});
