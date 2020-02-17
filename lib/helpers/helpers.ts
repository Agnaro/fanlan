/**
 * Breaks an array into its head and tail
 */
export function cons<T>(array: T[]):[T,T[]]{
    const [x,...y] = array;
    return [x,y];
}

export function liftA2(fn,a1,a2) {
    return a1.map(fn).ap(a2)
  }