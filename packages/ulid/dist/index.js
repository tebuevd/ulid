"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ulid = void 0;
const browser_1 = require("@ulid/browser");
const node_1 = require("@ulid/node");
const shared_1 = require("@ulid/shared");
const prng = (_a = (0, browser_1.getPrng)()) !== null && _a !== void 0 ? _a : (0, node_1.getPrng)();
function ulid() {
    if (!prng) {
        throw new Error("No cryptographically secure PRNG found in the current environment.");
    }
    return (0, shared_1.getTimeBits)() + (0, shared_1.getRandomnessBits)(prng);
}
exports.ulid = ulid;
//# sourceMappingURL=index.js.map