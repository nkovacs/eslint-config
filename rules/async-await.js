module.exports = {
    plugins: [
        'ava',
        'promise',
    ],
    rules: {
        'ava/prefer-async-await': 'off',
        'promise/prefer-await-to-then': 'error',
        'promise/prefer-await-to-callbacks': 'error',
    },
};
