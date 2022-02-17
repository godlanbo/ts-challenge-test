type RemoveIndexSignature<T> = {
  [P in keyof T as string extends P
    ? never
    : number extends P
    ? never
    : symbol extends P
    ? never
    : P]: T[P]
}
// 这次是抄的，不过大概明白了 as 在对象键遍历的时候的作用
/**
 * 对于一次遍历 
 * {
 *  [P in keyof T as ...] 
 * }
 * 就是这种效果
 * P in keyof T : {
 *   循环body
 * }
 * 也就是说，as 后面其实就是一个循环体中的内容，P就是key的值
 */

// type Test<T> = T extends any
//   ? IsEqual<T, string> extends true
//     ? never
//     : T
//   : never

// type temp = {
//   [key: string]: any
//   foo(): void
// }

// type res4 = keyof temp
// keyof 字符串索引的对象，出来是 string | number
// type res2 = Test<keyof temp> // number
