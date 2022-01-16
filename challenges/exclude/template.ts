type MyExclude<T, U> = T extends U ? never : T

// Exclude<T, U> = T extends U ? never : T
// T和U都是联合类型时，后面值其实不止相当于一次计算
/* Exclude<a|b|c, c> = a extends c ? nerver a
                     = b extends c ? nerver b
                     = c extends c ? nerver c
                   最后取全部的结果就是 a | b | nerver = a | b
*/
