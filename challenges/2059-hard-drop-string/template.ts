type StringToTuple<S> = S extends `${infer L}${infer R}`
  ? [L, ...StringToTuple<R>]
  : []

type DropString<S, R extends string> = S extends `${infer F}${infer Rest}`
  ? F extends StringToTuple<R>[number]
    ? DropString<Rest, R>
    : `${F}${DropString<Rest, R>}`
  : ''
