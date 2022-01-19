type TupleToObject<T extends readonly (keyof any)[]> = {
  [P in T[number]]: P
}

// type TupleToObject<T extends readonly (string | number | symbol)[]> = {
//   [P in T[number]]: P
// }
// 两种写法