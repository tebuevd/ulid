"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrng = void 0;
const crypto_1 = __importDefault(require("crypto"));
function getPrng() {
    var _a;
    if (typeof process !== "undefined" && process.versions.node) {
        return (_a = crypto_1.default.getRandomValues) !== null && _a !== void 0 ? _a : crypto_1.default.randomFillSync;
    }
    return undefined;
}
exports.getPrng = getPrng;
//# sourceMappingURL=index.js.map