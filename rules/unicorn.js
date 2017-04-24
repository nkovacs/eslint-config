module.exports = {
    plugins: [
        'unicorn',
    ],
    extends: [
        'plugin:unicorn/recommended',
    ],
    rules: {
        // This should be project-specific, Vue prefers PascalCase for components.
        'unicorn/filename-case': 'off',
        // Escape sequences are more readable this way.
        'unicorn/escape-case': 'warn',
    },
};
