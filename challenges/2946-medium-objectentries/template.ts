type ObjectEntries<T, K extends keyof T = keyof T> = K extends any
  ? [K, Required<T>[K]]
  : never
