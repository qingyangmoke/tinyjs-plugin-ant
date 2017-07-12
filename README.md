# tinyjs-plugin-physics

> tiny 物理引擎基础库 - 文档待完善

## 查看demo

`demo/index.html`

## 引用方法

- 推荐作为依赖使用

  - `npm install tinyjs-plugin-physics --save`

- 也可以直接引用线上cdn地址，注意要使用最新的版本号，例如：


  - https://a.alipayobjects.com/g/tiny-plugins/tinyjs-plugin-physics/0.0.1/p2.js
  - https://a.alipayobjects.com/g/tiny-plugins/tinyjs-plugin-physics/0.0.1/p2.debug.js

  - https://a.alipayobjects.com/g/tiny-plugins/tinyjs-plugin-physics/0.0.1/ant.js
  - https://a.alipayobjects.com/g/tiny-plugins/tinyjs-plugin-physics/0.0.1/ant.debug.js

## 起步
首先当然是要引入，推荐`NPM`方式，当然你也可以使用`CDN`或下载独立版本，先从几个例子入手吧！

##### 1、最简单的例子

引用 Tiny.js 源码
``` html
<script src="http://tinyjs.net/libs/tiny.debug.js"></script>
```
``` js
var Physics = require('tinyjs-plugin-physics');
// 或者
// import Physics from 'tinyjs-plugin-physics';
```

## 依赖
- `Tiny.js`: [v0.3.1](http://tinyjs.net/#/docs/api)

## API文档

## TODO

+ 精简p2 ，把不常用的代码抽离出来，以插拔的形式
