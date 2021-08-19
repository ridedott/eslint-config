const noUselessLengthCheckFail = [0, 0, 0];

if (
  noUselessLengthCheckFail.length === 0 ||
  noUselessLengthCheckFail.every(Boolean)
) {
  // Do nothing.
}
