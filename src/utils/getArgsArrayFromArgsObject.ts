export const getArgsArrayFromArgsObject = (rest: Record<string, any>) =>
  Object.keys(rest).map(el => rest[el])
