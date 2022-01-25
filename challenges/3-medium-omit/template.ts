// 最简单的解法
// P 去循环 Exclude<keyof T, K>，这个就是过滤掉keyof T中的K键
// 自然搞出来就是剩下的了
type MyOmit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P]
}
// 还有个比较奇怪的解法
// type MyOmit<T, K extends keyof T> = {
//   [P in keyof T as (P extends K ? never : P)]: T[P]
// }
// <==============> 上面括号内容推出下面
// type MyOmit<T, K> = {
//   [P in keyof T as Exclude<P, K>]: T[P]
// }
// 大致意思就是，首先 P in keyof T，这里就拿到T的全部键，是个联合类型
// title | desc | content，然后再类型断言，as 成后面那个类型，什么类型
// 呢：Exclude<P, K>，这里的效果和第一种解法一样，只是相当于做了个
// P = keyof T 的感觉
/**
 * 然后由于 P in 这种写法的循环性，大概结果就是如下的过程
 * P in keyof T {
 *   P = Exclude<P, K>
 *   if (P !== never) {
 *     res[P] = T[P]
 *   }
 * }
 */


type t1 = 'a' | 'b' | 'c'
type t2 = 'b' | 'c'
type t3 = 'a' | 'c' extends t1 ? true : 'a'
