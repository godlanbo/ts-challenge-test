type ObjectKeyPaths<
  T extends object,
  K extends keyof T = keyof T,
  IsF = true
> = K extends string | number
  ?
      | (IsF extends true
          ? `${K}`
          : `.${K}` | (K extends number ? `[${K}]` | `.[${K}]` : never))
      | (T[K] extends object
          ? IsF extends true
            ? `${K}${ObjectKeyPaths<T[K], keyof T[K], false>}`
            : `.${K}${ObjectKeyPaths<T[K], keyof T[K], false>}`
          : never)
  : never
