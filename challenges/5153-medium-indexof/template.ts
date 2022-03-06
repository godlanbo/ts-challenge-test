type IndexOf<T, U, Count extends unknown[] = []> = T extends [
  infer F,
  ...infer R
]
  ? F extends U
    ? Count['length']
    : IndexOf<R, U, [...Count, 0]>
  : -1
