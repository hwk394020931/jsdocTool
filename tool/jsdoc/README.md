# 使用说明
# 环境准备
vds使用说明文档生成工具使用的是nodejs平台的插件，因此需要先安装[Nodejs 官网](https://nodejs.org/en/)

# 在根目录下新建jsdocCfg.json 配置文件

# jsdoc安装
在nodejs安装完成后，全局安装jsdoc插件，使用如下命令：
```sh
npm install -g jsdoc
```

# 在tool/jsdoc 目录下安装 minami
```bash
$ npm install -save-dev minami
```
# 把node_modules 里面的minami文件拷贝到tool/jsdoc文件夹中

# 如果是 TypeScript 语言，需要在 minami文件夹 中安装  jsdoc-babel 插件
```bash
$ npm install --save-dev jsdoc-babel
```
# 在minami文件夹安装 taffydb
```bash
$ npm i taffydb

# 在根目录下安装 preset-typescript 插件
```bash
$ npm i @babel/preset-typescript
```

## 使用说明文档重新生成
待所有插件都安装成功后，在本目录下执行命令：
```sh
jsdoc -c jsdocCfg.json
```
