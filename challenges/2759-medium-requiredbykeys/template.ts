type RequiredByKeys<T, K = never> = [K] extends [never]
  ? Required<T>
  : MergeIntersection<
      {
        [P in keyof T as P extends K ? P : never]-?: T[P]
      } & {
        [P in keyof T as P extends K ? never : P]?: T[P]
      }
    >
