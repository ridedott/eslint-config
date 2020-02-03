/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */
interface Test {
  [key: string]: any;
}
const preferOptionalChainPass:Test = {};

preferOptionalChainPass?.a?.b?.c;
preferOptionalChainPass?.['a']?.b?.c;
preferOptionalChainPass?.a?.b?.method?.();

preferOptionalChainPass?.a?.b?.c?.d?.e;
