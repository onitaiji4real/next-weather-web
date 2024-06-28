export function getHightestTemp(tempArray: number[]) {
  const hightestTemp = Math.max(...tempArray);
  return hightestTemp;
}

export function getLowtestTemp(tempArray: number[]) {
  const lowtestTemp = Math.min(...tempArray);
  return lowtestTemp;
}
