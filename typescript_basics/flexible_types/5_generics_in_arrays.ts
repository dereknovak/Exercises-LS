function filterByType<T>(array: any[], filterType: string): T[] {
  return array.filter(value => typeof value === filterType);
}