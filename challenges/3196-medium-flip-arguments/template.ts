type FlipArguments<T> = T extends (...args: infer R) => infer V
  ? (...args: Reverse<R>) => V
  : never
