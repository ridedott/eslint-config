/* eslint-disable @typescript-eslint/no-unused-vars */
const regexFail1 = /^(a?){25}(a){25}$/;
const regexFail2 = RegExp(Array(27).join('a?') + Array(27).join('a'));
const regexFail3 = /(x+x+)+y/;
const regexFail4 = /foo|(x+x+)+y/;
const regexFail5 = /(a+){10}y/;
const regexFail6 = /(a+){2}y/;
const regexFail7 = /(.*){1,32000}[bc]/;
