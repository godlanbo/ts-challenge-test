type Diff<O, O1> = Omit<O & O1, keyof (O | O1)>

// keyof (O | O1) 会把两个对象都有的键取出来成一个联合类型
/**
 *  例子
 *  type Foo = {
 *    name: string
 *    age: string
 *  }
 *  type Bar = {
 *    name: string
 *    age: string
 *    gender: number
 *  } 
 *  这里  type res = keyof (Foo | Bar) 就是 'name' | 'age'
 */


// type in1 = 'name' | 'age'
// type in2 = 'name' | 'age' | 'gender'
// type Exclude$<T = in2, U = in1> = T extends U ? never : T
// type temp = Exclude$ // 'gender'
// 因为联合类型的分配只会出现在 泛型是联合类型的情况，普通union类型不会分配
// When conditional types act on a generic type, they become distributive when given a union type. For example, take the following
// type temp1 = in2 extends in1 ? never : in2 // 'name' | 'age' | 'name'
