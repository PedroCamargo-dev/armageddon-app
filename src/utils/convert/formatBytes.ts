export function FormatBytes(value: number | string, decimals = 2) {
  if (value === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
  const i = Math.floor(Math.log(Number(value)) / Math.log(k));
  return (
    parseFloat((Number(value) / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  );
}
