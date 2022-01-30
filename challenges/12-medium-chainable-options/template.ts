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
//     [g]: '111'
//   } as any // 实现通过就行，有类型约束来管理得到的提示
// }
// let b = a('qq')

