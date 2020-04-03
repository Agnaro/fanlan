import { Extend } from "./extend";

/**
 * 1. w.extend(_w => _w.extract()) is equivalent to w (left identity)
 * 2. w.extend(f).extract() is equivalent to f(w) (right identity)
 */
export interface Comonad<A> extends Extend<A> {
  /**
   * fantasy-land/extract :: Comonad w => w a ~> () -> a
   */
  extract: () => {};
}
