// 实际就是归并排序
type MergeRes<
  A extends any[],
  B extends any[],
  Res extends any[] = [],
> = A extends [infer AL, ...infer AR]
  ? B extends [infer BL, ...infer BR]
    ? GreaterThan<AL & number, BL & number> extends true
      ? MergeRes<A, BR, [...Res, BL]>
      : MergeRes<AR, B, [...Res, AL]>
    : [...Res, ...A]
  : [...Res, ...B]

type SortHelper<T, Res extends any[] = []> = T extends [infer L, ...infer R]
  ? SortHelper<R, MergeRes<Res, [L]>>
  : Res

type Sort<T, B extends boolean = false> = B extends true
  ? Reverse<SortHelper<T>>
  : SortHelper<T>
