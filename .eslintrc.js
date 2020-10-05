module.exports = {
    parser: '@typescript-eslint/parser', // 定义ESLint解析器
    extends: [
        'plugin:@typescript-eslint/recommended', // 定义文件继承的子规范
        // prettier/@typescript-eslint：使得@typescript-eslint中的样式规范失效，遵循prettier中的样式规范
        //plugin:prettier/recommended：使用prettier中的样式规范，且如果使得ESLint会检测prettier的格式问题，同样将格式问题以error的形式抛出
        'plugin:prettier/recommended',
    ],
    plugins: ['@typescript-eslint'], // 定义了改eslint文件所依赖的插件
    // env环境变量配置，形如console属性只有在browser环境下才会存在
    // 如果没有设置支持browser,那么可能报console is undefined的错误。
    env: {
        // 代码运行环境
        browser: true,
        node: true,
    },
    rules: {
        'prettier/prettier': ['error', {endOfLine: 'auto'}],
    },
}
