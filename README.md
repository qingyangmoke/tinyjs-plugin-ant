# tinyjs-plugin-physics

> tiny 物理引擎基础库 - 文档待完善

## 查看demo

`demo/index.html`

## P2
> P2 物理引擎

## ant
> 精简版物理引擎

## 引用方法

- 推荐作为依赖使用

  - `npm install tinyjs-plugin-physics --save`

- 也可以直接引用线上cdn地址，注意要使用最新的版本号，例如：

  - https://gw.alipayobjects.com/as/g/tiny-plugins/tinyjs-plugin-physics/0.0.3/p2.debug.js
  - https://gw.alipayobjects.com/as/g/tiny-plugins/tinyjs-plugin-physics/0.0.3/p2.js

  - https://gw.alipayobjects.com/as/g/tiny-plugins/tinyjs-plugin-physics/0.0.3/ant.js
  - https://gw.alipayobjects.com/as/g/tiny-plugins/tinyjs-plugin-physics/0.0.3/ant.debug.js

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

## 相关文档
- [Tiny.js](http://tinyjs.net/#/docs/api)
- [phaser](http://phaser.io/)
- [p2](https://github.com/schteppe/p2.js)

## API文档
  待完善

## demo
 ./demo

## TODO

+ 精简p2 ，把不常用的代码抽离出来，以插拔的形式
