type AppendToObject<T, U extends string, V> = {
  // [P in (keyof T | U)]: Equal<T[P], unknown> extends true ? V : T[P]
  [P in keyof T | U]: (T & { [P in U]: V })[P]
}
