/**
 * 首先第一次判断 T extends readonly unknow[]
 * 这是在初步排除非数组元组形式的输入，比如case中的 { length: 1 }这种带length属性的对象
 * 但是为什么要用 readonly unknow[] 而不是 unknown[]，是因为元组有两种
 * 只读元组和普通元组，普通元组是可以赋值给只读元组的，所以这里使用 extends readonly
 * 来涵盖所有元组情况
 * 
 * 然后是第二次判断，这里判断 number extends T['length']
 * 这里很有意思，不是 T['length'] extends number 的判断，因为这里元组和数组最大的区别来了
 * 元组的length属性，是一个确定的值，而数组的length属性，是类型number
 * 所以这里用 number extends T['length'] 就可以区分出数组和元组
 */
type IsTuple<T> = T extends readonly unknown[]
  ? number extends T['length']
    ? false
    : true
  : false
