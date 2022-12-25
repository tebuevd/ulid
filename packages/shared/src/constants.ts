// base32 alternative that avoids the letters I,L,O,U
export const CROCKFORD = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";

// Ulid spec requires 80 bits of randomness
export const RANDOMNESS_BITS = 80;
export const TIME_BITS = 48;
export const UINT8ARRAY_SIZE = RANDOMNESS_BITS / 8;
export const BINARY_RADIX = 2;
export const BITS_PER_CROCKFORD_CHAR = 5;

export const CROCKFORD_MAP = Object.freeze({
  "00000": CROCKFORD[0x00] ?? "0",
  "00001": CROCKFORD[0x01] ?? "1",
  "00010": CROCKFORD[0x02] ?? "2",
  "00011": CROCKFORD[0x03] ?? "3",
  "00100": CROCKFORD[0x04] ?? "4",
  "00101": CROCKFORD[0x05] ?? "5",
  "00110": CROCKFORD[0x06] ?? "6",
  "00111": CROCKFORD[0x07] ?? "7",
  "01000": CROCKFORD[0x08] ?? "8",
  "01001": CROCKFORD[0x09] ?? "9",
  "01010": CROCKFORD[0x0a] ?? "A",
  "01011": CROCKFORD[0x0b] ?? "B",
  "01100": CROCKFORD[0x0c] ?? "C",
  "01101": CROCKFORD[0x0d] ?? "D",
  "01110": CROCKFORD[0x0e] ?? "E",
  "01111": CROCKFORD[0x0f] ?? "F",
  "10000": CROCKFORD[0x10] ?? "G",
  "10001": CROCKFORD[0x11] ?? "H",
  "10010": CROCKFORD[0x12] ?? "J",
  "10011": CROCKFORD[0x13] ?? "K",
  "10100": CROCKFORD[0x14] ?? "M",
  "10101": CROCKFORD[0x15] ?? "N",
  "10110": CROCKFORD[0x16] ?? "P",
  "10111": CROCKFORD[0x17] ?? "Q",
  "11000": CROCKFORD[0x18] ?? "R",
  "11001": CROCKFORD[0x19] ?? "S",
  "11010": CROCKFORD[0x1a] ?? "T",
  "11011": CROCKFORD[0x1b] ?? "V",
  "11100": CROCKFORD[0x1c] ?? "W",
  "11101": CROCKFORD[0x1d] ?? "X",
  "11110": CROCKFORD[0x1e] ?? "Y",
  "11111": CROCKFORD[0x1f] ?? "Z",
});
export type CrockfordMapKey = keyof typeof CROCKFORD_MAP;
