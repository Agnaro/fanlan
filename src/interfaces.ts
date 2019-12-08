
interface Container {
    x:any;
    inspect: () => string;
}

export interface Setoid extends Container {
    /**
     * equals :: Setoid a => a ~> a -> Boolean
     */
    equals: (a:Setoid) => boolean;
}

interface Ord extends Setoid {

}