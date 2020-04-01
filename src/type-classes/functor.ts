
export interface Functor<T> {
    /**
     * fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b
     */
    map: () => {}
}