type MyAwaited<T extends Promise<any>> = T extends Promise<infer R>
  ? R extends Promise<any>
    ? MyAwaited<R>
    : R
  : T

type Func<T> = T extends () => infer R ? R : boolean

// 同上，但当a、b为不同类型的时候，返回不同类型的联合类型
type Obj<T> = T extends { a: infer VType; b: infer VType } ? VType : number

let obj1: Obj<string> // => number
let obj2: Obj<true> // => number
let obj3: Obj<{ a: number; b: number }> // => number
let obj4: Obj<{ a: number; b: () => void }> // => number | () => void
