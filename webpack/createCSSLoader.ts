import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import { Configuration } from 'webpack';

const createCSSLoader = (): Configuration => {
  const loaders = [
    { loader: 'style-loader', options: { base: 1000 } },
    { loader: 'css-loader', options: { import: true } },
  ];

  return {
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].bundle.css',
        chunkFilename: '[id].css',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.((pc|c)ss)$/i,
          use: [
            ...loaders,
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    ['postcss-nested', 'postcss-custom-properties', 'postcss-custom-media', 'postcss-preset-env'],
                  ],
                },
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ['file-loader?name=fonts/[name].[ext]'],
        },
        {
          test: /\.((sc|sa)ss)$/i,
          include: path.resolve(__dirname, '../src'),
          exclude: /node_modules/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    optimization: {
      minimizer: ['...', new CssMinimizerPlugin()],
    },
  };
};

export default createCSSLoader;
