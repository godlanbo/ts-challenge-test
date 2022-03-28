type GetIndex<Arr, N extends string, Res extends any[] = []> = Arr extends [
  infer L,
  ...infer R
]
  ? `${R['length']}` extends N
    ? Res['length']
    : GetIndex<R, N, [[], ...Res]>
  : Res['length']

type Index<Arr extends any[], N extends number> = `${N}` extends `-${infer R}`
  ? GetIndex<[...Arr, []], R>
  : N

type SliceHelper<
  Arr extends any[],
  Start extends number = 0,
  End extends number = Arr['length'],
  Index extends any[] = [],
  isStart = false
> = Start extends End
  ? []
  : GreaterThan<Start, End> extends true
  ? []
  : Arr extends [infer L, ...infer R]
  ? isStart extends true
    ? End extends Index['length']
      ? []
      : [L, ...SliceHelper<R, Start, End, [[], ...Index], true>]
    : Start extends Index['length']
    ? [L, ...SliceHelper<R, Start, End, [[], ...Index], true>]
    : SliceHelper<R, Start, End, [[], ...Index], false>
  : []

type Slice<
  Arr extends any[],
  Start extends number = 0,
  End extends number = Arr['length']
> = SliceHelper<Arr, Index<Arr, Start>, Index<Arr, End>>
