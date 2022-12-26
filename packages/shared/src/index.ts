import {
  BINARY_RADIX,
  BITS_PER_CROCKFORD_CHAR,
  type CrockfordMapKey,
  CROCKFORD_MAP,
  TIME_BITS,
  UINT8ARRAY_SIZE,
} from "./constants";

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
    const key = numAsBinaryString.slice(
      i,
      i + BITS_PER_CROCKFORD_CHAR
    ) as CrockfordMapKey;
    numAsCrockfordString += CROCKFORD_MAP[key];
  }

  return numAsCrockfordString;
}

export function getTimeBits(time: number = Date.now()) {
  //make sure time is an integer when passed in
  time = Math.floor(time);

  const timeInBinary = time.toString(BINARY_RADIX);
  const padded =
    Array(TIME_BITS - timeInBinary.length)
      .fill("0")
      .join("") + timeInBinary;

  const firstletter = ("00" + padded.slice(0, 3)) as CrockfordMapKey;
  let numAsCrockfordString = "" + CROCKFORD_MAP[firstletter];

  for (let i = 3; i < padded.length; i += BITS_PER_CROCKFORD_CHAR) {
    const key = padded.slice(i, i + BITS_PER_CROCKFORD_CHAR) as CrockfordMapKey;
    numAsCrockfordString += CROCKFORD_MAP[key];
  }

  return numAsCrockfordString;
}
