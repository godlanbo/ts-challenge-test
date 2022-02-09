type Merge<F, S> = {
  [P in keyof (F & S)]: P extends keyof S ? S[P] : (F & S)[P]
}
