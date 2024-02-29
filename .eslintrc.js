const baseFixableRules = {
  'arrow-body-style': 'error',
  'capitalized-comments': 'error',
  curly: 'error',
  'dot-notation': 'error',
  eqeqeq: 'error',
  'logical-assignment-operators': 'error',
  'multiline-comment-style': 'error',
  'no-confusing-arrow': 'error',
  'no-div-regex': 'error',
  'no-else-return': 'error',
  'no-extra-bind': 'error',
  'no-extra-label': 'error',
  'no-floating-decimal': 'error',
  'no-implicit-coercion': 'error',
  'no-lonely-if': 'error',
  'no-undef-init': 'error',
  'no-unneeded-ternary': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-rename': 'error',
  'no-useless-return': 'error',
  'no-var': 'error',
  'object-shorthand': 'error',
  'one-var': 'error',
  'one-var-declaration-per-line': 'error',
  'operator-assignment': 'error',
  'prefer-arrow-callback': 'error',
  'prefer-const': 'error',
  'prefer-destructuring': 'error',
  'prefer-exponentiation-operator': 'error',
  'prefer-numeric-literals': 'error',
  'prefer-object-has-own': 'error',
  'prefer-object-spread': 'error',
  'prefer-template': 'error',
  'quote-props': 'error',
  'sort-imports': 'error',
  'sort-vars': 'error',
  'spaced-comment': 'error',
  strict: 'error',
  yoda: 'error',
};

const baseCustomRules = {
  camelcase: 'error',
  'capitalized-comments': 'off',
  'consistent-return': 'error',
  'no-empty-function': 'error',
  'no-loop-func': 'error',
  'no-proto': 'error',
  'no-restricted-syntax': [
    'error',
    {
      selector:
        ':not(BinaryExpression:matches([operator="!=="], [operator="==="])) > Literal[value=null]',
      message:
        'Usage of "null" is deprecated except when received from legacy APIs; use "undefined" instead',
    },
  ],
  'no-return-await': 'error',
  'no-use-before-define': 'error',
  'no-useless-call': 'error',
  'no-useless-constructor': 'error',
  'one-var': 'off',
  'sort-imports': 'off',
  'sort-vars': 'off',
};

/*
 * eslint-comments has no fixable rules, hence we don't have
 * a commentsFixableRules section
 */

const commentsCustomRules = {
  'eslint-comments/no-unused-disable': 'error',
};

const reactFixableRules = {
  'react/destructuring-assignment': 'error',
  'react/function-component-definition': 'error',
  'react/jsx-boolean-value': 'error',
  'react/jsx-closing-bracket-location': 'error',
  'react/jsx-closing-tag-location': 'error',
  'react/jsx-curly-brace-presence': 'error',
  'react/jsx-curly-newline': 'error',
  'react/jsx-curly-spacing': 'error',
  'react/jsx-equals-spacing': 'error',
  'react/jsx-first-prop-new-line': 'error',
  'react/jsx-fragments': 'error',
  'react/jsx-indent': 'error',
  'react/jsx-indent-props': 'error',
  'react/jsx-max-props-per-line': 'error',
  'react/jsx-newline': 'error',
  'react/jsx-no-leaked-render': 'error',
  'react/jsx-no-useless-fragment': 'error',
  'react/jsx-one-expression-per-line': 'error',
  'react/jsx-props-no-multi-spaces': 'error',
  'react/jsx-sort-props': 'error',
  'react/jsx-tag-spacing': 'error',
  'react/jsx-wrap-multilines': 'error',
  'react/no-arrow-function-lifecycle': 'error',
  'react/prefer-read-only-props': 'error',
  'react/self-closing-comp': 'error',
  'react/sort-prop-types': 'error',
};

const reactCustomRules = {
  'react/jsx-no-useless-fragment': 'off',
  'react/prefer-read-only-props': 'off',
  'react/prop-types': 'off',
};

const importFixableRules = {
  'import/consistent-type-specifier-style': 'error',
  'import/first': 'error',
  'import/newline-after-import': 'error',
  'import/no-absolute-path': 'error',
  'import/no-empty-named-blocks': 'error',
  'import/no-import-module-exports': 'error',
  'import/no-relative-packages': 'error',
  'import/no-namespace': 'error',
  'import/no-useless-path-segments': 'error',
  'import/order': 'error',
};

const importCustomRules = {
  'import/extensions': ['error', 'never', { json: 'always' }],
  'import/no-extraneous-dependencies': 'error',
  'import/no-mutable-exports': 'error',
  'import/no-named-default': 'error',
  'import/no-namespace': 'off',
  'import/no-unused-modules': 'error',
  'import/order': ['error', { alphabetize: { order: 'asc' }, groups: [] }],
};

const typescriptFixableRules = {
  '@typescript-eslint/consistent-type-exports': 'error',
  '@typescript-eslint/consistent-type-imports': 'error',
  '@typescript-eslint/explicit-member-accessibility': 'error',
  '@typescript-eslint/member-delimiter-style': 'error',
  '@typescript-eslint/method-signature-style': 'error',
  '@typescript-eslint/no-confusing-void-expression': 'error',
  '@typescript-eslint/no-duplicate-type-constituents': 'error',
  '@typescript-eslint/no-import-type-side-effects': 'error',
  '@typescript-eslint/no-unnecessary-qualifier': 'error',
  '@typescript-eslint/no-useless-empty-export': 'error',
  '@typescript-eslint/prefer-readonly': 'error',
  '@typescript-eslint/prefer-regexp-exec': 'error',
  '@typescript-eslint/promise-function-async': 'error',
  '@typescript-eslint/sort-type-constituents': 'error',
  '@typescript-eslint/strict-boolean-expressions': 'error',
  '@typescript-eslint/type-annotation-spacing': 'error',
};

const typescriptCustomRules = {
  '@typescript-eslint/no-unused-vars': [
    'error',
    { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
  ],
  '@typescript-eslint/strict-boolean-expressions': [
    'error',
    { allowString: true, allowNullableObject: true },
  ],
  '@typescript-eslint/switch-exhaustiveness-check': 'error',
};

/*
 * eslint-plugin-tailwindcss does not list fixable rules explicitly,
 * hence we don't have a tailwindcssFixableRules section
 */

const tailwindcssCustomRules = {
  'tailwindcss/no-custom-classname': 'off',
};

module.exports = {
  overrides: [
    {
      files: ['**/*.+(js|jsx|ts|tsx)'],
      extends: [
        'eslint:recommended',
        'plugin:eslint-comments/recommended',
        'plugin:import/recommended',
        'plugin:promise/recommended',
        'plugin:regexp/recommended',
      ],
      rules: {
        ...baseFixableRules,
        ...baseCustomRules,
        ...commentsCustomRules,
        ...importFixableRules,
        ...importCustomRules,
      },
    },
    {
      files: ['**/*.+(ts|tsx)'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
        'plugin:import/typescript',
        'plugin:import/react',
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:tailwindcss/recommended',
      ],
      parserOptions: { project: true },
      rules: {
        ...reactFixableRules,
        ...reactCustomRules,
        ...typescriptFixableRules,
        ...typescriptCustomRules,
        ...tailwindcssCustomRules,
      },
      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
          },
        },
        react: {
          version: 'detect',
        },
      },
    },
    {
      files: ['**/*.+(js|jsx|ts|tsx)'],
      extends: ['prettier'],
    },
  ],
  plugins: ['only-error'],
  extends: ['next/core-web-vitals'],
  rules: {
    '@next/next/no-img-element': 'off',
  },
};
