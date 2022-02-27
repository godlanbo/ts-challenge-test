/**
 * 'AB' =  '' \ A \ B \ AB \ BA
 *  = Res<B> extends Res<A>
 *  = B | '' extends A | ''
 *  = BA | B | A | ''
 *
 * ABC = '' | A | B | C | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'
 *  = Res<BC> extends Res<A>
 *  = B | C | BC | CB | '' extends A | ''
 *  = BA | B |
 */

type HandleAll<T, U = T> = [T] extends [never]
  ? ''
  : T extends string
  ? `${T | ''}${HandleAll<Exclude<U, T>>}`
  : never

type AllCombinations<S extends string> = HandleAll<StringToUnion<S>>
