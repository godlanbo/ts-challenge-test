type Split<S extends string, SEP extends string> = string extends S
  ? string[]
  : S extends `${infer L}${SEP}${infer R}`
  ? [L, ...Split<R, SEP>]
  : SEP extends ''
  ? []
  : [S]
