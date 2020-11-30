const stylelintConfigRecessOrder = require('stylelint-config-recess-order');

const propertiesOrder = stylelintConfigRecessOrder.rules[
  'order/properties-order'
].map((rule) => ({ ...rule, emptyLineBefore: 'always' }));

module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order'],
  rules: {
    'selector-pseudo-element-colon-notation': null,
    'declaration-block-trailing-semicolon': null,
    'no-missing-end-of-source-newline': null,
    'declaration-colon-newline-after': null,
    'value-list-comma-newline-after': null,
    'declaration-empty-line-before': null,
    'function-calc-no-invalid': null,
    'no-extra-semicolons': null,
    'value-keyword-case': null,
    'function-name-case': null,
    'no-eol-whitespace': null,
    indentation: null,
    'order/properties-order': propertiesOrder
  }
};
