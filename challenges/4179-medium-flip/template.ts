/**
 * 这里需要用 Record 来约束 T 的 value类型为 any
 * 否则下面 `${T[P]}` 这里的类型检查会出问题，因为
 * 这里就相当于把 T 的键值赋值给模板字符串，这需要满足
 * 模板字符串的类型约束：“string | number | bigint | boolean | null | undefined”
 * T 在没有类型约束的情况下，T[?] 的键值类型是 unknown，不能赋值
 * 我们约束 T 为 Record<PropertyKey, any>之后，T[?] 的值就是 any了
 * 就能通过检查
 */
type Flip<T extends Record<PropertyKey, any>> = {
  [P in keyof T as `${T[P]}`]: P
}