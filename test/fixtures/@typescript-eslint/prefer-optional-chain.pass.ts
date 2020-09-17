/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/no-explicit-any */

interface OptionalChainingPass {
  [key: string]: any;
}
const preferOptionalChainPass: OptionalChainingPass = {};

preferOptionalChainPass.a?.b?.c;
preferOptionalChainPass['a']?.b?.c;
preferOptionalChainPass.a?.b?.method?.();

preferOptionalChainPass.a?.b?.c?.d?.e;
