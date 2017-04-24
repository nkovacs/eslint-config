module.exports = {
    parser: 'babel-eslint',
    plugins: [
        'flowtype',
    ],
    settings: {
        flowtype: {
            onlyFilesWithFlowAnnotation: true,
        },
    },
    rules: {
        // Both go and php use bool.
        'flowtype/boolean-style': [
            'error',
            'bool',
        ],
        'flowtype/define-flow-type': 'warn',
        'flowtype/delimiter-dangle': [
            'error',
            'always-multiline',
        ],
        'flowtype/generic-spacing': [
            'error',
            'never',
        ],
        'flowtype/no-dupe-keys': 'error',
        'flowtype/no-primitive-constructor-types': 'error',
        'flowtype/no-types-missing-file-annotation': 'error',
        // Use eslint-disable-line if you must.
        'flowtype/no-weak-types': 'warn',
        'flowtype/object-type-delimiter': [
            'error',
            'comma',
        ],
        'flowtype/require-parameter-type': [
            'error',
            {
                excludeArrowFunctions: 'expressionsOnly',
            },
        ],
        'flowtype/require-return-type': [
            'error',
            'always',
            {
                excludeArrowFunctions: 'expressionsOnly',
                annotateUndefined: 'never',
            },
        ],
        'flowtype/require-valid-file-annotation': ['error', 'never'],
        'flowtype/require-variable-type': 'error',
        'flowtype/semi': [
            'error',
            'always',
        ],
        'flowtype/sort-keys': 'off',
        'flowtype/space-after-type-colon': [
            'error',
            'always',
            {
                allowLineBreak: false,
            },
        ],
        'flowtype/space-before-generic-bracket': [
            'error',
            'never',
        ],
        'flowtype/space-before-type-colon': [
            'error',
            'never',
        ],
        'flowtype/type-id-match': [
            'off',
            '^([A-Z][a-z0-9]+)+Type$',
        ],
        'flowtype/union-intersection-spacing': [
            'error',
            'always',
        ],
        'flowtype/use-flow-type': 'warn',
        'flowtype/valid-syntax': 'warn',
    },
};
