type Permutation<T, U = T> = [T] extends [never]
  ? []
  : T extends U
  ? [T, ...Permutation<Exclude<U, T>>]
  : []

/**
 * A | B | C extends A | B | C
 *  = A extends A | B | C
 *      = [A, B | C extends B | C]
 *      B | C extends B | C = (B extends B | C) | (C extends B | C)
 *                          = ([B, C]) | ([C, B])
 *      = [A, ...([B, C] | [C, B])]
 *      = [A, B, C] | [A, C, B]
 *    B extends A | B | C
 *  上同 = [B, A, C] | [B, C, A]
 *    C extends A | B | C
 *  上同 = [C, A, B] | [C, B, A]
 */