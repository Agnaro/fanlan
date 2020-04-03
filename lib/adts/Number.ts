import { ADT } from "./adt";
import { Setoid } from "./type-classes";


export class Number implements ADT, Setoid<number> {
  value: number;
  public inspect(): string {
    return `Num(${this.value})`;
  }

  constructor(val: number) {
    this.value = val;
  }
  /**
   * equals
   */
  public equals(a: Number) {
    return this.value === a.value;
  }
}

export function number(a: number): Number {
  return new Number(a);
}
