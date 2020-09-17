/* eslint-disable prefer-named-capture-group */
/* eslint-disable require-unicode-regexp */
/* eslint-disable unicorn/better-regex */

const regexPass1 = /\bOakland\b/;
const regexPass2 = /\b(Oakland|San Francisco)\b/i;
const regexPass3 = /^\d+1337\d+$/i;
const regexPass4 = /^\d+(1337|404)\d+$/i;
const regexPass5 = /^\d+(1337|404)*\d+$/i;
const regexPass6 = new RegExp(new Array(1).join('a?') + new Array(1).join('a'));
