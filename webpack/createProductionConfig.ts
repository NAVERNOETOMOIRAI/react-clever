import path from 'path';
import webpack, { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';



const output = path.resolve(__dirname, '../build');

const createProductionConfig = (): Configuration => {

  return {
    mode: 'production',
    watch: false,
    output: {
      path: output,
      filename: '[name].[chunkhash:8].js',
      chunkFilename: '[name].[chunkhash:8].chunk.js',
      publicPath: '/t',
    },
    devtool: false,
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public', 'index.html'),
        title: 'Production',
        filename: 'index.html',
        favicon: path.resolve(__dirname, '../public', 'favicon.ico'),
      }),
      new webpack.DefinePlugin({
        
      }),
    ],
    optimization: {
    },
    experiments: {
      topLevelAwait: true,
    },
  };
};

export default createProductionConfig;
