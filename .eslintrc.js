module.exports = {
  'parser': '@typescript-eslint/parser',
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': ['.eslintrc.{js,cjs}'],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'project': './tsconfig.json'
  },
  'settings': {
    'react': {
      'version': 'detect'
    }
  },

  'plugins': ['@typescript-eslint', 'react', 'react-hooks'],
  'rules': {
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/restrict-plus-operands': 'off',
    'no-console': 'off'
  }
};
