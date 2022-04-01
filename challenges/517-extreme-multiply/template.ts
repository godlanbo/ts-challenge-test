type CalculateNumber<T, Res extends any[] = []> = `${Res['length']}` extends T
  ? Res
  : CalculateNumber<T, [[], ...Res]>

type MultiplyOne<
  A extends string | number | bigint,
  B extends string | number | bigint,
> = Naive<`${A}`, CalculateNumber<`${B}`>>

type FullZero<T extends number, C extends any[] = []> = C['length'] extends T
  ? C
  : FullZero<T, ['0', ...C]>

type MultiplyOneHelper<
  A,
  B extends string,
  Index extends any[],
  CIndex extends any[] = Index,
  C extends any[] = ['0', ...FullZero<Index['length']>],
> = A extends [...infer RestA, infer $A]
  ? MultiplyOneHelper<
      RestA,
      B,
      Index,
      [0, ...CIndex],
      [
        GetSumNowAndNextMultiply<
          addOne<
            // @ts-ignore
            MultiplyOne<$A & string, B>['length'] & number,
            C[0]
          >['length'] &
            number
        >[0],
        GetSumNowAndNextMultiply<
          addOne<
            MultiplyOne<$A & string, B>['length'] & number,
            C[0]
          >['length'] &
            number
        >[1],
        ...Shift<C>,
      ]
    >
  : TrimZero<C>

type GetSumNowAndNextMultiply<T extends number> =
  `${T}` extends `${infer L}${infer R}`
    ? R extends ''
      ? ['0', L]
      : [L, R]
    : never

type Sum$<A extends any[], B extends any[]> = GreaterThan<
  A['length'],
  B['length']
> extends true
  ? SumHelper<A, B>
  : SumHelper<B, A>

// 确保A更长
type MultiplyHelper<
  A,
  B,
  C extends any[] = ['0'],
  Index extends any[] = [],
> = B extends [...infer RestB, infer $B]
  ? MultiplyHelper<
      A,
      RestB,
      Sum$<C, MultiplyOneHelper<A, $B & string, Index>>,
      [[], ...Index]
    >
  : C

type Multiply<
  A extends string | number | bigint,
  B extends string | number | bigint,
> = GreaterThan<
  StringToTuple<`${A}`>['length'],
  StringToTuple<`${B}`>['length']
> extends true
  ? Join<MultiplyHelper<StringToTuple<`${A}`>, StringToTuple<`${B}`>>, ''>
  : Join<MultiplyHelper<StringToTuple<`${B}`>, StringToTuple<`${A}`>>, ''>
