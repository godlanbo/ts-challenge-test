// type MyReadonly2<T, K = any> = {
//   readonly [P in Extract<keyof T, K>]: T[P]
// } & {
//   [P in Exclude<keyof T, K>]: T[P]
// }
type MyReadonly2<T, K = keyof T> = {
  readonly [P in keyof T as P extends K ? P : never]: T[P]
} & {
  [P in keyof T as P extends K ? never : P]: T[P]
}

// interface Todos {
//   title: string
//   description?: string
//   completed: boolean
// }

// type tt1 = MyReadonly2<Todos, 'title' | 'description'>

// type tt2 = MyReadonly3<Todos, 'title' | 'description'>
