export type AuthorUtilityType<T> = {
  [K in keyof T as `author${Capitalize<string & K>}`]: T[K]
}
