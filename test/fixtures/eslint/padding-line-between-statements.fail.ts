/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-constant-condition */
/* eslint-disable no-empty */
/* eslint-disable no-useless-return */

const bar = () => {}

const failPaddingLine = () => {
  bar();
  // For block-like
  if(false){}
  bar();
  // For return
  return;
}
