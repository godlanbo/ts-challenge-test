type CamelCase<S extends string> = S extends `${infer F}-${infer X}${infer R}`
  ? X extends keyof CharMap
    ? `${F}${CharMap[X]}${CamelCase<R>}`
    : `${F}-${CamelCase<`${X}${R}`>}`
  : S
