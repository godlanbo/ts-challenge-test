// 我的解
// type JudgeBoolean<T> = boolean extends T ? false : T

// type IsRequiredKey<T, K extends keyof T> = JudgeBoolean<
//   K extends keyof GetRequired<T> ? true : false
// >

// 这种解更好
type IsRequiredKey<T, K extends keyof T> = T extends Required<Pick<T, K>>
  ? true
  : false
