const preferSetHasPass = new Set([1]);
const preferSetHasPassFunction = (value: number): boolean =>
  preferSetHasPass.has(value);
