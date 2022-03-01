type Zip<T extends unknown[], U extends unknown[]> = T extends [
  infer FT,
  ...infer RT
]
  ? U extends [infer FU, ...infer RU]
    ? [[FT, FU], ...Zip<RT, RU>]
    : []
  : []

// 上面的写法可以简化为下面这种
// type Zip<T extends any[], U extends any[]> = [T, U] extends [
//   [infer L, ...infer RestT],
//   [infer R, ...infer RestU]
// ]
//   ? [[L, R], ...Zip<RestT, RestU>]
//   : []
