enum Comparison {
  Greater,
  Equal,
  Lower
}

type GetNumber<T, Res extends any[] = []> = `${Res['length']}` extends T
  ? Res['length']
  : GetNumber<T, [[], ...Res]>

/**
 * 如果A B均为负数，则取绝对值并且颠倒
 * 如果其中一个为负数另一个为正数，那结果肯定是正数更大
 * 所以直接将 A B 中正数那个置为 1，负数那个置为 0
 */
type ComparatorHelper<
  A extends number,
  B extends number
> = `${A}` extends `-${infer $A}`
  ? `${B}` extends `-${infer $B}`
    ? ComparatorHelper<GetNumber<$B>, GetNumber<$A>>
    : ComparatorHelper<0, 1>
  : `${B}` extends `-${infer $B}`
  ? ComparatorHelper<1, 0>
  : GreaterThan<A, B>

type Comparator<A extends number, B extends number> = A extends B
  ? Comparison.Equal
  : ComparatorHelper<A, B> extends true
  ? Comparison.Greater
  : Comparison.Lower
