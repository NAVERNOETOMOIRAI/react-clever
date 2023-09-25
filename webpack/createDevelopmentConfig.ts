import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { Configuration } from 'webpack';

const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

const output = path.resolve(__dirname, '../build');
const deps = require("../package.json").dependencies;

const createDevelopmentConfig = (): Configuration => {
  return {
    mode: 'development',
    output: {
      path: output,
      filename: '[name].js',
      publicPath: '/',
      clean: true,
    },
    devtool: 'inline-source-map',
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public', 'index.html'),
        title: 'Development',
        filename: 'index.html',
        //favicon: path.resolve(__dirname, '../public', ENVNAME === 'euprod' ? 'faviconEu.ico' : 'faviconRu.ico'),
      }),
      new webpack.DefinePlugin({
      }),
      new ModuleFederationPlugin({
        name: 'aclever',
        
      })
    ],
    optimization: {},
    experiments: {
      topLevelAwait: true,
    },
  };
};

export default createDevelopmentConfig;
