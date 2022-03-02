type Chunk<
  T extends unknown[],
  N extends number,
  Count extends unknown[] = [],
  Temp extends unknown[] = [],
  Res extends unknown[] = []
> = T extends [infer Frist, ...infer Rest]
  ? Count['length'] extends N
    ? Chunk<T, N, [], [], [...Res, Temp]>
    : Chunk<Rest, N, [...Count, 0], [...Temp, Frist], Res>
  : Temp extends []
  ? Res
  : [...Res, Temp]

// type Chunk<T, U, A extends any[] = []> = T extends [infer F, ...infer Rest]
//   ? A['length'] extends U
//     ? [A, ...Chunk<Rest, U, [F]>]
//     : Chunk<Rest, U, [...A, F]>
//   : A['length'] extends 0
//   ? []
//   : [A]
