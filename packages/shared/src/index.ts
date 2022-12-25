// base32 alternative that avoids the letters I,L,O,U
const CROCKFORD = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";

// Ulid spec requires 80 bits of randomness
const RANDOMNESS_BITS = 80;
const UINT8ARRAY_SIZE = RANDOMNESS_BITS / 8;
const BINARY_RADIX = 2;
const BITS_PER_CROCKFORD_CHAR = RANDOMNESS_BITS / CROCKFORD.length;

export function getRandomnessBits(prng: (arr: ArrayBufferView) => any) {
  const bits = new Uint8Array(UINT8ARRAY_SIZE);
  prng(bits);

  const numAsBinaryString = bits.reduce((arr, cur) => {
    const binary = cur.toString(BINARY_RADIX);
    const padded = "00000000".slice(binary.length) + binary;

    return arr + padded;
  }, "");

  let numAsCrockfordString = "";

  for (let i = 0; i < numAsBinaryString.length; i += BITS_PER_CROCKFORD_CHAR) {
    const segment = numAsBinaryString.slice(i, i + BITS_PER_CROCKFORD_CHAR);
    const value = parseInt(segment, BINARY_RADIX);
    numAsCrockfordString += CROCKFORD[value];
  }

  return numAsCrockfordString;
}
