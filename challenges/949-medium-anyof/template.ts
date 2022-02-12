type Any<T> = T extends
  | never
  | 0
  | ''
  | false
  | null
  | undefined
  | []
  | { [x: string]: never }
  ? true
  : false

// 这里为了判断 {} 这个false值，不能直接在这里的联合类型里写 {}
// 在 TS 中，会认为 {} 这个类型，是所有对象的父类型，而JS中所有的值
// 都可以被包装成对象，包括普通数字，所以，为了对应的约束 {} ，但又不
// 影响其它的判断，这里用 
// { [x: string]: never } 这种写法，在TS对象类型中，值为never，最后搞出来就是没有

type AnyOf<T extends readonly any[]> = T extends [infer F, ...infer R]
  ? Any<F> extends true
    ? AnyOf<R>
    : true
  : false

