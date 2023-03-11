import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths, isDev} = options
    
    return {
        mode,
        // entry - стартовая точка приложения
        entry: paths.entry,
        // сборка
        output: {
            //[name] - создает файл с динамическим названием
            //[contenthash] - добавляет хэш к названию файла, чтобы при обновлении выкатки не возращался старый хэшированный файл из-за названия
            filename: '[name].[contenthash].js',
            //путь сборки
            path: paths.build,
            //удаляет старый файлы сборки
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            //конфигурируем лоадеры. Они нужны, чтобы обрабатывать файлы, которые выходят за рамки js (css, png, jpeg и тд)
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        //позволяет отслеживать ошибки в коде
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}