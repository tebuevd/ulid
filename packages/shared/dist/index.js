"use strict";var A=Object.defineProperty;var a=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var y=Object.prototype.hasOwnProperty;var S=(e,t)=>{for(var o in t)A(e,o,{get:t[o],enumerable:!0})},I=(e,t,o,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of f(t))!y.call(e,r)&&r!==o&&A(e,r,{get:()=>t[r],enumerable:!(s=a(t,r))||s.enumerable});return e};var _=e=>I(A({},"__esModule",{value:!0}),e);var O={};S(O,{getRandomnessBits:()=>B,getTimeBits:()=>M});module.exports=_(O);var R=Object.freeze({"00000":"0","00001":"1","00010":"2","00011":"3","00100":"4","00101":"5","00110":"6","00111":"7","01000":"8","01001":"9","01010":"A","01011":"B","01100":"C","01101":"D","01110":"E","01111":"F",1e4:"G",10001:"H",10010:"J",10011:"K",10100:"M",10101:"N",10110:"P",10111:"Q",11e3:"R",11001:"S",11010:"T",11011:"V",11100:"W",11101:"X",11110:"Y",11111:"Z"});function B(e){let t=new Uint8Array(10);e(t);let o=t.reduce((r,n)=>{let c=n.toString(2),p="00000000".slice(c.length)+c;return r+p},""),s="";for(let r=0;r<o.length;r+=5){let n=o.slice(r,r+5);s+=R[n]}return s}function M(e=Date.now()){e=Math.floor(e);let t=e.toString(2),o=Array(48-t.length).fill("0").join("")+t,s="00"+o.slice(0,3),r=""+R[s];for(let n=3;n<o.length;n+=5){let c=o.slice(n,n+5);r+=R[c]}return r}0&&(module.exports={getRandomnessBits,getTimeBits});
//# sourceMappingURL=index.js.map
