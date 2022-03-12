type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

type ParsePrintFormat<S extends string> =
  S extends `${infer F}%${infer X}${infer R}`
    ? X extends keyof ControlsMap
      ? [ControlsMap[X], ...ParsePrintFormat<R>]
      : ParsePrintFormat<R>
    : []
