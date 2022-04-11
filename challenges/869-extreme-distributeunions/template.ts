type DistributeUnionsWithObject<T, K = UnionToTuple<keyof T>> = K extends [
  infer L,
  ...infer R,
]
  ? DistributeUnions<T[L & keyof T]> extends infer V
    ? V extends any
      ? MergeIntersection<
          { [P in keyof T & L]: V } & DistributeUnionsWithObject<T, R>
        >
      : never
    : never
  : {}

type DistributeUnionsWithArray<T> = T extends [infer L, ...infer R]
  ? DistributeUnions<L> extends infer U
    ? U extends any
      ? [U, ...DistributeUnions<R>]
      : never
    : never
  : []

type DistributeUnions<T> = T extends any
  ? T extends any[]
    ? DistributeUnionsWithArray<T>
    : T extends object
    ? DistributeUnionsWithObject<T>
    : T
  : never
