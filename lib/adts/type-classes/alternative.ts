import { Applicative } from "./applicative";
import { Plus } from "./plus";

/**
 * 1. x.ap(f.alt(g)) is equivalent to x.ap(f).alt(x.ap(g)) (distributivity)
 * 2. x.ap(A.zero()) is equivalent to A.zero() (annihilation)
 */
export interface Alternative<A> extends Applicative<A>, Plus<A> {}
