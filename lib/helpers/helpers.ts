import { Monad, MonadExpression } from "../interfaces";

/**
 * Breaks an array into its head and tail
 */
export function cons<T>(array: T[]): [T, T[]] {
  const [x, ...y] = array;
  return [x, y];
}

export function liftA2(fn, a1, a2) {
  return a1.map(fn).ap(a2);
}

export function doBlock<M>(
  ...expr: MonadExpression<M>[]
): (...args: any[]) => Monad<M> {
  return function(...args: any[]): Monad<M> {
    const [head, tail] = cons(expr);
    if (!tail) {
      return head(args);
    } else {
      return head(args).chain(doBlock<M>(...tail));
    }
  };
}

export const defaultInspect = <A>(label: string, a: A) => (): string => {
  let str: string;
  switch (a) {
    case null:
      str = "null";
      break;
    case undefined:
      str = "undefined";
      break;
    default:
      if ((a as any).inspect) {
        str = (a as any).inspect();
      } else {
        str = a.toString();
      }
      break;
  }
  return `${label}(${str})`;
};
