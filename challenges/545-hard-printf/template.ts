type StringTypeMap = {
  s: string
  d: number
  a: string
}

type Format<T extends string> = T extends `${infer F}%${infer N}${infer R}`
  ? N extends keyof StringTypeMap
    ? (x: StringTypeMap[N]) => Format<R>
    : never
  : string
