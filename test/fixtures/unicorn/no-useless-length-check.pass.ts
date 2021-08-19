const noUselessLengthCheckPass = [0, 0, 0];

const isNonEmptyAllTrulyArray =
  noUselessLengthCheckPass.length > 0 &&
  noUselessLengthCheckPass.every(Boolean);
