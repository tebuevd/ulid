import * as ulid from "@ulid/shared";

export function getPrng() {
  const windowExists = window !== undefined && window instanceof Window;

  if (windowExists) {
    return crypto.getRandomValues;
  }

  if (crypto) {
    return crypto.getRandomValues;
  }

  throw new Error("No cryptographically secure PRNG found.");
}

export function getRandomnessBits() {
  const prng = getPrng();
  return ulid.getRandomnessBits(prng);
}
