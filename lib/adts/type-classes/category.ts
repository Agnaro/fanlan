import { Semigroupoid } from ".";

export interface Category extends Semigroupoid {
    /**
     * fantasy-land/id :: Category c => () -> c a a
     */
    id: () => {}
}