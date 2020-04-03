export interface Contravariant<T> {
    /**
     * fantasy-land/contramap :: Contravariant f => f a ~> (b -> a) -> f b
     */
    contramap: <R>(fn: (a: R)=>T) => Contravariant<R>
}