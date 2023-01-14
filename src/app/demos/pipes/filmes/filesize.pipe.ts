import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'fileSize' //nome para chamada do pipe, nao utilizar letras maiscula no primeiro caracter e sem espacos
})
export class FileSizePipe implements PipeTransform {

    transform(size: string): string {
        var convertedSize = Number(size);
        let tamanhoCalculado = (convertedSize / (1024 * 1024))
        let extension = ' MB'

        if (tamanhoCalculado > 1024) {
            tamanhoCalculado = (tamanhoCalculado / 1024);
            extension = ' GB'
        }

        return tamanhoCalculado.toFixed(2) + extension;
    }

}