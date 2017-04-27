module.exports = {
    extends: [
        './rules/ava.js',
        './rules/async-await.js',
    ],
    rules: {
        'ava/prefer-async-await': 'error',
    },
};
