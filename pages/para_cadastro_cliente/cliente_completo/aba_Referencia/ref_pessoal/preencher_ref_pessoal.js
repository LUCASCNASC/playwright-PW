import { gerarCpf, gerarNomeAleatorio, gerarEmailAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarNomeEmpresa, gerarRelacionamento }  from '../../../../gerarDados';
import { gerarChavePixTelefone, gerarChavePixTelefoneErrada, gerarChavePixEmailErrada, gerarChavePixCpfCnpjErrada } from '../../../../gerarDadosPIX'

export class PreencherRefPessoal {

    constructor(page) {
        this.page = page
    }

    //referencia pessoal - escolher Nome 
    async nome (selector) {

        const Nome = gerarNomeAleatorio(); 

        //clicar para abrir as opções
        await page.locator('#txtNomeRefPes').fill(Nome);
    }

    //referencia pessoal - escolher Email
    async email (selector) {

        const email = gerarEmailAleatorio();

        //clicar para abrir as opções
        await page.locator('#txtEmailRefPes').fill(email);
    }

    //referencia pessoal - escolher Telefone
    async telefone (selector) {

        const numero_telefone = gerarTelefoneAleatorio();

        //clicar para abrir as opções
        await page.locator('#txtTelefoneRefPes').fill(numero_telefone);
    }

    //referencia pessoal - escolher Relacionamento
    async relacionamento (selector) {

        const relacionamento = gerarRelacionamento();

        //clicar para abrir as opções
        await page.locator('#txtRelacionamentoRefPes').fill(relacionamento);
    }
}
