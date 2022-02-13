type IsNever<T> = [T] extends never[] ? true : false

/**
 * 为什么不能像如下这么写，这么写的结果是never，因为 never 被当做泛型
 * 传入的时候，实际会被当做一个空的联合类型，联合类型遇到 extends 就会
 * 触发分配，但是空的联合类型没法分配，就返回never
 */
// type IsNever<T> = T extends never ? true : false
