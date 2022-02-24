type Reverse<T> = T extends [infer F, ...infer R] ? [...Reverse<R>, F] : T
