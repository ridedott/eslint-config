/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-unused-expressions */

interface OptionalChainPass {
  [key: string]: any;
}
const preferOptionalChainPass: OptionalChainPass = {};

preferOptionalChainPass?.a?.b?.c;
preferOptionalChainPass?.['a']?.b?.c;
preferOptionalChainPass?.a?.b?.method?.();

preferOptionalChainPass?.a?.b?.c?.d?.e;
