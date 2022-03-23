type IsPalindrome<T extends string | number> =
  `${T}` extends `${infer L}${infer Rest}${infer R}`
    ? L extends R
      ? IsPalindrome<Rest>
      : false
    : true
