"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
describe("#Setoid", () => {
    class Num {
        constructor(val) {
            this.x = val;
        }
        inspect() {
            return `Num(${this.x})`;
        }
        /**
         * equals
         */
        equals(a) {
            return this.x === a.x;
        }
    }
    it("reflexive", () => {
        const a = new Num(3);
        chai_1.expect(a.equals(a)).to.be.true;
    });
    it("symmetric", () => {
        const a = new Num(3);
        const b = new Num(3);
        const c = new Num(4);
        chai_1.expect(a.equals(b)).to.eq(b.equals(a));
        chai_1.expect(a.equals(c)).to.eq(c.equals(a));
    });
    it("transitive", () => {
        const testTransitivity = (a, b, c) => {
            if (a.equals(b) && b.equals(c)) {
                chai_1.expect(a.equals(c)).to.be.true;
            }
        };
        const a = new Num(3);
        const b = new Num(3);
        const c = new Num(3);
        testTransitivity(a, b, c);
    });
});
//# sourceMappingURL=intefaces.spec.js.map