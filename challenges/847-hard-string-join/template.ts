type HandleStringJoin<S extends unknown[], D extends string> = S extends [
  infer L,
  ...infer R
]
  ? R['length'] extends 0
    ? L
    : `${L & string}${D}${HandleStringJoin<R, D>}`
  : ''

declare function join<T extends string>(
  delimiter: T
): <R extends string[]>(...parts: R) => HandleStringJoin<R, T>
