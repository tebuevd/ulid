import crypto from "crypto";
export function getPrng() {
    var _a;
    if (typeof process !== "undefined" && process.versions.node) {
        return (_a = crypto.getRandomValues) !== null && _a !== void 0 ? _a : crypto.randomFillSync;
    }
    return undefined;
}
//# sourceMappingURL=index.js.map