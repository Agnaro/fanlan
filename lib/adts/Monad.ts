import { Applicative, Chain, ADT } from "../interfaces";
import { cons } from "../helpers/helpers";

export class Monad<T> implements Applicative, Chain<T>, ADT {
  value: any;
  inspect: () => string;
  of: () => {};
  ap: () => {};
  map: () => {};
  chain<R extends Chain<T>>(fn: (val: T) => R): R {
    throw new Error("Not Implemented");
  }

  static do<M>(...expr: MonadExpression<M>[]): (...args: any[]) => Monad<M> {
    return function(...args: any[]): Monad<M> {
      const [head, tail] = cons(expr);
      if (!tail) {
        return head(args);
      } else {
        return head(args).chain(Monad.do<M>(...tail));
      }
    };
  }
  constructor() {}
}

export type MonadExpression<M> = (...args: any[]) => Monad<M>;
