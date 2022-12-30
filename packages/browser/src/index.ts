export function getPrng() {
  if (typeof window !== "undefined" && window instanceof Window) {
    return window.crypto.getRandomValues.bind(window.crypto);
  }

  if (typeof self !== "undefined") {
    return self.crypto.getRandomValues.bind(self.crypto);
  }

  if (typeof crypto !== "undefined") {
    return crypto.getRandomValues.bind(crypto);
  }

  return undefined;
}
