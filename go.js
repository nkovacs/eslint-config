// This is a modified config for projects with go and js code.
// It switches to tab for indentation and no semicolons,
// for consistency with go.

module.exports = {
    extends: [
        './index.js',
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
        'babel/semi': ['error', 'never'],
    },
};
