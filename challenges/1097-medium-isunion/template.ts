// type IsEmptyUnion<T> = T extends
type IsUnion<T, U = T> = T extends U
  ? IsEqual<T, U> extends true
    ? false
    : true
  : false

/**
 * string | never = string
 * string | unknown = unknow
 * string | any = any
 * string | 'a' = string
 * 可以看到 union 类型的几个类型，如果有包含关系
 * 最后结果会取大的那个（string | never 那个，never可以赋值string
 * 说明在类型系统中，string是更上面的类型）
 * 
 * 然后这里需要判断输入类型是否是 union 类型，所以就是要区分出
 * 那些联合之后还是一个类型的和本来就是一个类型的情况
 * 
 * 所以我们用一个泛型 U = T ，让输入值和自己进行 extends，这里如果是union类型
 * 就会触发分配的机制，然后我们在肯定分支中对分配出来的某个类型与整个union类型做
 * 对比，如果这里输入值是union类型，那么这里T，应该是其中某一个类型（分配），而
 * U会是整个union类型，所以这里肯定不相等。
 * 所以我们通过这里判断，如果不相等，它就是union类型，如果相等就能判断不是，因为这里
 * 如果相等，就说明分配出来的T和取输入值的U是相等的，那么就意味着输入值最终不是一个
 * union类型，因为它分不分配都一样，只有union类型才会出现分配之后与原值不同的现象。
 */
