module.exports = {
    plugins: [
        'promise',
    ],
    rules: {
        'promise/prefer-await-to-then': 'error',
        'promise/prefer-await-to-callbacks': 'error',
    },
};
