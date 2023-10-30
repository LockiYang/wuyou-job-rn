运行项目

```
npm install
npx expo
```

使用 Axios 进行网络请求

```
npx expo install axios
```

配置使用@作为代码根目录

```
"paths": {
    "@/*": ["./*"]
}
"tsconfigPaths": true
```

使用[React Native Elements](https://reactnativeelements.com/docs)
```
npm install @rneui/themed @rneui/base
```

.prettierrc 配置

```
{
  "semi": true, // 在语句末尾使用分号
  "singleQuote": true, // 使用单引号而不是双引号
  "trailingComma": "all", // 在对象和数组的末尾添加逗号
  "bracketSameLine": true, // 将尖括号放在同一行
  "bracketSpacing": true, // 在对象，数组括号与文字之间加空格
  "arrowParens": "always", // 箭头函数参数加括号
  "printWidth": 80, // 单行代码的最大宽度
  "tabWidth": 2, // 缩进的空格数量
  "useTabs": false, // 使用空格而不是制表符进行缩进
  "jsxSingleQuote": true, // 在JSX中使用单引号
  "jsxBracketSameLine": true // 将JSX尖括号放在同一行
}
```

### 参考
- [vector-icons](https://icons.expo.fyi/)
