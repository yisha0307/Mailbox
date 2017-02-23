const path = require('path');
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'components');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + '/src/index.jsx',
//webpack的入口文件只有一个，所以写的所有components甚至包括css/json什么的，都要引用在这里
output:{
    path: __dirname +'/public',
    filename: 'bundle.js',
},
//我这边是新建了一个folder叫public，用来放index.html和bundle.js
devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
},
plugins: [
    new webpack.HotModuleReplacementPlugin()
],
module: {
    loaders: [
   {
        test: /\.jsx$/,
        loader:'babel-loader',
        exclude: /node_modules/
    }, {
        test: /\.js$/,
        loader:'babel-loader',
        exclude: /node_modules/
    },{
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader?modules','sass-loader'],
        exclude: /node_modules/
    },{
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?modules'],
    },{
        test: /\.(png|jpg|jpeg)$/,
        loader: 'file-loader!url-loader?limit=1024'
    },{
        test: /\.json$/,
        loader: 'json-loader',
        exclude: /node_modules/
    }]
},
resolve:{
        extensions: ['.js', '.jsx']
},
externals: {
    "react":"React",
    "redux":"Redux",
    "react-dom" :"ReactDOM",
    "react-redux":"ReactRedux"
},
};