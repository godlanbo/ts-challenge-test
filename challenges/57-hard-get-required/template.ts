
/**
 * {} 可以赋值给只有可选属性值的对象
 * {} extends { x?: any } = true
 */
type GetRequired<T> = {
  [P in keyof T as {} extends Pick<T, P> ? never : P]: T[P]
}
