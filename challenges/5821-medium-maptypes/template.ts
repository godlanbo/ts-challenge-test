// type GetMapToType<
//   T,
//   R,
//   Type = R extends { mapFrom: T; mapTo: infer To } ? To : never
// > = [Type] extends [never] ? T : Type

// type MapTypes<T, R> = {
//   [P in keyof T]: IsNever<
//     R extends { mapFrom: T[P]; mapTo: infer To } ? To : never
//   > extends true
//     ? T[P]
//     : R extends { mapFrom: T[P]; mapTo: infer To }
//     ? To
//     : never
// }
type MapTypes<T, R extends { mapFrom: any; mapTo: any }> = {
  [key in keyof T]: T[key] extends R['mapFrom']
    ? R extends { mapFrom: T[key] }
      ? R['mapTo']
      : never
    : T[key]
}
