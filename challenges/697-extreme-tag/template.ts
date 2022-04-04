declare const TAG: unique symbol
declare const dummy: unique symbol
type UQ = typeof TAG
type DUMMY = typeof dummy

type RemoveUndefine<T> = Exclude<T, undefined>
// dummy 是为了让两个不同的 tag 有共同的键，达到不同tag值但是原始值相同时
// 可以互相赋值，然后为了不冲突，我们使用 unique symbol 做键，关于unique symbol
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#unique-symbol
/**
 * type tt1 = { a?: true }
 * type tt2 = { b?: true }
 * type tt3 = { a?: true, c?: 1 }
 * type tt4 = { b?: true, c?: 1 }
 * declare let att1: tt1
 * declare let att2: tt2
 * declare let att3: tt3
 * declare let att4: tt4
 * att1 = att2 can't 它们不具有相同属性
 * att3 = att4 can 它们具有相同属性
 */
type TagHelper<B, T extends string> = UQ extends keyof B
  ? Omit<B, UQ> & { [TAG]?: TagHelper<RemoveUndefine<B[keyof B & UQ]>, T> }
  : B & { [TAG]?: { [P in T | DUMMY]?: true } }

type GetTags<B> = IsEqual<B, any> extends true
  ? []
  : UQ extends keyof B
  ? [
      Exclude<keyof RemoveUndefine<B[UQ]>, UQ | DUMMY>,
      ...GetTags<RemoveUndefine<B[UQ]>>,
    ]
  : []

/**
 * null 和 undefined 需要直接返回原值
 * never 和 any 不能直接使用，因为在构造Tag的过程中
 * 会用到 & 操作符，any 和 never 与任何类型相 & 都会得到自己
 * 所以需要自己 mock 一个普通对象进去，为了区分，我们让他们的值不相同
 */
type Tag<B, T extends string> = IsEqual<B, undefined> extends true
  ? B
  : IsEqual<B, null> extends true
  ? B
  : IsEqual<B, any> extends true
  ? TagHelper<{ mock: 1 }, T>
  : IsEqual<B, never> extends true
  ? TagHelper<{ mock: 2 }, T>
  : TagHelper<B, T>

/**
 * UnTag 退掉全部的Tag，只需要把传入对象上的 [TAG] 属性拿掉就行
 * 所有信息都在上面
 */
type UnTag<B> = UQ extends keyof B ? Omit<B, UQ> : B

type HasTag<B, T extends string> = Includes<GetTags<B>, T>

type PrefixArrayUnion<T> = T extends [...infer L, infer R]
  ? T | PrefixArrayUnion<L>
  : never

type SubSearch<A, T> = T extends PrefixArrayUnion<A>
  ? true
  : A extends [infer L, ...infer R]
  ? SubSearch<R, T>
  : false

type HasTags<B, T extends readonly string[]> = SubSearch<GetTags<B>, T>

type HasExactTags<B, T extends readonly string[]> = IsEqual<GetTags<B>, T>
