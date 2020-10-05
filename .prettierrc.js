/*
* prettier：prettier插件的核心代码
* eslint-config-prettier：解决ESLint中的样式规范和prettier中样式规范的冲突
* 以prettier的样式规范为准，使ESLint中的样式规范自动失效
* eslint-plugin-prettier：将prettier作为ESLint规范来使用
* */
module.exports =  {
  "printWidth": 120,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": false,
  "jsxBracketSameLine": true,
  "arrowParens": "avoid",
  "insertPragma": false,
  "tabWidth": 4,
  "useTabs": false,
};