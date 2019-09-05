module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ["airbnb", "prettier", "prettier/react"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        quotes: [2, "single"],
        indent: ["error", 2],
        // disable boring warnings
        "array-callback-return": "off",
        "no-param-reassign": "off",
        "no-use-before-define": "off",
        "no-console": "off",
        "no-alert": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/label-has-associated-control": "off",
        "jsx-a11y/no-noninteractive-element-interactions": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "react/prop-types": "off",

        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "no-multiple-empty-lines": [1, { max: 1 }],
        "comma-dangle": [
            "error",
            {
                arrays: "never",
                objects: "always",
            },
        ],
        "react/jsx-filename-extension": [
            "warn",
            {
                extensions: ["js", "jsx"],
            },
        ],
        "import/prefer-default-export": "off",
        semi: ["error", "always"],
    },
};
