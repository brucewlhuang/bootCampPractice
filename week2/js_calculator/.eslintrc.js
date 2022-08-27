module.exports = {
  'env': {
    'es6': true,
    'node': true,
    'jest': true,
  },
  'extends': ['eslint:recommended', 'google'],
  'parserOptions': {
    'parser': 'babel-eslint',
    'ecmaVersion': 2018,
  },
  'rules': {
    'no-param-reassign': 'off',
    'class-methods-use-this': 'off',
    'max-len': [2, {
      'code': 120,
      'tabWidth': 2,
      'ignoreUrls': true,
      'ignoreComments': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
    }],
    'require-jsdoc': 0,
  },
};
