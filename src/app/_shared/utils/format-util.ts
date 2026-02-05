export function formatNumberToString(
  value: number,
  options?: {
    signDisplay?: Intl.NumberFormatOptionsSignDisplay;
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
  },
): string {
  return new Intl.NumberFormat("ko-KR", {
    signDisplay: options?.signDisplay ?? "auto",
    minimumFractionDigits: options?.minimumFractionDigits ?? 2,
    maximumFractionDigits: options?.maximumFractionDigits ?? 2,
  }).format(value);
}
