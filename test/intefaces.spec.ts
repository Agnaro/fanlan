import { expect } from "chai";
import { Setoid } from "../src/interfaces";

describe("#Setoid", () => {
    class Num implements Setoid {
        public inspect(): string {
            return `Num(${this.x})`
        }
        public x:number;
        constructor(val:number) { this.x = val;}
        /**
         * equals
         */
        public equals(a:Num) {
            return this.x === a.x;
        }
    }
    it('reflexive',() => {
        const a = new Num(3);
        expect(a.equals(a)).to.be.true;
    })
    it('symmetric')
    it('transitive')
})