import crypto from "crypto";

export function getPrng() {
  if (typeof process !== "undefined" && process.versions.node) {
    return crypto.getRandomValues ?? crypto.randomFillSync;
  }

  return undefined;
}
