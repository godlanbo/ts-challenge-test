type HashMapHelper<
  T extends number,
  R extends unknown[] = [],
> = R['length'] extends T ? R : HashMapHelper<T, [...R, unknown]>

type HashMap = {
  '0': HashMapHelper<0>
  '1': HashMapHelper<1>
  '2': HashMapHelper<2>
  '3': HashMapHelper<3>
  '4': HashMapHelper<4>
  '5': HashMapHelper<5>
  '6': HashMapHelper<6>
  '7': HashMapHelper<7>
  '8': HashMapHelper<8>
  '9': HashMapHelper<9>
  a: HashMapHelper<1>
  b: HashMapHelper<2>
  c: HashMapHelper<3>
  d: HashMapHelper<4>
  e: HashMapHelper<5>
  f: HashMapHelper<6>
  g: HashMapHelper<7>
  h: HashMapHelper<8>
  i: HashMapHelper<9>
  j: HashMapHelper<10>
  k: HashMapHelper<11>
  l: HashMapHelper<12>
  m: HashMapHelper<13>
  n: HashMapHelper<14>
  o: HashMapHelper<15>
  p: HashMapHelper<16>
  q: HashMapHelper<17>
  r: HashMapHelper<18>
  s: HashMapHelper<19>
  t: HashMapHelper<20>
  u: HashMapHelper<21>
  v: HashMapHelper<22>
  w: HashMapHelper<23>
  x: HashMapHelper<24>
  y: HashMapHelper<25>
  z: HashMapHelper<26>
}

type Hash<
  T extends string,
  RR extends unknown[] = [],
> = T extends `${infer L}${infer R}`
  ? Hash<R, [...RR, ...HashMap[keyof HashMap & L]]>
  : RR['length']

type res = Hash<'res'>

declare const KEY: unique symbol

function assertArrayIndex<A extends readonly unknown[], K extends string>(
  array: number extends A['length'] ? A : never,
  key: K,
): asserts array is number extends A['length']
  ? A & { [KEY]: Hash<K> } & {
      [P in Hash<K>]: A[number]
    }
  : never {}

type Index$<Array extends { readonly [KEY]: number }> = Array[typeof KEY]
