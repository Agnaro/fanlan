
interface Container {
    x:any;
    inspect: () => string;
}

// find some what to force that you can only compare against the same type
// not other Setoids
export interface Setoid extends Container {
    /**
     * equals :: Setoid a => a ~> a -> Boolean
     */
    equals: (b:Setoid) => boolean;
}

interface Ord extends Setoid {
    lte: (b:Ord) => boolean;
}

interface Semigroupoid extends Container {
    compose: (b:Semigroupoid) => Semigroupoid
}

interface Category extends Semigroupoid {
    
}