type Get<T, K> = K extends `${infer P}.${infer R}`
  ? Get<T[P & keyof T], R>
  : T[K & keyof T]
