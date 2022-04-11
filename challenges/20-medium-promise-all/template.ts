type PromiseAllResArray<T extends any[]> = T extends [infer F, ...infer R]
? F extends Promise<any>
  ? [MyAwaited<F>, ...PromiseAllResArray<R>]
  : [F, ...PromiseAllResArray<R>]
: []

/**
 * 这里 T extends any[] 对于
 * [1, 2, 3] as const 这种只读元组类型T就是 [1, 2, 3] 的元组类型
 * [1, 2, 3] 这种是普通元组类型，普通元组类型会被推导为 [number, number, number]
 * 然后是参数为什么这么写
 * 像下面这种泛型写法，T的类型是来自函数参数推导之后，赋值到T
 * 如果我们这样写：
 *  values: T，什么效果，values被推断为 number[] 类型然后给到T，这不是我们想要的，我们想要元组类型
 *  values: [...T]，这样写，这里T需要满足被结构，且结构后满足能被[1, 2, 3]赋值的类型，那么这里
 *    如果T是number[]，显然不行，[...number[]] == number[]还是一样的，所以这里T就被推导为了
 *    [number, number, number]的元组类型，才能够满足推导
 * 那么为什么要加readonly呢？因为需要满足入参的 只读元组 类型，因为元组是可以被赋值给只读元组的
 * 所以这里不影响普通元组赋值进来，只是为了兼容只读元组
 */
declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<PromiseAllResArray<T>>


const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])

let t = Promise.resolve(3)
const test = [1, 2, Promise.resolve(3)] as const
type asf = typeof test

// number[] === [...number[]]
const bb_ = [1, 2, 3]
type number__ = typeof bb_
type number__too = [...number__]

declare function qqq<T extends any[]>(v: readonly [...T]): void
/**
 * function qqq<[number, number, Promise<number>]>(v: [number, number, Promise<number>])
 * : Promise<[number, number, Promise<number>]>
 */
qqq([1, 2, Promise.resolve(3)] as const)
/**
 * function qqq<(number | Promise<number>)[]>(v: (number | Promise<number>)[])
 * : Promise<(number | Promise<number>)[]>
 */
// let a = [1, 2, Promise.resolve(3)]
qqq(a)

// 另一种解法，利用copy全部数组属性，相当于把数组当做一个有 0 1 ... 数字索引签名的对象
// 从而达到传入对象得到数组的效果
// declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
//   [K in keyof T]:  T[K] extends Promise<infer K> ? K : T[K]
// }>;
