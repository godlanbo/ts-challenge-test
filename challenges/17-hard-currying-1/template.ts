type CurryingResType<Arg extends unknown[], R> = Arg extends [
  infer F,
  ...infer Rest
]
  ? (arg: F) => CurryingResType<Rest, R>
  : R

declare function Currying<F>(
  fn: F
): F extends (...args: infer Arg) => infer R ? CurryingResType<Arg, R> : never
