/**
 * 第二个 extends 不会发生分配，因为分配只发生在
 * 泛型进行 extends 的时候，且泛型被赋予的值是联合
 * 类型。
 * 所以第二个 extends 是前面整个联合类型去 extends
 * 然后根据 https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#type-inference-in-conditional-types
 * 所说：
 * Likewise, multiple candidates for the same type variable in contra-variant positions causes an intersection type to be inferred
 * 当同一类型变量的多个值处在逆变位置的时候（函数参数是逆变的），结果会变成交叉类型
 * 这里的意思其实可以理解为TS类型系统为了满足推导条件，会把多个结果交叉到一起
 */
type UnionToIntersection<U> = (
  U extends unknown ? (arg: U) => unknown : never
) extends (arg: infer R) => unknown
  ? R
  : never
