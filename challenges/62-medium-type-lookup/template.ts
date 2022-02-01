type LookUp<U, T> = U extends { type: T } ? U : never

// 错误解法：这里约束U是 { type: string }，会让 type丢失元组类型变成 string 而后面 string extends "dog"
// 这里是无法通过的
// type LookUp<U extends { type: string }, T> = U['type'] extends T ? U : never