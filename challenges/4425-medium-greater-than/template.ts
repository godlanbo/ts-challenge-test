/**
 * 首先排除两数相等的情况，这种情况结果显而易见为 false，因为它们相等，所以
 * 前一个并不大于后一个。
 * 排除相等的情况后，两数结果有两种可能，前者更大，后者更大：
 * 我们用两个同时增加的数字去逼近它们两个，最先被逼近的就是更小的那个
 * 所以，当 T 最先被逼近的时候，那么它应该更小，返回 false
 *      当 U 最先被逼近的时候，那么它应该更小，T就更大，返回 true
 */
type GreaterThan<
  T extends number,
  U extends number,
  TC extends number[] = [],
  UC extends number[] = []
> = T extends U
  ? false
  : TC['length'] extends T
  ? false
  : UC['length'] extends U
  ? true
  : GreaterThan<T, U, [0, ...TC], [0, ...UC]>
