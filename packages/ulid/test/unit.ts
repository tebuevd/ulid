import { ulid } from "../src";
import { ulid as ulidjs } from "ulid";

console.time("ulid");
for (let i = 0; i < 1000000; i++) {
  ulid();
}
console.timeEnd("ulid");

console.time("ulidjs");
for (let i = 0; i < 1000000; i++) {
  ulidjs();
}
console.timeEnd("ulidjs");
