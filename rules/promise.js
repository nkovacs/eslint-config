module.exports = {
    plugins: [
        'promise',
    ],
    // the recommended promise config has too many warnings, only include errors.
    rules: {
        'promise/always-return': 'error',
        'promise/no-return-wrap': 'error',
        'promise/param-names': 'error',
        'promise/catch-or-return': 'error',
        // enabled in async-await config:
        // 'promise/prefer-await-to-then': 'error',
        // 'promise/prefer-await-to-callbacks': 'error',
    },
};
