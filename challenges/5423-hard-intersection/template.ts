type getAllUnion<T> = T extends [infer L, ...infer R]
  ? getAllUnion<L> | getAllUnion<R>
  : [] extends T
  ? never
  : T

/**
 * 依次过滤当前tuple有的联合值
 * [[1, 2], [2, 3], [2, 2]]
 *  K = 1 | 2 | 3
 * 第一个值里面有 1 2，过滤掉3
 *  K = 1 | 2  T = [[2, 3], [2, 2]]
 * 第二个值里面有 2 3， 过滤掉从K里面过滤掉3
 * 依次走
 */
type Intersection<T, K = getAllUnion<T>> = T extends [infer L, ...infer R]
  ? Intersection<R, Extract<K, getAllUnion<L>>>
  : K
