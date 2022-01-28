type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends string | number | boolean | Function
    ? T[P]
    : DeepReadonly<T[P]>
}
