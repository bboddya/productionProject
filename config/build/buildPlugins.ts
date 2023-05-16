import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import { BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {


    return [
        // имплементируем новый класс и указываем путь к каому файлу подключать скрипты
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        //показывает прогресс бар сборки
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        // позволяет создать глобальные переменные, которые можно использовать внутри других плагинов
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        }),
        // обновляет изменения без перезагрузки страницы
        new webpack.HotModuleReplacementPlugin()
    ]
}