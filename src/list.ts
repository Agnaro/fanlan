// Apply
// apply :: forall a b. f (a -> b) -> f a -> f b

import { Monad, Chain, Container } from "./type-classes";

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
  
  // type Apply <= Applicative
  // of/pure :: forall a. Applicative f => a -> f a
  function of<T>(val:T): Array<T> {
    return [val]
  }

  export class List<T> implements Container, Monad<T> {
    x: T[];
    
    constructor(val?: T) {
      this.x = val ? [val] : [];
    }

    inspect() {
      return `List ${this.x}`
    };
    of(val: T) {
      return new List(val);
    };
    ap: () => {};
    map: () => {};
    chain: <R extends Chain<T>>(fn: (val: T) => R) => R;
  }