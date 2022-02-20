type MergeIntersection<T> = T extends object
  ? {
      [P in keyof T]: MergeIntersection<T[P]>
    }
  : T

// [K] extends [never] ，判断never的同时，避免因为传入的联合类型导致
// 的分配行为影响结果
type PartialByKeys<T, K = never> = [K] extends [never]
  ? Partial<T>
  : MergeIntersection<
      {
        [P in keyof T as P extends K ? P : never]?: T[P]
      } & {
        [P in keyof T as P extends K ? never : P]: T[P]
      }
    >
