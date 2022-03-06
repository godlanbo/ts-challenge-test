type Join<T, U extends string | number> = T extends [infer F, ...infer R]
  ? R extends []
    ? F
    : `${F & string}${U}${Join<R, U>}`
  : ''
