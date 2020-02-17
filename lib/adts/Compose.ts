import { ADT, Applicative } from "../interfaces";

export class Compose<T> implements ADT<T>, Applicative<T> {
  value: T;
  inspect: () => string;
  of: () => {};
  ap: () => {};
  map: () => {};
  constructor(c) {
    this.value = c;
  }
}
