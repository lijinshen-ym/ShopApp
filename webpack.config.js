const path=require("path");
const htmlwebpackplugin=require("html-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader');//导入vue-loader
module.exports={
    entry:path.join(__dirname,"./src/main.js"),//入口，表示要使用webpack打包哪个文件
    output:{
        path:path.join(__dirname,"./dist"),
        filename:"bundle.js"
    },
    plugins:[
        new htmlwebpackplugin({
            template:path.join(__dirname,"./src/index.html"),
            filename:"index.html"
        }),
        new VueLoaderPlugin(),//注册插件
    ],
    module:{
        rules:[
            {test:/\.css$/,use:["style-loader","css-loader"]},
            {test:/\.(jpg|png|gif|jepg)$/,use:"url-loader"},
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:"url-loader"},
            {test:/\.js$/,use:"babel-loader",exclude:/node_modules/},
            {test: /\.vue$/,loader: 'vue-loader'},
        ]
    },
    resolve:{
        // alias:{"vue$":"vue/dist/vue.js"}  //修改vue的路径
    }

}