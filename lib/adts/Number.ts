import { Setoid, ADT } from "../interfaces/";

export class Number implements ADT<number>, Setoid {
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
