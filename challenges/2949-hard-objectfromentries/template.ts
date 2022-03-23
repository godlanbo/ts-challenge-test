type ObjectFromEntries<T> = MergeIntersection<
  UnionToIntersection<
    T extends any
      ? T extends [infer L, infer R]
        ? { [P in L & string]: R }
        : never
      : never
  >
>
