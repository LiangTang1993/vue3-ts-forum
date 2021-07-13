module.exports = {
  rules: {
    'no-unused-vars': ['warn', { 'varsIgnorePattern': '^_' }],
    '@typescript-eslint/no-unused-vars': ['warn', { 'varsIgnorePattern': '^_' }],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
  },
};