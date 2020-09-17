/* eslint-disable require-unicode-regexp */

const regexShorthandFail1 = /[0-9]/;
const regexShorthandFail2 = /[^0-9]/;
const regexShorthandFail3 = /[a-zA-Z0-9_]/;
const regexShorthandFail4 = /[a-z0-9_]/i;
const regexShorthandFail5 = /[^a-zA-Z0-9_]/;
const regexShorthandFail6 = /[^a-z0-9_]/i;
const regexShorthandFail7 = /[0-9]\.[a-zA-Z0-9_]\-[^0-9]/i;
