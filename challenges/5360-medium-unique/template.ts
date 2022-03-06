type Unique<T, Map extends unknown[] = []> = T extends [infer F, ...infer R]
  ? F extends Map[number]
    ? Unique<R, Map>
    : [F, ...Unique<R, [...Map, F]>]
  : []
