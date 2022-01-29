type Chainable<T = {}> = {
  option<K extends string, V>(
    key: K,
    value: V
  ): Chainable<
    T & {
      [P in K]: V
    }
  >
  get(): T
}

// type fun = <K extends string>(
//   T: K
// ) => {
//   [P in K]: string
// }

// interface fun {
//   <K extends string>(g: K): {
//     [P in K]: string
//   }
// }

// let a: fun = (g: string) => {
//   return {
//     [g]: '1'
//   }
// }
// let b = a('ss')
