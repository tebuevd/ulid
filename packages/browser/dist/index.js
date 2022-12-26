"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrng = void 0;
function getPrng() {
    if (typeof window !== "undefined" && window instanceof Window) {
        return window.crypto.getRandomValues;
    }
    if (typeof self !== "undefined") {
        return self.crypto.getRandomValues;
    }
    if (crypto) {
        return crypto.getRandomValues;
    }
    return undefined;
}
exports.getPrng = getPrng;
//# sourceMappingURL=index.js.map