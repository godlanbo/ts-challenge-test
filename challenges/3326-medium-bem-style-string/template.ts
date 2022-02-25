// type BEM<
//   B extends string,
//   E extends string[],
//   M extends string[]
// > = M[number] extends any
//   ? E[number] extends any
//     ? E[number] extends []
//       ? M[number] extends []
//         ? `${B}`
//         : `${B}--${M[number]}`
//       : M[number] extends []
//       ? `${B}__${E[number]}`
//       : `${B}__${E[number]}--${M[number]}`
//     : never
//   : never

type BEM<
  B extends string,
  E extends string[],
  M extends string[]
> = `${B}${E extends [] ? '' : `__${E[number]}`}${M extends []
  ? ''
  : `--${M[number]}`}`
