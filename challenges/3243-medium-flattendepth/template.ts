type FlattenDepth<
  T,
  N extends number = 1,
  J extends any[] = []
> = J['length'] extends N
  ? T
  : T extends [infer F, ...infer R]
  ? F extends unknown[]
    ? [...FlattenDepth<F, N, [0, ...J]>, ...FlattenDepth<R, N, J>]
    : [F, ...FlattenDepth<R, N, J>]
  : T
