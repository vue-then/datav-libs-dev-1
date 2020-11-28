# datav-libs-dev

# rollup => 具体组件库 直接 到处为 可用的js库执行


```js
- 在 node中执行es6语法 需要引入 babel-node/babel-core/@babel/preset-env   配置.babelrc

{
  "presets": [
    "@babel/env" 
  ]
}

- 还可以直接执行 `babel-node` 运行对应程序

- `tree-shaking`机制 是 根据 `import` 和 `export`来实现的
- 在 commonjs 中 `tree-shaking`机制 是 根据 `exports`来实现的 --- `exports.a //// exports.b`

```