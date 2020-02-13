/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-constant-condition */
/* eslint-disable no-empty */
/* eslint-disable no-useless-return */

const barBar = () => {}

const passPaddingLine = () => {
  barBar();

  // For block-like
  if(false){}

  barBar();

  // For return
  return;
}
