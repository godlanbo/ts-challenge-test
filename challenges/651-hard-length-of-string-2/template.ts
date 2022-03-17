type LengthOfString2<
  S extends string,
  Arr extends unknown[] = []
> = S extends `${infer F}${infer R}`
  ? LengthOfString<R, [...Arr, F]>
  : Arr['length']
