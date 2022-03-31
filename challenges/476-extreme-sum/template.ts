type addOne<
  A extends string | number | bigint,
  B extends string | number | bigint,
> = Concat<Rec<`${A}`>, Rec<`${B}`>>

type GetSumNowAndNext<T extends number> = `${T}` extends `${infer L}${infer R}`
  ? R extends ''
    ? ['0', L]
    : [L, R]
  : never

type TrimZero<T> = T extends [infer F, ...infer R]
  ? F extends '0'
    ? TrimZero<R>
    : T
  : ['0']

// 确保A更长
type SumHelper<A, B, C extends any[] = ['0']> = A extends [
  ...infer RestA,
  infer $A,
]
  ? B extends [...infer RestB, infer $B]
    ? SumHelper<
        RestA,
        RestB,
        [
          GetSumNowAndNext<
            addOne<
              addOne<$A & string, $B & string>['length'] & number,
              C[0]
            >['length'] &
              number
          >[0],
          GetSumNowAndNext<
            addOne<
              addOne<$A & string, $B & string>['length'] & number,
              C[0]
            >['length'] &
              number
          >[1],
          ...Shift<C>,
        ]
      >
    : SumHelper<
        RestA,
        '',
        [
          GetSumNowAndNext<
            addOne<
              addOne<$A & string, '0'>['length'] & number,
              C[0]
            >['length'] &
              number
          >[0],
          GetSumNowAndNext<
            addOne<
              addOne<$A & string, '0'>['length'] & number,
              C[0]
            >['length'] &
              number
          >[1],
          ...Shift<C>,
        ]
      >
  : TrimZero<C>

type Sum<
  A extends string | number | bigint,
  B extends string | number | bigint,
> = GreaterThan<
  StringToTuple<`${A}`>['length'],
  StringToTuple<`${B}`>['length']
> extends true
  ? Join<SumHelper<StringToTuple<`${A}`>, StringToTuple<`${B}`>>, ''>
  : Join<SumHelper<StringToTuple<`${B}`>, StringToTuple<`${A}`>>, ''>
