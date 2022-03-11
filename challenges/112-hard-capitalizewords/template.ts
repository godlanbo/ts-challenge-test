type UppercaseCharMap = {
  a: 'A'
  b: 'B'
  c: 'C'
  d: 'D'
  e: 'E'
  f: 'F'
  g: 'G'
  h: 'H'
  i: 'I'
  j: 'J'
  k: 'K'
  l: 'L'
  m: 'M'
  n: 'N'
  o: 'O'
  p: 'P'
  q: 'Q'
  r: 'R'
  s: 'S'
  t: 'T'
  u: 'U'
  v: 'V'
  w: 'W'
  x: 'X'
  y: 'Y'
  z: 'Z'
}

type CapitalizeWords<
  S extends string,
  C extends boolean = true
> = S extends `${infer F}${infer R}`
  ? F extends keyof UppercaseCharMap
    ? C extends true
      ? `${UppercaseCharMap[F]}${CapitalizeWords<R, false>}`
      : `${F}${CapitalizeWords<R, C>}`
    : `${F}${CapitalizeWords<R, true>}`
  : ''
