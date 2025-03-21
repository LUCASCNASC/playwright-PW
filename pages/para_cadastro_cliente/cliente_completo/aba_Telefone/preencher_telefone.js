import { gerarCpf, gerarNomeAleatorio, gerarEmailAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarNomeEmpresa }  from '../../../gerarDados';
import { gerarChavePixTelefone } from '../../../gerarDadosPIX'

export class PreencherTelefone {

    constructor(page) {
        this.page = page
    }

    //selecionar tipo de telefone na aba telefone
    async tipoTelefone (selector) {

        //Card Telefone - campo tipo de telefone
        await page.locator('#txtTpTel').click({force:true});

        //Card Telefone - escolher tipo de telefone
        await page.locator('.md-text.ng-binding').filter({ hasText: 'Padrão' }).click({force:true});
    }

    //preencher campo Numero, no cadastro de telefone
    async numeroTelefone (selector) {

        const numero_telefone = gerarTelefoneAleatorio();

        //Card Telefone - preencher campo número
        await page.locator('#txtNumTel').fill(numero_telefone);
    }

    //preencher campo Ramal, no cadastro de telefone
    async ramalTelefone (selector) {

        const ramal_telefone = "435"

        //Card Telefone - preencher campo ramal
        await page.locator('#txtRamalTel').fill(ramal_telefone);
    }
}