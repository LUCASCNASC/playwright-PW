import { gerarCpf, gerarNomeAleatorio, gerarEmailAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarNomeEmpresa,
         gerarRelacionamento, gerarObservação }  from '../../../../gerarDados';
import { gerarChavePixTelefone, gerarChavePixTelefoneErrada, gerarChavePixEmailErrada, gerarChavePixCpfCnpjErrada } from '../../../../gerarDadosPIX'


export class PreencherRefComercial {

    constructor(page) {
        this.page = page
    }

    //referencia Comercial - escolher Agencia
    async empresa (selector) {

        const empresa = gerarNomeEmpresa()

        //inserir dados
        await page.locator('#txtEmpresaRefCom').fill(empresa);
    }

    //referencia Comercial - escolher Contato
    async contato (selector) {

        const contato = gerarTelefoneAleatorio()

        //inserir dados
        await page.locator('#txtContatoRefCom').fill(contato);
    }

    //referencia Comercial - escolher Telefone
    async telefone (selector) {

        const telefone = gerarTelefoneAleatorio()

        //inserir dados
        await page.locator('#txtTelefoneRefCom').fill(telefone);
    }

    //referencia Comercial - escolher Email
    async email (selector) {

        const email = gerarEmailAleatorio()

        //inserir dados
        await page.locator('#txtEmailRefCom').fill(email);
    }

    //referencia Comercial - escolher Observação
    async observacao (selector) {

        const observacao = gerarObservação()

        //inserir dados
        await page.locator('#txtObsRefCom').fill(observacao);
    }
}
