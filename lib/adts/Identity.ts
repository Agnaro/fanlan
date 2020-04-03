import { defaultInspect } from "../helpers/helpers";
import { ADT } from "./adt";
import { Monad, Applicative, Apply, Chain, Func } from "./type-classes";

export class Identity<A> implements ADT, Monad<A> {
  value: A;
  inspect = defaultInspect("Identity", this.value);
  of: (a: A) => Applicative<A>;
  ap: <B extends Apply<any>>(fn: Func<A, B>) => Apply<B>;
  map<B>(fn: Func<A, B>): Identity<B> {
    return identity<B>(fn(this.value));
  }
  chain: <B extends Chain<any>>(fn: Func<A, B>) => B;

  constructor(a: A) {
    this.value = a;
  }
}

export function identity<A>(a: A): Identity<A> {
  return new Identity<A>(a);
}
