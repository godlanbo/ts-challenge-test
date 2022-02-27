// type Fibonacci<T extends number> = T extends 1 | 0
//   ? T
//   : Concat<
//       Rec<`${Fibonacci<Shift<Rec<`${T}`>>['length']>}`>,
//       Rec<`${Fibonacci<Shift<Shift<Rec<`${T}`>>>['length']>}`>
//     >['length']
type Fibonacci<
  T extends number,
  Pre extends unknown[] = [],
  Now extends unknown[] = [1],
  Count extends unknown[] = [1]
> = Count['length'] extends T
  ? Now['length']
  : Fibonacci<T, Now, [...Pre, ...Now], [...Count, 1]>

// function feb(n: number): number {
//   let res = [0, 1]
//   for (let i = 2; i <= n; i++) {
//     res[i] = res[i - 1] + res[i - 2]
//   }
//   return res[n]
// }
