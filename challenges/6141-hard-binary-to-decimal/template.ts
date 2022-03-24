type getBinaryValue<
  T,
  B extends any[] = [[]],
  C extends any[] = []
> = T extends [...infer L, infer R]
  ? R extends '1'
    ? getBinaryValue<L, [...B, ...B], [...B, ...C]>
    : getBinaryValue<L, [...B, ...B], C>
  : C['length']

type BinaryToDecimal<S extends string> = getBinaryValue<StringToTuple<S>>
