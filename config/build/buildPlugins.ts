import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import { BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {


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
        })
    ]
}