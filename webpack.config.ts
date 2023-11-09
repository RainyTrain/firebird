import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {} from 'webpack-dev-server';

type BuildMode = 'development' | 'production';

interface BuildDev {
  port: number;
  mode: BuildMode;
}

export default (env: BuildDev) => {
  const mode = env.mode || 'development';
  const port = env.port || 3000;
  const isDev = mode === 'development';

  const config: webpack.Configuration = {
    mode: mode,
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'build'),
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
      new webpack.ProgressPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(sa|sc|c)ss$/i,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  auto: (resourcePath: string) => Boolean(resourcePath.includes('.module.')),
                  localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64]',
                },
              },
            },

            'sass-loader',
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
      preferAbsolute: true,
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev
      ? {
          port: port,
          open: true,
          hot: true,
          historyApiFallback: true,
        }
      : undefined,
  };

  return config;
};
