import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'imageFormater'
})
export class ImageFormaterPiper implements PipeTransform {

    transform(image: string, caminho: string = '', substituir: boolean) {
        if (caminho === 'default')
            caminho = 'assets';

        if (image.length === 0 && substituir)
            image = 'semCapa.jpg';

        return `/${caminho}/${image}`;
    }

}