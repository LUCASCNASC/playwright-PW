import { gerarCpf, gerarNomeAleatorio, gerarEmailAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarNomeEmpresa }  from '../../../../gerarDados';
import { gerarChavePixTelefone, gerarChavePixTelefoneErrada, gerarChavePixEmailErrada, gerarChavePixCpfCnpjErrada, 
         gerarChavePixEmail, gerarChavePixCPF, gerarChavePixAleatoria } from '../../../../gerarDadosPIX'

export class PreencherRefBancaria {

    constructor(page) {
        this.page = page
    }

    //referencia bancaria - escolher banco
    async banco (selector) {

        // Clicar para abrir as opções
        await page.locator('#txtBancoRefBanc').click();

        // Selecionar a primeira opção
        await page.locator('text=aaa').click();
    }

    //referencia bancaria - escolher Agencia
    async agencia (selector) {

        // Clicar para abrir as opções e digitar '341'
        await page.locator('#txtAgenciaRefBanc').click();
        await page.locator('#txtAgenciaRefBanc').type('341');
    }

    //referencia bancaria - escolher Conta
    async conta (selector) {

        // Clicar para abrir as opções e digitar '12345-1'
        await page.locator('#txtContaRefBanc').click();
        await page.locator('#txtContaRefBanc').type('12345-1');
    }

    //referencia bancaria - escolher Data Abertura
    async dataAbertura (selector) {

        // Clicar para abrir as opções e digitar a data '30/09/2024'
        await page.locator('input.md-datepicker-input.md-input').click();
        await page.locator('input.md-datepicker-input.md-input').type('30/09/2024');
    }

    //referencia bancaria - escolher Boleto
    async boleto (selector) {

        // Clicar para abrir as opções
        await page.locator('#txtBoletoRefBanc').click();

        // Selecionar "Sim"
        await page.locator('text=Sim').click({ force: true });
    }

    //referencia bancaria - escolher Telefone
    async telefone (selector) {

        const numero_telefone = gerarTelefoneAleatorio();

        // Clicar para abrir as opções e digitar o número de telefone gerado
        await page.locator('#txtTelefoneRefBanc').click();
        await page.locator('#txtTelefoneRefBanc').type(numero_telefone);
    }

    //referencia bancaria - escolher Gerente
    async gerente (selector) {

        const NomeGerente = gerarNomeAleatorio(); // Gera um CPF válido

        // Clicar para abrir as opções e digitar o nome do gerente gerado
        await page.locator('#txtGerente').click();
        await page.locator('#txtGerente').type(NomeGerente);
    }

    //referencia bancaria - escolher Email
    async email (selector) {

        const emailAleatorio = gerarEmailAleatorio();

        // Clicar para abrir as opções e digitar o email gerado
        await page.locator('#txtEmailRefBanc').click();
        await page.locator('#txtEmailRefBanc').type(emailAleatorio);
    }

    //referencia bancaria - escolher CPF/CNPJ correntista
    async cpfCorrentista (select) {

        const cpf = gerarCpf(); // Gera um CPF válido

        // Campo CPF
        await expect(page.locator('#txtCpfCnpjRefBanc')).toBeVisible();
        await page.locator('#txtCpfCnpjRefBanc').type(cpf, { force: true });
    }

    //referencia bancaria - escolher Nome do correntista
    async nomeCorrentista (selector) {

        const NomeCorrentista = gerarNomeAleatorio(); 

        // Clicar para abrir as opções e digitar o nome do correntista gerado
        await page.locator('#txtNmCorrentRefBanc').click();
        await page.locator('#txtNmCorrentRefBanc').type(NomeCorrentista);
    }

    //referencia bancaria - escolher Tipo de conta
    async tipoConta (selector) {

       // Abrir opções de tipo de conta
        await page.locator('#txtTpContaRefBanc').click();

        // Clicar para selecionar uma conta corrente
        await page.locator('div.md-text.ng-binding', { hasText: 'Conta Corrente' }).click({ force: true });
    }

    //referencia bancaria - escolher Operação
    async operacao (selector) {

        // Inserir Operação
        await page.locator('#txtOperacaoRefBanc').type('1');
    }

    //referencia bancaria - escolher Forma de pagamento
    async formaPagamento (selector) {

        // Clicar para abrir opções de forma de pagamento
        await page.locator('#txtFrmPag').click();

        // Clicar na opção PIX
        await page.locator('div.md-text.ng-binding', { hasText: 'PIX' }).click();
    }

    //------------ PIX ERRADO tipo TELEFONE - 

    //referencia bancaria - escolher Tipo chave PIX Telefone
    async tipoChavePixTelefone (selector) {

        // Clicar para abrir opções de Tipo chave PIX
        await page.locator('#txtIdTipoChavePix').click();

        // Clicar na opção Telefone
        await page.locator('div.md-text.ng-binding', { hasText: 'Telefone' }).click();
    }

    //gerar chave pix tipo telefone errada
    async chavePixTelefoneErrada (selector) {

        const chave_pix_telefone_errada = gerarChavePixTelefoneErrada();

        // Inserir chave PIX
        await page.locator('#txtChavePix').type(chave_pix_telefone_errada);
    }

    //------------ PIX ERRADO tipo EMAIL

    //referencia bancaria - escolher Tipo chave PIX Email
    async tipoChavePixEmail (selector) {

        // Clicar para abrir opções de Tipo chave PIX Email
        await page.locator('#txtIdTipoChavePix').click();

        // Clicar na opção Email
        await page.locator('div.md-text.ng-binding', { hasText: 'Email' }).click();
    }

    //gerar chave pix tipo email errada
    async chavePixEmailErrada (selector) {

        const chave_pix_email_errada = gerarChavePixEmailErrada();

        // Inserir chave PIX
        await page.locator('#txtChavePix').type(chave_pix_email_errada);
    }

    //------------ PIX ERRADO tipo CPF CNPJ

    //referencia bancaria - escolher Tipo chave Cpf Cnpj Email
    async tipoChavePixCpfCnpj (selector) {

        // Clicar para abrir opções de Tipo chave CPF CNPJ
        await page.locator('#txtIdTipoChavePix').click();

        // Clicar na opção CPF CNPJ
        await page.locator('div.md-text.ng-binding', { hasText: 'CPF CNPJ' }).click();
    }

    //gerar chave pix tipo CPF CNPJ errada
    async chavePixCpfCnpjErrada (selector) {

        const chave_pix_CpfCnpj_errada = gerarChavePixCpfCnpjErrada();

        // Inserir chave PIX
        await page.locator('#txtChavePix').type(chave_pix_CpfCnpj_errada);
    }

    //------------ PIX ERRADO tipo Aletória

    //referencia bancaria - escolher Tipo chave Aletória Email
    async tipoChavePixAletoria (selector) {

        // Clicar para abrir opções de Tipo chave Aleatória
        await page.locator('#txtIdTipoChavePix').click();

        // Clicar na opção Aleatória
        await page.locator('div.md-text.ng-binding', { hasText: 'Aleatória' }).click();
    }

    //------------ PIX CHAVES CORRETAS

    //gerar chave pix tipo telefone correta
    async chavePixTelefone (selector) {

        const chave_pix_telefone = gerarChavePixTelefone();

        // Rolando para a visão e aguardando
        await page.locator('#txtChavePix').scrollIntoViewIfNeeded();
        await page.waitForTimeout(200);

        // Inserir chave PIX
        await page.locator('#txtChavePix').clear();
        await page.waitForTimeout(200);
        await expect(page.locator('#txtChavePix')).toHaveValue('');
        await page.waitForTimeout(200);
        await page.locator('#txtChavePix').type(chave_pix_telefone);
    }

    //gerar chave pix tipo email correta
    async chavePixEmail (selector) {

        // Rolando para a visão e aguardando
        await page.locator('#txtChavePix').scrollIntoViewIfNeeded();
        await page.waitForTimeout(200);

        // Inserir chave PIX
        await page.locator('#txtChavePix').clear();
        await page.waitForTimeout(200);
        await expect(page.locator('#txtChavePix')).toHaveValue('');
        await page.waitForTimeout(200);
        await page.locator('#txtChavePix').type(chave_pix_email);
    }

    //gerar chave pix tipo CPF correta
    async chavePixCPF (selector) {

        const chave_pix_cpf = gerarChavePixCPF();

        // Rolando para a visão e aguardando
        await page.locator('#txtChavePix').scrollIntoViewIfNeeded();
        await page.waitForTimeout(200);

        // Inserir chave PIX
        await page.locator('#txtChavePix').clear();
        await page.waitForTimeout(200);
        await expect(page.locator('#txtChavePix')).toHaveValue('');
        await page.waitForTimeout(200);
        await page.locator('#txtChavePix').type(chave_pix_cpf);
    }

    //gerar chave pix tipo Aleatorio correta
    async chavePixAleatorio (selector) {

        const chave_pix_aleatoria = gerarChavePixAleatoria();

        // Rolando para a visão e aguardando
        await page.locator('#txtChavePix').scrollIntoViewIfNeeded();
        await page.waitForTimeout(200);

        // Inserir chave PIX
        await page.locator('#txtChavePix').clear();
        await page.waitForTimeout(200);
        await expect(page.locator('#txtChavePix')).toHaveValue('');
        await page.waitForTimeout(200);
        await page.locator('#txtChavePix').type(chave_pix_aleatoria);
    } 
}