module.exports = {
    root: true,
    globals: {
        defineEmits: 'readonly',
        defineProps: 'readonly',
    },
    env: { // 项目运行环境
        browser: true, // 浏览器端
        commonjs: true, // 支持CJS
        es2021: true, // 支持ES2021及之前的所有语法
    },
    // 值可以是字符串或者数组(多个)
    extends: [ // 继承，即规则继承自那些规则（这些规则会被合并到自定义的规则中，可以认为是规则的扩展）
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-essential', // vue的基本规则
        'airbnb-base', // Airbnb的校验规则
    ],
    parser: 'vue-eslint-parser',
    // 解析器的相关信息， 可以指定ESMAScript的版本、sourceType的类型
    parserOptions: { 
        ecmaVersion: 'latest', // 使用的ECMA的版本
        // 使用什么样的解释器，默认是espree，这里是@typescript-eslint/parser，因为要对TS规则进行校验
        parser: '@typescript-eslint/parser', 
        sourceType: 'module',
    },
    plugins: [ // 插件列表
        '@typescript-eslint',
    ],
    "rules": {
        '@typescript-eslint/no-var-requires': 0,
        "import/no-extraneous-dependencies":[
            "error",
            {
               "devDependencies":[
                  "build/*"
               ]
            }
        ],
        indent: ["error", 4, {
            SwitchCase: 1
        }],
        "linebreak-style": 0,
        "no-console": "off",
        "no-unused-vars": "off",
        "max-len": "off",
        "import/prefer-default-export": "off",
        "consistent-return": "off",
        "class-methods-use-this": "off",
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "no-plusplus": "off",
        "no-param-reassign": [2, { props: false }],
        "camelcase": "off",
        "no-unused-expressions": "off",
        "comma-dangle": [0],
        "no-useless-escape": 0,
        'vue/multi-word-component-names': 0,
    }
}
