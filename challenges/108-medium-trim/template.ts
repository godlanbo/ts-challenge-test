// type TrimRight<S extends string> = S extends `${infer R}${' ' | '\t' | '\n'}` ? TrimRight<R> : S

// type Trim<S extends string> = TrimLeft<TrimRight<S>>

type Trim<S extends string> = S extends
  | `${infer R}${' ' | '\t' | '\n'}`
  | `${' ' | '\t' | '\n'}${infer R}`
  ? Trim<R>
  : S
