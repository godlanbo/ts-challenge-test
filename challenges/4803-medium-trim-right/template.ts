type TrimRight<S extends string> = S extends `${infer Front}${
  | ' '
  | '\n'
  | '\t'}`
  ? TrimRight<Front>
  : S
