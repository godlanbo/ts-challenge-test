type Without<T extends unknown[], U> = U extends unknown[]
  ? T extends [infer F, ...infer R]
    ? F extends U[number]
      ? [...Without<R, U>]
      : [F, ...Without<R, U>]
    : T
  : Without<T, [U]>
