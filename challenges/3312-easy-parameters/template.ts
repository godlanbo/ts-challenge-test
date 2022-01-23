type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

type MyParameters<T extends (...args: any[]) => any> = T extends (
  arg: infer R,
  ...res: infer U
) => any
  ? Equal<R, unknown> extends true
    ? []
    : [R, ...MyParameters<(...args: U) => any>]
  : []

// 第二种解法，更简单，但是做到一半才想出来
// type MyParameters<T extends (...args: any[]) => any> = T extends (
//   ...args: infer R
// ) => any
//   ? [...R]
//   : unknown
