import { ADT } from "./adt";
import { Applicative } from "./type-classes";

export class Compose<T> implements ADT, Applicative<T> {
  value: T;
  inspect: () => string;
  of: () => {};
  ap: () => {};
  map: () => {};
  constructor(c) {
    this.value = c;
  }
}
