import { Applicative, Chain } from ".";

/**
 * 1. M.of(a).chain(f) is equivalent to f(a) (left identity)
 * 2. m.chain(M.of) is equivalent to m (right identity)
 */
export interface Monad<M> extends Applicative<M>, Chain<M> {}