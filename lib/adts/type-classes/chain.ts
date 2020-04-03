import { Applicative } from ".";

export interface Chain<T> extends Applicative<T> {
    /**
     * fantasy-land/chain :: Chain m => m a ~> (a -> m b) -> m b
     */
    chain: <R extends Chain<T>>(fn:(val:T)=>R)=> Chain<T>
}