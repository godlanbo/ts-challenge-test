type Camelize<T> = T extends unknown[]
  ? {
      [Key in keyof T]: T[Key] extends object ? Camelize<T[Key]> : T[Key]
    }
  : T extends object
  ? {
      [Key in keyof T as CamelCase$<Key & string>]: Camelize<T[Key]>
    }
  : T
