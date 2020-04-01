// Apply
// apply :: forall a b. f (a -> b) -> f a -> f b

import { Monad, Chain, Container } from "../type-classes";
import { Monoid } from "../type-classes/monoid";

// ap :: Array (a -> b) -> Array a -> Array b
function ap<A,B>(
  fnArr: Array<(a0:A)=>B>, 
  arr: Array<A>
): Array<B> {
    const out = [];
    for(let f=0; f < fnArr.length; f++){
      for(let d=0; d < arr.length; d++){
        out.push(fnArr[f](arr[d]))
      }
    }
    return out;
  }

  export class List<T> implements Container, Monad<T>, Monoid<T> {
    x: T[];
    
    constructor(...val: T[]) {
      this.x = val ? val : [];
    }

    inspect(): string {
      return `List ${this.x}`
    };
    of(val: T): List<T> {
      return new List(val);
    };
    ap: () => {};
    map: () => {};
    chain: <R extends Chain<T>>(fn: (val: T) => R) => R;
    concat(val: List<T>): List<T> {
      return new List(...this.x.concat(val.x))
    }
    empty(): List<T> {
      return new List();
    }
  }