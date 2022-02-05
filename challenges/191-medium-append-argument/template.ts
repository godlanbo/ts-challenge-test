type AppendArgument<Fn, A> = Fn extends (...args: infer G) => infer R
  ? (...args: [...G, A]) => R
  : never
