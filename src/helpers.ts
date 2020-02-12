/**
 * Breaks an array into its head and tail
 */
export function cons<T>(array: T[]):[T,T[]]{
    const [x,...y] = array;
    return [x,y];
}