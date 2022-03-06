type LastIndexOf<T, U> = T extends [
  ...infer F,
  infer R
]
  ? R extends U
    ? F['length']
    : LastIndexOf<F, U>
  : -1
