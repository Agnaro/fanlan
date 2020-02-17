import { ADT, Monad, Chain } from "../interfaces";

export default class Identity<A> implements ADT<A>, Monad<A> {}
