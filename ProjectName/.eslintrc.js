module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    'filename-rules',
    'react',
    'react-native',
    '@typescript-eslint',
    'jest',
    'react-hooks',
    'folders',
  ],
  extends: [
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:react-native/all',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parserOptions: {
    project: 'tsconfig.json',
    createDefaultProgram: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/ignore': ['node_modules/react-native/index\\.js$'],
    
  },
  env: {
    browser: true,
    amd: true,
    node: true,
    'react-native/react-native': true,
  },
  rules: {
    'no-console': 2,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.ts', '**/*.test.tsx'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
    'filename-rules/match': [
      2,
      {
        '.tsx': 'PascalCase',
        '.ts':
          /^(?!types|styles)([a-z]+-)*[a-z]+\.?(test|presets|styles|props|constants|d|slice|thunk|interface|types|setup|hook|context)?(\.test)?(\.ts)?$/,
      },
    ],
    'import/prefer-default-export': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
    'react/require-default-props': 0,
    'react/jsx-wrap-multilines': 0,
    'global-require': 0,
    'folders/match-regex': [2, '^__mocks__|[a-z-]+$', '/react-native/src/'],
    'consistent-return': 0,
    // style rules
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 0,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 0,
    'react-native/no-raw-text': 0,
    'react-native/no-single-element-style-arrays': 2,
    'react-native/sort-styles': [
      'error',
      'asc',
      {
        ignoreClassNames: false,
        ignoreStyleProperties: false,
      },
    ],
    'import/order':[
      "error",
      {
        "groups":[
          ["builtin","external"],
          ["internal"],
          ["parent","sibling","index"]
        ]
        ,
        "pathGroups":[
          {"pattern":"@aib/**",
           "group":"internal",
        }
        ],
        "pathGroupsExcludedImportTypes": 
   ["builtin","object"],
        "newlines-between":"always",
        "alphabetize":{
          "order":"asc",
          "caseInsensitive":true
        }
      }
    ],
    "padding-line-between-statements":[
      0,
      {
        "blankLine":"always",
        "prev":"import",
        "next":"*"
      }
    ]

  },
};
