import { Monad } from "./type-classes";

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

export function monadDo<M>(...expr: MonadExpression<M>[]): (...args: any[]) => Monad<M> {
	return function(...args: any[]): Monad<M> {
		const [head, tail] = cons(expr);
		if (!tail) {
			return head(args);
		} else {
			return head(args).chain(monadDo<M>(...tail));
		}
	};
}

export type MonadExpression<M> = (...args: any[]) => Monad<M>;
