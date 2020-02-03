/* eslint-disable no-empty */
/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable no-useless-return */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */


const bar = () => {}

const failPaddingLine = () => {
  bar();
  // For block-like
  if(false){}
  bar();
  // For return
  return;
}
