import { gerarCpf, gerarNomeAleatorio, gerarEmailAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarNomeEmpresa }  from '../../../gerarDados';
import { gerarChavePixTelefone } from '../../../gerarDadosPIX'

export class PreencherPessoa {

    constructor(page) {
        this.page = page
    }

    //Validar e preencher campo Data Nascimento
    async dataNascimento (selector) {

        // Ícone de data de nascimento
        await expect(page.locator('#txtDataNasc > .md-datepicker-button')).toBeVisible();
        await expect(page.locator('#txtDataNasc > .md-datepicker-button')).toBeEnabled();

        // Campo Data Nascimento - validando mensagem dentro do campo antes de preencher
        await expect(page.locator('label[for="txtDataNasc"]')).toHaveText('Data Nascimento'); 

        await page.waitForTimeout(200);

        // Preenchendo o campo Data Nascimento
        await page.locator('text=Data Nascimento').locator('..').locator('input').fill('30/09/1998');
    }

    //Validar e prencher campo Nome Completo - CPF
    async nomeCompleto (selector) {

        const NomeCompleto = gerarNomeAleatorio();

        // Campo Nome - validando mensagem dentro do campo antes de preencher
        await expect(page.locator('label[for="txtRazaoSocial"]')).toHaveText('Nome Completo'); 

        // Campo Nome Completo
        await expect(page.locator('#txtRazaoSocial')).toBeVisible();
        await expect(page.locator('#txtRazaoSocial')).toHaveValue('');
        await page.locator('#txtRazaoSocial').fill(NomeCompleto);
    }

    //Validar e prencher campo Nome CNPJ - CPF
    async nomeCNPJ (selector) {

        const razaoSocial = gerarNomeEmpresa();

        // Clicar em algo aleatório para carregar campo razão social
        await page.locator('#txtRazaoSocial').click();

        // Campo Nome - validando mensagem dentro do campo antes de preencher
        await expect(page.locator('label[for="txtRazaoSocial"]')).toHaveText('Razão Social'); 

        // Campo Nome Completo
        await expect(page.locator('#txtRazaoSocial')).toBeVisible();
        await expect(page.locator('#txtRazaoSocial')).toHaveValue('');
        await page.locator('#txtRazaoSocial').fill(razaoSocial, {force: true});
    }

    //Validar e preencher campo CPF
    async cpfCliente (selector) {

        const cpf = gerarCpf(); // Gera um CPF válido

        // Campo CPF - validando mensagem dentro do campo antes de preencher
        await expect(page.locator('label[for="txtCpfCnpj"]')).toHaveText('CPF');

        // Campo CPF
        await expect(page.locator('#txtCpfCnpj')).toBeVisible();
        await expect(page.locator('#txtCpfCnpj')).toHaveValue('');
        await page.locator('#txtCpfCnpj').fill(cpf, { force: true });
    }

    //Validar e preencher campo CNPJ
    async cnpjCliente (selector) {

        const cnpj = gerarCNPJ(); // Gera um CNPJ válido

        // Campo CPF - validando mensagem dentro do campo antes de preencher
        await expect(page.locator('label[for="txtCpfCnpj"]')).toHaveText('CPF');

        // Campo CNPJ
        await expect(page.locator('#txtCpfCnpj')).toBeVisible();
        await expect(page.locator('#txtCpfCnpj')).toHaveValue('');
        await page.locator('#txtCpfCnpj').fill(cnpj, { force: true });
    }

    //Validar e prencher campo Nome Fantasia - CPF
    async nomeFantasiaCNPJ (selector) {

        const nomeClienteCNPJ = "Novo cadastro cliente CNPJ";

        // Campo Nome Fantasia - validando mensagem dentro do campo antes de preencher
        await expect(page.locator('label[for="txtNomeFantasia"]')).toHaveText('Nome Social'); 

        await expect(page.locator('#txtNomeFantasia')).toBeVisible();
        await expect(page.locator('#txtNomeFantasia')).toHaveValue('');
        await page.locator('#txtNomeFantasia').fill(nomeClienteCNPJ, { force: true });
    }

    //Validar e prencher campo Nome Social - CPF
    async nomeSocial (selector) {

        const NomeSocial = gerarNomeAleatorio();

        // Campo Nome - validando mensagem dentro do campo antes de preencher
        await expect(page.locator('label[for="txtNomeFantasia"]')).toHaveText('Nome Social'); 

        // Campo Nome Completo
        await expect(page.locator('#txtNomeFantasia')).toBeVisible();
        await expect(page.locator('#txtNomeFantasia')).toHaveValue('');
        await page.locator('#txtNomeFantasia').fill(NomeSocial);
    }

     //Validar e escolher sexo da pessoa
     async sexoCliente (selector) {

        // Campo Sexo - validando mensagem dentro do campo antes de preencher
        await expect(page.locator('label[for="txtSexo"]')).toHaveText('Sexo');

        // Campo Tipo de Sexo
        await expect(page.locator('#txtSexo')).toBeVisible();

        // Clicar no campo Tipo de sexo
        await page.locator('#txtSexo').click({ force: true });

        // Clicar na opção MASCULINO
        await page.locator('.md-text.ng-binding', { hasText: 'Masculino' }).click({ force: true });
    }
}