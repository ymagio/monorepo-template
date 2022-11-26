# A monorepo template

A basic setup for support monorepo pattern.

Tools configured:
* [typescript](https://www.typescriptlang.org/)
* [eslint](https://eslint.org/) including [prettier](https://prettier.io/)
* [github actions](https://github.com/features/actions) - basic setup: always test & build everything
* [vite](https://vitejs.dev/)
* [vitest](https://vitest.dev/)

## [VSCode](https://code.visualstudio.com/) setup

1. Install [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. In folder `.vscode` create file `settings.json` with:
```json
{
  "typescript.tsdk": "node_modules/typescript/lib", // use project typescript version
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true // autoformat upon file saved
  },
  "eslint.rules.customizations": [ // change ESLint settings for development
    { "rule": "@typescript-eslint/no-unused-vars", "severity": "warn" }
  ],
  "eslint.workingDirectories": ["PKG"]
}
```