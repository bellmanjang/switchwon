export function changePercentageColor(changePercentage: number) {
  if (changePercentage > 0) {
    return "buy";
  } else if (changePercentage < 0) {
    return "sell";
  } else {
    return "text-tertiary";
  }
}
