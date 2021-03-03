module.exports = {
  rules: {
    'array-func/from-map': 'error',
    // Use of `this` is disallowed altogether.
    'array-func/no-unnecessary-this-arg': 'off',
    'array-func/prefer-array-from': 'error',
    'array-func/avoid-reverse': 'error',
    // Duplicate of unicorn/prefer-array-flat-map.
    'array-func/prefer-flat-map': 'off',
    // Duplicate of unicorn/prefer-array-flat.
    'array-func/prefer-flat': 'off',
  },
};
