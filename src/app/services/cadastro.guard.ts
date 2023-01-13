import { CadastroComponent } from './../demos/reactiveForms/cadastro/cadastro.component';

import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";

@Injectable()
export class CadastroGuard implements CanDeactivate<CadastroComponent>{

    canDeactivate(component: CadastroComponent): boolean {
        if (component.mudancasNaoSalvas) {
            return window.confirm('Tem certeza que deseja abandonar o preenchimento do formulario?');
        }

        return true;
    }

}