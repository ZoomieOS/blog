module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'standard-with-typescript',
    'plugin:i18next/recommended'
  ],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}',
        './**/*.{ts,tsx}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: "module"
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next'
  ],
  rules: {
    "react/jsx-indent": [2, 4],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx']}],
    "import/no-unresolved": 'off',
    "import/prefer-default-export": 'off',
    "no-unused-vars": 'warn',
    "react/required-default-props": 'off',
    "i18next/no-literal-string": ['error', { markupOnly: true }]
  },
  globals: {
    __IS_DEV__: true
  }
}
