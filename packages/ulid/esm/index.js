var _a;
import { getPrng as browserPrng } from "@ulid/browser";
import { getPrng as nodePrng } from "@ulid/node";
import { getRandomnessBits, getTimeBits } from "@ulid/shared";
const prng = (_a = browserPrng()) !== null && _a !== void 0 ? _a : nodePrng();
export function ulid() {
    if (!prng) {
        throw new Error("No cryptographically secure PRNG found in the current environment.");
    }
    return getTimeBits() + getRandomnessBits(prng);
}
//# sourceMappingURL=index.js.map