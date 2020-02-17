import { Applicative } from "./applicative";
import { Chain } from "./chain";
import { cons } from "../helpers/helpers";

/**
 * 1. M.of(a).chain(f) is equivalent to f(a) (left identity)
 * 2. m.chain(M.of) is equivalent to m (right identity)
 */
export class Monad<T> implements Applicative<T>, Chain<T> {
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
