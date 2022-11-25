/* eslint-disable @typescript-eslint/naming-convention */
// eslint-disable-next-line no-undef
module.exports = {
  env: {
    es6: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/strict',
    // TODO - figure out - it feels kind of broken - reports `any` when proper type is available
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    // eslint-disable-next-line no-undef, @typescript-eslint/no-unsafe-assignment
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json']
  },
  rules: {
    'no-undef': 2,
    'no-implicit-globals': 2,
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/prefer-reduce-type-parameter': 0,
    // this rule seems to be quite buggy
    '@typescript-eslint/no-unnecessary-condition': 0
  },
  ignorePatterns: ['PKG/*/lib/**', 'PKG/*/build/**', 'PKG/*/dev/**']
}
