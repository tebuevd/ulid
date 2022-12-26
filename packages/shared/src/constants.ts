// base32 alternative that avoids the letters I,L,O,U
export type CROCKFORD = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";

// Ulid spec requires 80 bits of randomness
export const RANDOMNESS_BITS = 80;
export const TIME_BITS = 48;
export const UINT8ARRAY_SIZE = RANDOMNESS_BITS / 8;
export const BINARY_RADIX = 2;
export const BITS_PER_CROCKFORD_CHAR = 5;

export const CROCKFORD_MAP = Object.freeze({
  "00000": "0",
  "00001": "1",
  "00010": "2",
  "00011": "3",
  "00100": "4",
  "00101": "5",
  "00110": "6",
  "00111": "7",
  "01000": "8",
  "01001": "9",
  "01010": "A",
  "01011": "B",
  "01100": "C",
  "01101": "D",
  "01110": "E",
  "01111": "F",
  "10000": "G",
  "10001": "H",
  "10010": "J",
  "10011": "K",
  "10100": "M",
  "10101": "N",
  "10110": "P",
  "10111": "Q",
  "11000": "R",
  "11001": "S",
  "11010": "T",
  "11011": "V",
  "11100": "W",
  "11101": "X",
  "11110": "Y",
  "11111": "Z",
});
export type CrockfordMapKey = keyof typeof CROCKFORD_MAP;
