type Trunc<T> = T extends string
  ? T extends `${infer F}.${string}`
    ? F
    : T
  : T extends number
  ? Trunc<`${T}`>
  : never
