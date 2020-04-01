import { Applicative, Chain } from ".";

export interface Monad<T> extends Applicative<T>, Chain<T> {}