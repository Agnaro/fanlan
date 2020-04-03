/**
 * Base type for all Algebraic Data Structures
 */
export interface ADT<T> {
  value: T;
  inspect(): string;
}
