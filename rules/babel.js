module.exports = {
    parser: 'babel-eslint',
    plugins: [
        'babel',
    ],
    rules: {
        'babel/new-cap': ['error', {
            newIsCap: true,
            newIsCapExceptions: [],
            capIsNew: true,
            capIsNewExceptions: [],
            // Not implemented, but true is the default.
            // properties: true,
        }],
        'babel/object-curly-spacing': ['error', 'always'],
        'babel/no-invalid-this': 'error',
        'babel/semi': ['error', 'always'],
    },
};
