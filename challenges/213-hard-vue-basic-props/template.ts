type GetPropsType<P> = {
  [K in keyof P]: IsNever<ComputedPropType<P[K]>> extends true
    ? P[K] extends { type: infer R }
      ? R extends unknown[]
        ? ComputedPropType<R[number]>
        : ComputedPropType<[R][number]>
      : any
    : ComputedPropType<P[K]>
}

type ComputedPropType<T> = T extends (...args: any[]) => infer R
  ? R
  : T extends new (...args: any[]) => any
  ? InstanceType<T>
  : never

declare function VueBasicProps<D, C, M, P>(options: {
  data: (this: {} & GetPropsType<P>) => D
  computed: C & ThisType<D>
  methods: M & ThisType<D & M & GetCompuetdType<C> & GetPropsType<P>>
  props: P
}): any
