// type CamelCase$<S extends string> =   S extends `${infer Word}_${infer Rest}` ? `${Lowercase<Word>}${Capitalize<CamelCase$<Rest>>}` : Lowercase<S>
type CamelCase$<S extends string> = CamelCase$Handle<Lowercase<S>>

type CamelCase$Handle<S extends string> =
  S extends `${infer F}_${infer X}${infer R}`
    ? X extends keyof CharMap
      ? `${F}${CharMap[X]}${CamelCase$<R>}`
      : `${F}_${CamelCase$<`${X}${R}`>}`
    : S
