module.exports = {
    plugins: [
        'ava',
        'promise',
    ],
    rules: {
        'ava/prefer-async-await': 'error',
        'promise/prefer-await-to-then': 'error',
        'promise/prefer-await-to-callbacks': 'error',
    },
};
