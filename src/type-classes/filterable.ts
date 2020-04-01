
export interface Filterable<T> {
    /**
     * fantasy-land/filter :: Filterable f => f a ~> (a -> Boolean) -> f a
     */
    filter: (fn: FilterFunction<T>) => Filterable<T>
}

export type FilterFunction<T> = (a: T) => boolean