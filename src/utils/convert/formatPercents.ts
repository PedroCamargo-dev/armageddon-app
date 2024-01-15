export function formatPercents(value: any, decimals = 2) {
  const dm = decimals < 0 ? 0 : decimals;
  return parseFloat((Number(value) * 100).toFixed(dm));
}
