type Flatten<T extends unknown[], Arr extends unknown[] = []> = T extends [
  infer F,
  ...infer R
]
  ? F extends unknown[]
    ? Flatten<R, [...Arr, ...Flatten<F>]>
    : Flatten<R, [...Arr, F]>
  : Arr

// 新的解法
// type Flatten<T extends unknown[]> = T extends [infer F, ...infer R]
//   ? F extends unknown[]
//     ? [...Flatten<F>, ...Flatten<R>]
//     : [F, ...Flatten<R>]
//   : T

// js
// function myFlatten(arr: any[]) {
//   return arr.reduce((pre: any[], cur) => {
//     Array.isArray(cur) ? pre.concat(myFlatten(cur)) : pre.concat(cur)
//     return pre
//   }, [])
// }
