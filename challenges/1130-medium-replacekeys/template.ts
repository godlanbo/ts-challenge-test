type ReplaceKeys<U, T, Y, A = U> = U extends A
  ? {
      [P in keyof U]: P extends T ? (P extends keyof Y ? Y[P] : never) : U[P]
    }
  : never

// js
// function replaceKeys(objArr, keys, resObj) {
//   for (let key of keys) {
//     let val = resObj[key] ? resObj[key] : 'never'
//     for (let obj of objArr) {
//       if (key in obj) {
//         obj[key] = val
//       }
//     }
//   }
//   return objArr
// }
// 从JS逻辑出发转TS，从里面开始写，比如JS是最里面遍历对象数组，我们
// TS逻辑就最外面开始
