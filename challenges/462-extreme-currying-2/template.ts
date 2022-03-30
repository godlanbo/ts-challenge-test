type ShiftNum<
  Arg extends any[],
  Num,
  C extends any[] = []
> = C['length'] extends Num ? Arg : ShiftNum<Shift<Arg>, Num, [[], ...C]>

type DynamicParamsCurryingHelper<
  Orignal extends number,
  Arg extends any[],
  R,
  C extends any[] = []
> = C['length'] extends Orignal
  ? R
  : <K extends any[]>(
      ...args: K
    ) => DynamicParamsCurryingHelper<
      Orignal,
      ShiftNum<Arg, C['length']>,
      R,
      [...K, ...C]
    >

declare function DynamicParamsCurrying<R, Arg extends any[]>(
  fn: (...args: Arg) => R
): DynamicParamsCurryingHelper<Arg['length'], Arg, R>

const curried1 = DynamicParamsCurrying(
  (a: string, b: number, c: boolean) => true
)
const curried1Return2 = curried1('123', 123)
