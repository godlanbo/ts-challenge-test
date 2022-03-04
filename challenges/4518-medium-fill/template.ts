// type Fill<
//   T extends unknown[],
//   N,
//   Start extends number = 0,
//   End extends number = T['length'],
//   Res extends unknown[] = [],
//   CurrentIndex extends unknown[] = [],
//   isStart extends boolean = false
// > = T extends [infer Frist, ...infer Rest]
//   ? CurrentIndex['length'] extends End
//     ? Fill<Rest, N, Start, End, [...Res, Frist], [...CurrentIndex, 0], false>
//     : isStart extends false
//     ? CurrentIndex['length'] extends Start
//       ? Fill<Rest, N, Start, End, [...Res, N], [...CurrentIndex, 0], true>
//       : Fill<Rest, N, Start, End, [...Res, Frist], [...CurrentIndex, 0], false>
//     : Fill<Rest, N, Start, End, [...Res, N], [...CurrentIndex, 0], true>
//   : Res

// type Fill<
//   T extends unknown[],
//   N,
//   Start extends number = 0,
//   End extends number = T['length'],
//   CurrentIndex extends unknown[] = [],
//   isStart extends boolean = false
// > = T extends [infer Frist, ...infer Rest]
//   ? CurrentIndex['length'] extends End
//     ? T
//     : isStart extends false
//     ? CurrentIndex['length'] extends Start
//       ? [N, ...Fill<Rest, N, Start, End, [...CurrentIndex, 0], true>]
//       : [Frist, ...Fill<Rest, N, Start, End, [...CurrentIndex, 0], false>]
//     : [N, ...Fill<Rest, N, Start, End, [...CurrentIndex, 0], true>]
//   : []

/**
 *  if start === end
 *    return arr
 *  if index === start
 *    start = true
 *    arr[index++] = replace
 *  else if index === end
 *    return rest
 *  else
 *     if start = true
 *        arr[index++] = replace
 *     else
 *        arr[index++] = val
 */
type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  CurrentIndex extends unknown[] = [],
  isStart extends boolean = false
> = Start extends End
  ? T
  : T extends [infer Frist, ...infer Rest]
  ? CurrentIndex['length'] extends Start
    ? [N, ...Fill<Rest, N, Start, End, [...CurrentIndex, 0], true>]
    : CurrentIndex['length'] extends End
    ? T
    : isStart extends true
    ? [N, ...Fill<Rest, N, Start, End, [...CurrentIndex, 0], true>]
    : [Frist, ...Fill<Rest, N, Start, End, [...CurrentIndex, 0], false>]
  : []
