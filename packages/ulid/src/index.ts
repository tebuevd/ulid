import { getPrng as browserPrng } from "@ulid/browser";
import { getPrng as nodePrng } from "@ulid/node";
import { getRandomnessBits, getTimeBits } from "@ulid/shared";

const prng = browserPrng() ?? nodePrng();

export function ulid(seedTime?: number) {
  if (!prng) {
    throw new Error(
      "No cryptographically secure PRNG found in the current environment."
    );
  }
  return getTimeBits(seedTime) + getRandomnessBits(prng);
}
