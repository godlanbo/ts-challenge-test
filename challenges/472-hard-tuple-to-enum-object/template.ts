type Enum<
  T extends readonly string[],
  N extends boolean = false
> = N extends true
  ? T extends readonly [...infer Right, infer Left]
    ? Right extends readonly string[]
      ? MergeIntersection<
          {
            readonly [K in Left & string as Capitalize<K>]: Right['length']
          } & Enum<Right, N>
        >
      : {}
    : {}
  : {
      readonly [K in T[number] as Capitalize<K>]: K
    }
