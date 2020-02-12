
export interface Container {
    x:any;
    inspect: () => string;
}

// find some what to force that you can only compare against the same type
// not other Setoids
export interface Setoid extends Container {
    /**
     * fantasy-land/equals :: Setoid a => a ~> a -> Boolean
     */
    equals: (b:Setoid) => boolean;
}

export interface Ord extends Setoid {
    /**
     * fantasy-land/lte :: Ord a => a ~> a -> Boolean
     */
    lte: (b:Ord) => boolean;
}

export interface Semigroupoid extends Container {
    /**
     * fantasy-land/compose :: Semigroupoid c => c i j ~> c j k -> c i k
     */
    compose: (b:Semigroupoid) => Semigroupoid
}

export interface Category extends Semigroupoid {
    /**
     * fantasy-land/id :: Category c => () -> c a a
     */
    id: () => {}
}

export interface Functor {
    /**
     * fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b
     */
    map: () => {}
}

export interface Apply extends Functor {
    /**
     * fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b
     */
    ap: () => {}
}

export interface Applicative extends Apply {
    /**
     * fantasy-land/of :: Applicative f => a -> f a
     */
    of: () => {}
}

export interface Chain<M> extends Applicative {
    /**
     * fantasy-land/chain :: Chain m => m a ~> (a -> m b) -> m b
     */
    chain: <R extends Chain<M>>(fn:(val:M)=>R) => R;
}