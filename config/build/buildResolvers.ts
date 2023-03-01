import { ResolveOptions } from "webpack";

export function buildResolvers(): ResolveOptions {
    return {
        //позволяет не указывать типы (которые передали аргументом) импорттированных файлов
        extensions: ['.tsx', '.ts', '.js'],
      }
}