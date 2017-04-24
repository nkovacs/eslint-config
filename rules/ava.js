module.exports = {
    plugins: [
        'ava',
    ],
    // maybe enable:
    // - ava/assertion-arguments message option
    // - ava/no-cb-test
    extends: [
        'plugin:ava/recommended',
    ],
    rules: {
        // enabled in async-await config
        'ava/prefer-async-await': 'off',
    },
};
