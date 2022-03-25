type GetReadonlyKeys<T> = keyof {
  [Key in keyof T as IsEqual<Mutable<Pick<T, Key>>, Pick<T, Key>> extends true
    ? never
    : Key]: T[Key]
}
