import { Setoid } from "./interfaces";

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