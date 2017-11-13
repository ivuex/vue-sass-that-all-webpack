# webpack-env
######　这是保存笔者用过的部分webpack的配置和依赖的repository,
###### 需求不同就存不同分支，　经典版本打上tag.
###### webpack.config.js and package.js for different requirements.

###### 这是简单的sass-laoder环境，专为开发或者练习静态html+css的情景打造
###### This is simple sass-loader environment for static html + css development.

## usage: 

#### 开发
##### 在根目录递归监听所有子组件,并在内存中编译多个html
``` lang=shell
npm start

# OR

npm run dev
```
##### 在任意子组件根目录中监听所有子组件,并编译html
``` lang=shell
npm run that -- --root=`pwd`

# OR

npm run that -- --root=$(pwd)
```

#### vue-sass-cli生成配套的vue子组件目录结构
``` lang=shell
npm i vue-sass-cli -g
vue-sass ${component-name}
```
> 更多详情： npm: https://www.npmjs.com/package/vue-sass-cli
>          github: npm install vue-sass-cli

#### 打包静态文件
``` lang=shell
npm run build
```

## 目录介绍
#### $root/package.json: 项目中会用到的依赖
#### $root/package.lock.js: 项目依赖锁文件
#### $root/webpack.config.js:  webpack 配置文件
#### $root/node_modules: 依赖库目录
#### $root/main.js: 入口文件
#### $root/index.html: 模板文件
#### $root/src:　正在或者将要开发的源文件根目录
#### $root/dist: 将生成的或者已生成的静态文件根目录

# ENJOY IT ! 
 
#### By doc2git 
#### 写于: 2017.11.01 
        

