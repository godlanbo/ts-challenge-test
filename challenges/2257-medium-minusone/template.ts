// 通过迭代数组数量，通过 length 属性来获得想要的数字，N是会走几轮迭代，Base是每次迭代得到的值，默认
// 每次迭代 +1
type Naive<
  N extends string,
  Base extends any[] = [1],
  M extends any[] = []
> = `${M['length']}` extends N ? [] : [...Base, ...Naive<N, Base, [1, ...M]>]

// 这里是为了防止递归过深，在做倍乘，Res 是10倍数值，同时也是结果的累计值
type Rec<S, Res extends any[] = []> = S extends `${infer L}${infer R}`
  ? Rec<R, [...Naive<'10', Res>, ...Naive<L>]>
  : Res

type MinusOne<T extends number> = Rec<`${T}`> extends [infer F, ...infer R]
  ? R['length']
  : never