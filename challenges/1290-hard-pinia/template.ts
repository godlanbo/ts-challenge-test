type GetGettersType<T> = {
  [P in keyof T]: T[P] extends (...args: unknown[]) => infer R ? R : never
}

declare function defineStore<D, G, A>(store: {
  id: string
  state: () => D
  getters: G & ThisType<Readonly<D> & GetGettersType<G>>
  actions: A & ThisType<D & Readonly<G> & A>
}): GetGettersType<G> & A & D
