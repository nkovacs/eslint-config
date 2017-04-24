module.exports = {
    extends: [
        './rules/ava.js',
        './rules/babel.js',
        './rules/best-practices.js',
        './rules/es6.js',
        './rules/flowtype.js',
        './rules/imports.js',
        './rules/node.js',
        './rules/possible-errors.js',
        './rules/promise.js',
        './rules/style.js',
        './rules/unicorn.js',
        './rules/variables.js',
    ],
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
    },
};
