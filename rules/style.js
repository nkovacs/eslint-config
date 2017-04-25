module.exports = {
    rules: {
        'array-bracket-spacing': ['error', 'never'],
        'block-spacing': ['error', 'always'],
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],
        camelcase: ['error', { properties: 'never' }],
        'capitalized-comments': 'off',
        // require trailing comma in multiline expressions
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
        }],
        // 1 space after comma, no space before
        'comma-spacing': ['error', { before: false, after: true }],
        // comma at the end of the line
        'comma-style': ['error', 'last'],
        'computed-property-spacing': ['error', 'never'],
        'consistent-this': 'off',
        'eol-last': ['error', 'always'],
        'func-call-spacing': ['error', 'never'],
        'func-name-matching': 'off',
        'func-names': 'warn',
        'func-style': ['off', 'expression'],
        'id-blacklist': 'off',
        'id-length': 'off',
        'id-match': 'off',
        // 4 space indent
        indent: ['error', 4, {
            SwitchCase: 1,
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
        'jsx-quotes': ['off', 'prefer-double'],
        'key-spacing': ['error', {
            beforeColon: false,
            afterColon: true,
            mode: 'strict',
        }],
        'keyword-spacing': ['error', {
            before: true,
            after: true,
            overrides: {
                return: { after: true },
                throw: { after: true },
                case: { after: true },
            },
        }],
        'line-comment-position': ['off', {
            position: 'above',
            ignorePattern: '',
            applyDefaultPatterns: true,
        }],
        'linebreak-style': ['error', 'unix'],
        'lines-around-comment': 'off',
        'lines-around-directive': ['error', {
            before: 'always',
            after: 'always',
        }],
        'max-depth': 'off',
        'max-len': ['off', {
            code: 100,
            tabWidth: 4,
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],
        'max-lines': ['off', {
            max: 300,
            skipBlankLines: true,
            skipComments: true,
        }],
        'max-nested-callbacks': 'off',
        'max-params': ['off', 3],
        'max-statements': ['off', 10],
        'max-statements-per-line': ['off', { max: 1 }],
        'multiline-ternary': ['off', 'always'],
        // replaced by babel/new-cap
        'new-cap': ['off', {
            newIsCap: true,
            newIsCapExceptions: [],
            capIsNew: true,
            capIsNewExceptions: [],
            properties: true,
        }],
        'new-parens': 'error',
        'newline-after-var': 'off',
        'newline-before-return': 'off',
        'newline-per-chained-call': ['off', { ignoreChainWithDepth: 4 }],
        'no-array-constructor': 'error',
        'no-bitwise': 'error',
        'no-continue': 'off',
        'no-inline-comments': 'off',
        'no-lonely-if': 'error',
        'no-mixed-operators': [
            'error',
            {
                groups: [
                    ['+', '-', '*', '/', '%', '**'],
                    ['&', '|', '^', '~', '<<', '>>', '>>>'],
                    ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                    ['&&', '||'],
                    ['in', 'instanceof'],
                ],
                allowSamePrecedence: false,
            },
        ],
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-assign': 'error',
        'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
        'no-negated-condition': 'off',
        'no-nested-ternary': 'error',
        'no-new-object': 'error',
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'no-restricted-syntax': [
            'error',
            {
                selector: 'ForInStatement',
                message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
            },
            {
                selector: 'ForOfStatement',
                message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
            },
        ],
        'no-tabs': 'error',
        'no-ternary': 'off',
        'no-trailing-spaces': 'error',
        'no-underscore-dangle': ['error', { allowAfterThis: false, allowAfterSuper: false }],
        'no-unneeded-ternary': ['error', { defaultAssignment: false }],
        'no-whitespace-before-property': 'error',
        'nonblock-statement-body-position': 'off',
        // TODO: enable error and enable consistent in eslint 4.0
        'object-curly-newline': ['off', {
            ObjectExpression: { minProperties: 0, multiline: true /* , consistent: true */ },
            ObjectPattern: { minProperties: 0, multiline: true /* , consistent: true */ },
        }],
        // replaced by babel/object-curly-spacing
        'object-curly-spacing': ['off', 'always'],
        'object-property-newline': ['error', {
            allowMultiplePropertiesPerLine: true,
        }],
        'one-var': ['error', 'never'],
        'one-var-declaration-per-line': ['error', 'always'],
        'operator-assignment': ['error', 'always'],
        'operator-linebreak': ['error', 'after'],
        'padded-blocks': ['error', 'never'],
        'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],
        quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
        'require-jsdoc': 'off',
        // replaced by babel/semi
        semi: ['off', 'always'],
        'semi-spacing': ['error', { before: false, after: true }],
        'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],
        'sort-vars': 'off',
        'space-before-blocks': 'error',
        'space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
        }],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'space-unary-ops': ['error', {
            words: true,
            nonwords: false,
            overrides: {
            },
        }],
        'spaced-comment': ['error', 'always', {
            line: {
                exceptions: ['-', '+'],
                markers: ['=', '!'], // space here to support sprockets directives
            },
            block: {
                exceptions: ['-', '+'],
                markers: ['=', '!'], // space here to support sprockets directives
                balanced: true,
            },
        }],
        'template-tag-spacing': ['off', 'never'],
        'unicode-bom': ['error', 'never'],
        'wrap-regex': 'off',
    },
};
