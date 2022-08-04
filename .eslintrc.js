module.exports = {
  "root": true,
  "extends": [
    "lxsmnsyc/typescript/solid"
  ],
  "parserOptions": {
    "project": "./tsconfig.eslint.json",
    "tsconfigRootDir": __dirname,
  },
  "rules": {
    "no-param-reassign": "off",
    "no-restricted-syntax": "off",
    "no-bitwise": "off"
  }
};