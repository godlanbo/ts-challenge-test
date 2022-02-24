type TupleToNestedObject<T extends string[], U> = T extends [
  infer F,
  ...infer R
]
  ? R extends string[]
    ? {
        [P in F & string]: TupleToNestedObject<R, U>
      }
    : never
  : U
