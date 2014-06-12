# 点点公益青少年发展中心网站

点点公益青少年发展中心的新版网站，由维艾工作室设计和实现。

------

## 用到的技术

* Express: 简洁而灵活的Node.js Web框架
* Jade: 优雅的模板引擎
* jQuery: 最流行的javascript框架
* Bootstrap: Twitter出品的前端UI框架
* Less: CSS扩展，完全兼容CSS
* MongoDB: NoSQL数据库的一种
* Grunt: 项目构建工具
* async: Node.js异步解决方案之一
* Git: 优秀的版本控制工具

------

## 安装

1. 安装Node.js, NPM
   下载：http://nodejs.org/download/
   Linux下参考https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager
   通常Node.js安装包已经包含了NPM。
2. 安装MongoDB
   参考http://docs.mongodb.org/manual/
   **确保运行前MongoDB已运行。**
3. 安装Express
   npm install -g express
4. 安装grunt-cli
   npm install -g grunt-cli

------

## 运行

1. git clone git@gitlab.com:ssbianjp/diandian-express.git
2. cd diandian-express
3. npm install
4. grunt

__首次运行请先执行grunt reset, 以插入测试数据__

-------

## 文件结构

collections: 数据结构定义，仅用来记录、查询数据结构
config: 应用的配置信息，如数据库的地址、端口等
lib: 供服务器端其它部分使用的函数
node_modules: npm包
package.json: 管理npm依赖
public: 静态资源，包括css, js, images
routes: 路由定义及处理
views: jade模板
test_data: 测试数据
README.md: 说明文件
app.js: 应用的入口
Gruntfile.js: Grunt配置
_为方便维护，css, js, views可按页面划分为子文件夹_

-------

## Grunt命令

* grunt: 运行程序。包含了编译less、检查js、合并js等
* grunt reset: 清空数据库、编译生成的文件，并插入测试数据
* grunt less: 将less编译为css
* grunt jshint: 检查JS语法

------

## 编码规范&&注意事项

为了提高代码的可读性，使用一致的编码风格。

1. HTML、CSS、JS一律使用2个空格缩进。
2. HTML中id, class, name中使用连字符。
   表单等需要与服务器端一致的地方可例外。
3. Javascript中变量名、函数名使用驼峰法，首字母小写。
4. 文件命名使用下划线。
5. 命名应有意义；缩写应保持可读性。
6. CSS、JS中选择器要避免误选中不需要的部分。
7. 禁止使用全局变量。可以通过闭包限定作用域。
8. 适当注释。
9. 对同一事物，整个应用中使用一致的英文翻译。

------

## Git的使用

以自己的名字(或缩写)为名称建立一个分支，只在自己的分支上工作。即，不要在其它任何分支上提交代码。

------

## 参考资料

* Express: http://expressjs.com/4x/api.html
* Jade: http://jade-lang.com
* HTML to Jade: http://html2jade.org
* jQuery: http://api.jquery.com
* Bootstrap: http://v2.bootcss.com
* Less: http://lesscss.org, http://www.lesscss.net
* MongoDB: http://docs.mongodb.org/manual
* Grunt: http://gruntjs.com, http://gruntjs.cn
* async: https://github.com/caolan/async
* Git: http://git-scm.com/book