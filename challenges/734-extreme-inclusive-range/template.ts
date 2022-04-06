type InclusiveRangeHelper<
  Lower extends any[],
  Higher extends any[],
> = Lower extends [...Higher, infer Rest]
  ? []
  : Higher extends [1, 1, 1, 1, 1, ...Lower, ...infer Rest]
  ? [
      Lower['length'],
      [...Lower, 1]['length'],
      [...Lower, 1, 1]['length'],
      [...Lower, 1, 1, 1]['length'],
      [...Lower, 1, 1, 1, 1]['length'],
      ...InclusiveRangeHelper<[...Lower, 1, 1, 1, 1, 1], Higher>,
    ]
  : [Lower['length'], ...InclusiveRangeHelper<[...Lower, 1], Higher>]

type InclusiveRange<Lower extends number, Higher extends number> = GreaterThan<
  Lower,
  Higher
> extends true
  ? []
  : InclusiveRangeHelper<Rec<`${Lower}`>, Rec<`${Higher}`>>
