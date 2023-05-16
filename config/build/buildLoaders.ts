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

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env' ],
        "plugins": [
          ["i18next-extract", {
            "locales": [
              "ru",
              "en"
            ],
            "keyAsDefaultValue": true
          }]
        ]

      }
    }
  }

  // Если не используем тайпскрипт - нужен babel-loader
  const typescriptLoader = {
    //регулярка для обработки файлов расширения ts
    test: /\.tsx?$/,
    //лоадер, который будет обрабатывать файлы
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  return [
    cssLoaders,
    babelLoader,
    typescriptLoader,
    fileLoader,
    svgLoader,
  ]
}