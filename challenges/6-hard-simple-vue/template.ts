type GetCompuetdType<T> = {
  [P in keyof T]: T[P] extends (...args: unknown[]) => infer R ? R : never
}

/**
 * 函数中的this类型定义，可以通过给函数参数传递this参数来定义
 * ThisType<T> 指示当前作用域中 this 的类型为 T
 * 在类型中，想要使用自己的类型，作为后续类型定义的参数
 * 可以向下面这样书写：
 * <T>{
 *  type: T & ThisType<T>
 * }
 * 这样就可以将自己的类型，传递到 ThisType 中进行计算，
 * 最后通过交叉运算，得到自己的类型和ThisType<T>的综合
 */
declare function SimpleVue<D, C, M>(options: {
  data: (this: {}) => D
  computed: C & ThisType<D>
  methods: M & ThisType<D & M & GetCompuetdType<C>>
}): any
