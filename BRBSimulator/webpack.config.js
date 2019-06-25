const path = require('path');
const HWP = require('html-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/build/production')
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module:{
        rules:[{
           test: /\.js$/,
           exclude: /node_modules/,
           loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../')
        }, {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../')
        }, { 
            test: /\.tsx?$/, 
            loader: "awesome-typescript-loader" 
        }, {
            test   :/\.jsx?$/,
            exclude:/(node_modules|bower_components)/,
            loader :'babel-loader',
            query  :{
                presets:['react','es2015']
            }
        }]
    },
    plugins:[
       new HWP(
          {template: path.join(__dirname,'/src/index.html')}
       )
   ]
 }