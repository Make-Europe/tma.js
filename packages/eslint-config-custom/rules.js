module.exports = {
  // We don't use default exports anywhere.
  'import/prefer-default-export': 0,
  // We have no problem related to extraneous dependencies.
  'import/no-extraneous-dependencies': 0,
  // Usage of "continue" is normal and prevents code from nesting.
  'no-continue': 0,
  // Enable default behavior of this rule.
  'object-curly-newline': ['error', { consistent: true }],
  'consistent-return': 0,
};