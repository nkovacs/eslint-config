// This is a modified config for projects with go and js code.
// It switches to tab for indentation and no semicolons,
// for consistency with go.
// This is the es5 version.

module.exports = {
    extends: [
        './es5.js',
    ],
    rules: {
        indent: ['error', 'tab', {
            SwitchCase: 0, // consistency with go
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            MemberExpression: 1,
            FunctionDeclaration: {
                body: 1,
                parameters: 1,
            },
            FunctionExpression: {
                body: 1,
                parameters: 1,
            },
            CallExpression: {
                arguments: 1,
            },
            ArrayExpression: 1,
            ObjectExpression: 1,
        }],
        'no-tabs': 'off',
        semi: ['error', 'never'],
        'key-spacing': ['error', {
            beforeColon: false,
            afterColon: true,
            mode: 'strict',
            align: 'value',
        }],
        quotes: ['error', 'double', { avoidEscape: false, allowTemplateLiterals: true }],
    },
};
