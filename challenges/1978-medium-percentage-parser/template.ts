type Prefix = '+' | '-'
type Suffix = '%'

// one
// type PercentageParser<A extends string> = A extends `${infer F}${infer R}%`
//   ? F extends Prefix
//     ? [F, R, '%']
//     : ['', `${F}${R}`, '%']
//   : A extends `${infer F}${infer R}`
//   ? F extends Prefix
//     ? [F, R, '']
//     : ['', `${F}${R}`, '']
//   : ['', '', '']

// two
type PercentageParser<A extends string> = A extends `${infer F}${infer R}`
  ? F extends Prefix
    ? R extends `${infer N}%`
      ? [F, N, '%']
      : [F, R, '']
    : A extends `${infer N}%`
    ? ['', N, '%']
    : ['', A, '']
  : ['', '', '']
