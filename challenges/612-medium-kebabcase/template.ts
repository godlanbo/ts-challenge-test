type UpperCharMap = {
  A: 'a'
  B: 'b'
  C: 'c'
  D: 'd'
  E: 'e'
  F: 'f'
  G: 'g'
  H: 'h'
  I: 'i'
  J: 'j'
  K: 'k'
  L: 'l'
  M: 'm'
  N: 'n'
  O: 'o'
  P: 'p'
  Q: 'q'
  R: 'r'
  S: 's'
  T: 't'
  U: 'u'
  V: 'v'
  W: 'w'
  X: 'x'
  Y: 'y'
  Z: 'z'
}
type HandleKebabCase<S extends string> = S extends `${infer F}${infer R}`
  ? F extends keyof UpperCharMap
    ? `-${UpperCharMap[F]}${HandleKebabCase<R>}`
    : `${F}${HandleKebabCase<R>}`
  : S

// Uncapitalize 把第一个字符变小写
type KebabCase<S extends string> = HandleKebabCase<Uncapitalize<S>>
