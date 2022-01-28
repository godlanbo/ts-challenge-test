type TupleToUnion<T extends any[]> = T extends [infer F, ...infer R]
  ? F | TupleToUnion<R>
  : never

// 对tuple类型使用 TupleType[number] 它就会变成 union 类型
// type TupleToUnion<T extends any[]> = T[number]

type tuple = [string, number]

type union = tuple[number]
