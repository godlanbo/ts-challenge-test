type GetQueryValue<S extends string> = S extends `${infer L}=${infer R}`
  ? [L, R]
  : [S, true]

type CheckQueryValue<RES extends Record<any, any>, Query> = Query extends [
  infer K,
  infer V
]
  ? K extends keyof RES
    ? AssignValueToObject<RES, K, V>
    : RES & {
        [P in K & string]: V
      }
  : never

/**
 * 如果赋值的是 true，保持原值
 * 如果赋值的不是 true，在判断原来的值
 *
 * 如果原来的值是 true，直接赋值即可
 * 如果原来的值是数组，说明已经有值了，对比赋来的值是否在数组中，不在则push进数组
 * 如果原来的值不是数组，是个普通非true 的值，那么对比赋来的值是否与原值相等，不等则构造一个数组
 * P = K
 * if (V === true) {
 *  T[P] = T[P]
 * } else {
 *  if (T[P] === true) {
 *    T[P] = V
 *  } else if (Array.isArray(T[P])) {
 *    T[P] = V in T[P] ? T[P] : T[P].push(V)
 *  } else {
 *    T[P] = V === T[P] ? T[P] : [T[P], V]
 *  }
 * }
 */
type AssignValueToObject<T extends Record<any, any>, K, V> = Omit<
  T,
  K & string
> & {
  [P in K & string]: V extends true
    ? T[P]
    : T[P] extends true
    ? V
    : T[P] extends any[]
    ? V extends T[P][number]
      ? T[P]
      : Push<T[P], V>
    : V extends [T[P]][number]
    ? T[P]
    : [T[P], V]
}

type ParseQueryString<
  S extends string,
  RES = {}
> = S extends `${infer L}&${infer R}`
  ? ParseQueryString<R, CheckQueryValue<RES, GetQueryValue<L>>>
  : S extends ''
  ? MergeIntersection<RES>
  : ParseQueryString<'', CheckQueryValue<RES, GetQueryValue<S>>>
