type GetOptional<T> = {
  [P in keyof T as {} extends Pick<T, P> ? P : never]: T[P]
}
