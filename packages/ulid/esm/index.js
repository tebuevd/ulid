import{getPrng as e}from"@ulid/browser";import{getPrng as o}from"@ulid/node";import{getRandomnessBits as t,getTimeBits as i}from"@ulid/shared";var r=e()??o();function p(n){if(!r)throw new Error("No cryptographically secure PRNG found in the current environment.");return i(n)+t(r)}export{p as ulid};
//# sourceMappingURL=index.js.map
