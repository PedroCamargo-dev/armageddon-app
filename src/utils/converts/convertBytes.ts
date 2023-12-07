export function convertBytes(byteSize: number): string {
  if (byteSize < 1024) {
    return `${byteSize} bytes`;
  } else if (byteSize < Math.pow(1024, 2)) {
    return `${(byteSize / 1024).toFixed(2)} KB`;
  } else if (byteSize < Math.pow(1024, 3)) {
    return `${(byteSize / Math.pow(1024, 2)).toFixed(2)} MB`;
  } else if (byteSize < Math.pow(1024, 4)) {
    return `${(byteSize / Math.pow(1024, 3)).toFixed(2)} GB`;
  } else {
    return `${(byteSize / Math.pow(1024, 4)).toFixed(2)} TB`;
  }
}