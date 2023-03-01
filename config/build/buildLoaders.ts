import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

  const cssLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            //проверка на модули, чтобы хешировались классы только файлов расширений .module.
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            // в дев - нормальные классы, в проде - хэш
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:8]' : '[hash:base64:8]'
          }
        }
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }

  // Если не используем тайпскрипт - нужен babel-loader
  const typescriptLoader = {
    //регулярка для обработки файлов расширения ts
    test: /\.tsx?$/,
    //лоадер, который будет обрабатывать файлы
    use: 'ts-loader',
    exclude: /node_modules/,
  }

    return [
        typescriptLoader,
        cssLoaders
      ]
}