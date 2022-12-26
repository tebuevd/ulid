"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeBits = exports.getRandomnessBits = void 0;
const constants_1 = require("./constants");
function getRandomnessBits(prng) {
    const bits = new Uint8Array(constants_1.UINT8ARRAY_SIZE);
    prng(bits);
    const numAsBinaryString = bits.reduce((arr, cur) => {
        const binary = cur.toString(constants_1.BINARY_RADIX);
        const padded = "00000000".slice(binary.length) + binary;
        return arr + padded;
    }, "");
    let numAsCrockfordString = "";
    for (let i = 0; i < numAsBinaryString.length; i += constants_1.BITS_PER_CROCKFORD_CHAR) {
        const key = numAsBinaryString.slice(i, i + constants_1.BITS_PER_CROCKFORD_CHAR);
        numAsCrockfordString += constants_1.CROCKFORD_MAP[key];
    }
    return numAsCrockfordString;
}
exports.getRandomnessBits = getRandomnessBits;
function getTimeBits(time = Date.now()) {
    //make sure time is an integer when passed in
    time = Math.floor(time);
    const timeInBinary = time.toString(constants_1.BINARY_RADIX);
    const padded = Array(constants_1.TIME_BITS - timeInBinary.length)
        .fill("0")
        .join("") + timeInBinary;
    const firstletter = ("00" + padded.slice(0, 3));
    let numAsCrockfordString = "" + constants_1.CROCKFORD_MAP[firstletter];
    for (let i = 3; i < padded.length; i += constants_1.BITS_PER_CROCKFORD_CHAR) {
        const key = padded.slice(i, i + constants_1.BITS_PER_CROCKFORD_CHAR);
        numAsCrockfordString += constants_1.CROCKFORD_MAP[key];
    }
    return numAsCrockfordString;
}
exports.getTimeBits = getTimeBits;
//# sourceMappingURL=index.js.map