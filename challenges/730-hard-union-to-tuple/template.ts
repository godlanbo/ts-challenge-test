/**
 * 从 Unoin 类型里面取出最后一个
 * 首先把传入的 Unoin 类型分配构造成函数 Unoin：
 * a | b ==> (() => a) | (() => b)
 * 然后丢进 UnoinToIntersection 处理成交叉类型
 * (() => a) & (() => b) 这个会被解释为函数重载
 * 然后再条件语句中，函数重载取最后一个值，所以拿到
 * 了传入 Unoin 的最后一个值
 */
type LastOf<T> = UnionToIntersection<
  T extends any ? () => T : never
> extends () => infer R
  ? R
  : never

// 这里是如何去掉 undefined | void | 1 中的undefined的呢
// 因为 undefined 可以赋值给 void，所以在
// Exclude<undefine, void> 的时候就会被干掉
type UnionToTuple<T, L = LastOf<T>, N = IsNever<T>> = true extends N
  ? []
  : Push<UnionToTuple<Exclude<T, L>>, L>
