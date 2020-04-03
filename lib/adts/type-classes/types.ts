import { Monad } from "./monad";

export type Func<A, B> = (a: A) => B;

export type MonadExpression<M> = (...args: any[]) => Monad<M>;
