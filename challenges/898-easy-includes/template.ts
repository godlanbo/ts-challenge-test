

// type test = Includes<[boolean, 1, 2], true>

// type s = boolean extends false ? true : false

// type c = Includes<[{ a: 'A' }], { readonly a: 'A' }>



type IsEqual<X, Y> =
(<T>() => T extends X ? 1 : 2) extends
(<T>() => T extends Y ? 1 : 2) ? true : false

//     type T11 = IsEqual<1, any>; // any
//     type T12 = IsEqual<(x: 1) => void, (y: 1) => unknown>; // void 协变
//     type T13 = IsEqual<(x: void) => 1, () => 1>; // void 逆变
    
//     type T21 = IsEqual<{ a?: 1 }, {}>; // 对象有且仅有一个未知 key 的情况
//     type T22 = IsEqual<{ a: 1 } | {}, {}>; // 这个是上面的本质
    
//     type T31 = IsEqual<[1?], [] | [1]>; // 问号的类型语意是什么？
//     type T32 = IsEqual<[1?], []>;
//     type T33 = IsEqual<(x?: 1) => 1, () => 1>; // 问号逆变是什么？

// type tt = (<T>() => T extends ((x?: 1) => 1) ? 1 : 2)
// type IsEqual<X, Y> =
//   [X] extends [Y]
//     ? [Y] extends [X]
//       ? true
//       : false
//     : false


type Includes<T extends readonly any[], U> = T extends [infer C, ...infer R]
  ? IsEqual<C, U> extends true
    ? true
    : Includes<R, U>
  : false