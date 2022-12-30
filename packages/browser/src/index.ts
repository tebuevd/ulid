export function getPrng() {
  if (typeof window !== "undefined" && window instanceof Window) {
    return window.crypto.getRandomValues;
  }

  if (typeof self !== "undefined") {
    return self.crypto.getRandomValues;
  }

  if (typeof crypto !== "undefined") {
    return crypto.getRandomValues;
  }

  return undefined;
}
