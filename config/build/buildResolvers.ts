import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        //позволяет не указывать типы (которые передали аргументом) импорттированных файлов
        extensions: ['.tsx', '.ts', '.js'],
        // абсолютные пути в приоритете
        preferAbsolute: true,
        //пути до папки src + node modules
        modules: [options.paths.src, 'node_modules'],
        //для каждого модуля главным файлом будет являться файл index
        mainFiles: ['index'],
        // указание символа, для подставления в начало, например: @
        // если оставить объект пустым, тогда ничего указывать не придется
        alias: {}
      }
}