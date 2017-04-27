module.exports = {
    plugins: [
        'mocha',
    ],
    rules: {
        'mocha/handle-done-callback': 'error',
        'mocha/max-top-level-suites': 'warn',
        'mocha/no-exclusive-tests': 'warn',
        'mocha/no-global-tests': 'error',
        'mocha/no-hooks': 'off',
        'mocha/no-hooks-for-single-case': 'off',
        'mocha/no-identical-title': 'error',
        'mocha/no-mocha-arrows': 'error',
        // prefer-arrow-callback has to be disabled
        'prefer-arrow-callback': 'off',
        // func-names are annoying and unnecessary here
        'func-names': 'off',
        'mocha/no-nested-tests': 'error',
        'mocha/no-pending-tests': 'warn',
        'mocha/no-return-and-callback': 'error',
        'mocha/no-sibling-hooks': 'error',
        // Off to stop autofixer from fixing it.
        'mocha/no-skipped-tests': 'off',
        'mocha/no-synchronous-tests': 'off',
        'mocha/no-top-level-hooks': 'error',
        'mocha/valid-suite-description': 'off',
        'mocha/valid-test-description': ['error', '^should'],
    },
};
