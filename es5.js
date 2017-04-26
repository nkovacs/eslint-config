module.exports = {
    extends: [
        './rules/best-practices.js',
        './rules/no-use-extend-native.js',
        './rules/node.js',
        './rules/possible-errors.js',
        './rules/promise.js',
        './rules/style.js',
        './rules/unicorn.js',
        './rules/variables.js',
    ],
    rules: {
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'never',
            exports: 'never',
            functions: 'never',
        }],
        // restore rules disabled because of babel
        'new-cap': ['error', {
            newIsCap: true,
            newIsCapExceptions: [],
            capIsNew: true,
            capIsNewExceptions: [],
            properties: true,
        }],
        'object-curly-spacing': ['error', 'always'],
        semi: ['error', 'always'],
        'no-invalid-this': 'error',
    },
    parserOptions: {
        ecmaVersion: 5,
        sourceType: 'module',
    },
};
