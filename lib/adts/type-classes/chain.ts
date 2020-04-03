import { Applicative } from ".";
import { Func } from "./types";

/**
 * 1. m.chain(f).chain(g) is equivalent to m.chain(x => f(x).chain(g)) (associativity)
 */
export interface Chain<A> extends Applicative<A> {
    /**
     * fantasy-land/chain :: Chain m => m a ~> (a -> m b) -> m b
     */
    chain: <B extends Chain<A>>(fn: Func<A, B>)=> Chain<A>
}