// type PickValueByString<T, S> = S extends ``
type GetInterface<T, S> = S extends `${infer L}.${infer R}`
  ? {
      [Key in L & keyof T]: GetInterface<T[Key], R>
    }
  : {
      [Key in S & keyof T]: T[Key]
    }

type DeepPick<T, U> = '' extends U
  ? unknown
  : UnionToIntersection<U extends any ? GetInterface<T, U> : never>
