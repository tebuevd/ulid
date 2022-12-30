function n(){if(typeof window<"u"&&window instanceof Window)return window.crypto.getRandomValues.bind(window.crypto);if(typeof self<"u")return self.crypto.getRandomValues.bind(self.crypto);if(typeof crypto<"u")return crypto.getRandomValues.bind(crypto)}export{n as getPrng};
//# sourceMappingURL=index.mjs.map
