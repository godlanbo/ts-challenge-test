type LengthOfString<
  S extends string,
  Arr extends any[] = []
> = S extends `${infer F}${infer R}`
  ? LengthOfString<R, [...Arr, F]>
  : Arr['length']

/**
 * 元组类型的length属性可以得到具体长度，也就是number字面量类型
 * 但是string类型和数组类型（不是元组）的length属性就只能得到number类型
 */
// type res = LengthOfString<'kumiko'>

// type a1<T extends string> = T['length']
// type a2<T extends any[]> = T['length']

// type res1 = a1<'asfas'>
// let af = ['a','b']
// type temp = typeof af
// type res2 = a2<typeof af>

