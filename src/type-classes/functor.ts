
export interface Functor {
    /**
     * fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b
     */
    map: () => {}
}