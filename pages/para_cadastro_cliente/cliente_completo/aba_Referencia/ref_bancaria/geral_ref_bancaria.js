import { gerarCpf, gerarNomeAleatorio, gerarEmailAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarNomeEmpresa }  from '../../../../gerarDados';
import { gerarChavePixTelefone, gerarChavePixTelefoneErrada, gerarChavePixEmailErrada, gerarChavePixCpfCnpjErrada, 
         gerarChavePixEmail, gerarChavePixCPF, gerarChavePixAleatoria } from '../../../../gerarDadosPIX'



export class GeralRefBancaria {

    constructor(page) {
        this.page = page
    }
    //--------REFERENCIAS - REFERENCIA BANCÁRIA -------

    //validar e clicar na aba Bancária, dentro de Referencias
    async clicarAbaRefBancaria (selector) {

        // Validando botão Bancária
        await expect(page.locator('#menu_items_sec > :nth-child(3)')).toBeVisible();
        await expect(page.locator('#menu_items_sec > :nth-child(3)')).not.toHaveAttribute('disabled');

        // Interceptando a chamada GET para '/views/cliente/refEtapaBancariaLista.html'
        await page.route('**/views/cliente/refEtapaBancariaLista.html', route => route.continue());

        // Clicando no botão Bancária
        await page.locator('#menu_items_sec > :nth-child(3)').click();

        // Esperando a resposta da API
        await page.waitForResponse(response => 
            response.url().includes('/views/cliente/refEtapaBancariaLista.html') && response.status() === 200, 
            { timeout: 40000 }
);
    }

    //validando informações da tela antes de adicionar qualquer coisa
    async validarAbaRefBancariaVazia (selector) {

        // Validando título quando entramos na aba
        await expect(page.locator('h3')).toBeVisible();
        await expect(page.locator('h3')).toHaveText('Referências / Bancária');

        // Validando botão +
        await expect(page.locator('.layout-align-end-end > .md-fab')).toBeVisible();
        await expect(page.locator('.layout-align-end-end > .md-fab')).not.toHaveAttribute('disabled');

        // Mensagem quando não tem nada adicionado na aba
        await expect(page.locator('.text-align-center')).toBeVisible();
        await expect(page.locator('.text-align-center')).toHaveText('Não foi encontrado nenhum registro');

        // Validando botão SALVAR
        await expect(page.locator('.btn')).toBeVisible();
        await expect(page.locator('.btn')).not.toHaveAttribute('disabled');
        // .and('contain', 'SALVAR') - Note: Playwright does not have a direct equivalent for this, 
        // you can use `toContainText` if you need to check for specific text inside the element.
    }

    //clicar no botão + para adicionar uma nova referencia bancária
    async clicarAddNovaRefBancaria (selector) {

        // Interceptando a chamada GET para '/views/cliente/modalClienteRefBancaria.html'
        await page.route('**/views/cliente/modalClienteRefBancaria.html', route => route.continue());

        // Clicando no botão +
        await page.locator('.layout-align-end-end > .md-fab').click();

        // Esperando a resposta da API
        await page.waitForResponse(response => 
            response.url().includes('/views/cliente/modalClienteRefBancaria.html') && response.status() === 200, 
            { timeout: 40000 }
);
    }

    //validar informações do modal Referencia Bancária antes de preencher as informações
    async modalRefBancariaVazio (selector) {

        // Título modal
        await expect(page.locator('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')).toBeVisible();
        await expect(page.locator('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')).toHaveText('Referência bancária');

        // Botão X
        await expect(page.locator('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding')).toBeVisible();
        await expect(page.locator('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding')).not.toHaveAttribute('disabled');

        // Campo Banco
        await expect(page.locator('#txtBancoRefBanc')).toBeVisible();
        await expect(page.locator('#txtBancoRefBanc')).toHaveValue('');
        await expect(page.locator('#txtBancoRefBanc')).not.toHaveAttribute('disabled');

        // Informação campo Banco
        await expect(page.locator('label[for="txtBancoRefBanc"]')).toHaveText('Banco');

        // Campo Agência
        await expect(page.locator('#txtAgenciaRefBanc')).toBeVisible();
        await expect(page.locator('#txtAgenciaRefBanc')).toHaveValue('');
        await expect(page.locator('#txtAgenciaRefBanc')).not.toHaveAttribute('disabled');

        // Informação campo Agência
        await expect(page.locator('label[for="txtAgenciaRefBanc"]')).toHaveText('Agência');

        // Campo Conta
        await expect(page.locator('#txtContaRefBanc')).toBeVisible();
        await expect(page.locator('#txtContaRefBanc')).toHaveValue('');
        await expect(page.locator('#txtContaRefBanc')).not.toHaveAttribute('disabled');

        // Informação campo Conta
        await expect(page.locator('label[for="txtContaRefBanc"]')).toHaveText('Conta');

        // Ícone calendário
        await expect(page.locator('.md-datepicker-button')).toBeVisible();
        await expect(page.locator('.md-datepicker-button')).not.toHaveAttribute('disabled');

        // Campo Data Abertura
        await expect(page.locator('input.md-datepicker-input.md-input')).toBeVisible();
        await expect(page.locator('input.md-datepicker-input.md-input')).toHaveValue('');
        await expect(page.locator('input.md-datepicker-input.md-input')).not.toHaveAttribute('disabled');

        // Campo Boleto
        await expect(page.locator('#txtBoletoRefBanc')).toBeVisible();
        await expect(page.locator('#txtBoletoRefBanc')).toHaveValue('');
        await expect(page.locator('#txtBoletoRefBanc')).not.toHaveAttribute('disabled');

        // Informação campo Boleto
        await expect(page.locator('label[for="txtBoletoRefBanc"]')).toHaveText('Boleto');

        // Campo Telefone
        await expect(page.locator('#txtTelefoneRefBanc')).toBeVisible();
        await expect(page.locator('#txtTelefoneRefBanc')).toHaveValue('');
        await expect(page.locator('#txtTelefoneRefBanc')).not.toHaveAttribute('disabled');

        // Informação campo Telefone
        await expect(page.locator('label[for="txtTelefoneRefBanc"]')).toHaveText('Telefone');

        // Campo Gerente
        await expect(page.locator('#txtGerente')).toBeVisible();
        await expect(page.locator('#txtGerente')).toHaveValue('');
        await expect(page.locator('#txtGerente')).not.toHaveAttribute('disabled');

        // Informação campo Gerente
        await expect(page.locator('label[for="txtGerente"]')).toHaveText('Gerente');

        // Campo Email
        await expect(page.locator('#txtEmailRefBanc')).toBeVisible();
        await expect(page.locator('#txtEmailRefBanc')).toHaveValue('');
        await expect(page.locator('#txtEmailRefBanc')).not.toHaveAttribute('disabled');

        // Informação campo Email
        await expect(page.locator('label[for="txtEmailRefBanc"]')).toHaveText('Email');

        // Campo CPF/CNPJ correntista
        await expect(page.locator('#txtCpfCnpjRefBanc')).toBeVisible();
        await expect(page.locator('#txtCpfCnpjRefBanc')).toHaveValue('');
        await expect(page.locator('#txtCpfCnpjRefBanc')).not.toHaveAttribute('disabled');

        // Informação campo CPF/CNPJ correntista
        await expect(page.locator('label[for="txtCpfCnpjRefBanc"]')).toHaveText('CPF/CNPJ correntista');

        // Campo Nome do correntista
        await expect(page.locator('#txtNmCorrentRefBanc')).toBeVisible();
        await expect(page.locator('#txtNmCorrentRefBanc')).toHaveValue('');
        await expect(page.locator('#txtNmCorrentRefBanc')).not.toHaveAttribute('disabled');

        // Informação campo Nome do correntista
        await expect(page.locator('label[for="txtNmCorrentRefBanc"]')).toHaveText('Nome do correntista');

        // Campo Tipo de conta
        await expect(page.locator('#txtTpContaRefBanc')).toBeVisible();
        await expect(page.locator('#txtTpContaRefBanc')).toHaveValue('');
        await expect(page.locator('#txtTpContaRefBanc')).not.toHaveAttribute('disabled');

        // Informação campo Tipo de conta
        await expect(page.locator('label[for="txtTpContaRefBanc"]')).toHaveText('Tipo de conta');

        // Campo Operação
        await expect(page.locator('#txtOperacaoRefBanc')).toBeVisible();
        await expect(page.locator('#txtOperacaoRefBanc')).toHaveValue('');
        await expect(page.locator('#txtOperacaoRefBanc')).not.toHaveAttribute('disabled');

        // Informação campo Operação
        await expect(page.locator('label[for="txtOperacaoRefBanc"]')).toHaveText('Operação');

        // Campo Forma de pagamento
        await expect(page.locator('#txtFrmPag')).toBeVisible();
        await expect(page.locator('#txtFrmPag')).toHaveValue('');
        await expect(page.locator('#txtFrmPag')).not.toHaveAttribute('disabled');

        // Informação campo Forma de pagamento
        await expect(page.locator('label[for="txtFrmPag"]')).toHaveText('Forma de pagamento');

        // Campo Tipo chave PIX
        await expect(page.locator('#txtIdTipoChavePix')).toBeVisible();
        await expect(page.locator('#txtIdTipoChavePix')).toHaveValue('');
        await expect(page.locator('#txtIdTipoChavePix')).not.toHaveAttribute('disabled');

        // Informação campo Tipo chave PIX
        await expect(page.locator('label[for="txtIdTipoChavePix"]')).toHaveText('Tipo chave PIX');

        // Campo Chave PIX
        await expect(page.locator('#txtChavePix')).toBeVisible();
        await expect(page.locator('#txtChavePix')).toHaveValue('');
        await expect(page.locator('#txtChavePix')).not.toHaveAttribute('disabled');

        // Informação campo Chave PIX
        await expect(page.locator('label[for="txtChavePix"]')).toHaveText('Chave PIX');

        // Validar botão SALVAR, desabilitado
        await expect(page.locator('#btnModalAddRefPessoal')).toHaveAttribute('disabled', 'true');
    }

    //clicar para salvar Referencia Bancaria
    async clicarSalvarRefBancaria (selector) {

        // Verificar se o botão 'Salvar' está visível
        await expect(page.locator('button', { hasText: 'Salvar' })).toBeVisible();

        // Validar se o botão salvar está habilitado
        await expect(page.locator('#btnModalAddRefPessoal')).toBeVisible();
        await expect(page.locator('#btnModalAddRefPessoal')).not.toHaveAttribute('disabled');

        // Clicar no botão SALVAR
        await page.locator('#btnModalAddRefPessoal').click();
    }

    // validando mensagem Referencia Bancária incluída com sucesso Incluído com sucesso, após incluírmos a Referencia Bancária
    async messRefBancariaIncluidaSucesso (selector) {

        // Card Endereço incluído com sucesso.
        await expect(page.locator('.toast-success')).toBeVisible();

        // Card Endereço incluído com sucesso. - Aviso
        await expect(page.locator('.toast-success > .toast-title')).toBeVisible();
        await expect(page.locator('.toast-success > .toast-title')).toHaveText('Aviso');

        // Card Endereço incluído com sucesso. - Endereço incluído com sucesso.
        await expect(page.locator('.toast-success > .toast-message')).toBeVisible();
        await expect(page.locator('.toast-success > .toast-message')).toHaveText('Referência Bancária incluída com sucesso.');
    }

    //validando informações que foram adicionadas no cadastro de referencia bancária
    async infosRefBancariaAdicionada (selector) {

        // Card de endereço adicionado
        await expect(page.locator('.md-whiteframe-2dp')).toBeVisible();
        await expect(page.locator('.md-whiteframe-2dp')).toContainText('aaa');
        await expect(page.locator('.md-whiteframe-2dp')).toContainText('Agencia:');
        await expect(page.locator('.md-whiteframe-2dp')).toContainText('Conta:');
    }


    //------------ PIX ERRADO tipo TELEFONE - 

    // validando mensagem de chave pix telefone inválida, após tentarmos inserir uma chave pix telefone fora do padrão
    async messRefBancariaChavePixTelefoneInvalida (selector) {

        // Card Erro identificado
        await expect(page.locator('.toast-error > .toast-title')).toBeVisible();

        // Card Endereço Erro identificado - Aviso
        await expect(page.locator('.toast-error > .toast-title')).toBeVisible();
        await expect(page.locator('.toast-error > .toast-title')).toHaveText('Erro identificado');

        // Card Erro identificado - mensagem
        await expect(page.locator('.toast-error > .toast-message')).toBeVisible();
        await expect(page.locator('.toast-error > .toast-message')).toHaveText('Chave Pix Telefone não informada ou inválida. Deve conter o DDD (2 digitos) mais o número do celular (9 dígitos). Informar somente números');
    }


    //------------ PIX ERRADO tipo EMAIL

    // validando mensagem de chave pix email inválida, após tentarmos inserir uma chave pix email fora do padrão
    async messRefBancariaChavePixEmailInvalida (selector) {

        // Card Erro identificado
        await expect(page.locator('.toast-error > .toast-title')).toBeVisible();

        // Card Endereço Erro identificado - Aviso
        await expect(page.locator('.toast-error > .toast-title')).toBeVisible();
        await expect(page.locator('.toast-error > .toast-title')).toHaveText('Erro identificado');

        // Card Erro identificado - mensagem
        await expect(page.locator('.toast-error > .toast-message')).toBeVisible();
        await expect(page.locator('.toast-error > .toast-message')).toHaveText('Chave Pix E-Mail não informada ou inválida.');
    }

    //------------ PIX ERRADO tipo CPF CNPJ

    // validando mensagem de chave pix email inválida, após tentarmos inserir uma chave pix CPF CNPJ fora do padrão
    async messRefBancariaChavePixCpfCnpjInvalida (selector) {

        // Card Erro identificado
        await expect(page.locator('.toast-error > .toast-title')).toBeVisible();

        // Card Endereço Erro identificado - Aviso
        await expect(page.locator('.toast-error > .toast-title')).toBeVisible();
        await expect(page.locator('.toast-error > .toast-title')).toHaveText('Erro identificado');

        // Card Erro identificado - mensagem
        await expect(page.locator('.toast-error > .toast-message')).toBeVisible();
        await expect(page.locator('.toast-error > .toast-message')).toHaveText('Chave Pix CPF/CNPJ não informada ou inválida. Deve conter um CPF ou CNPJ válido. Informar somente números.');
    }


    //------------ PIX ERRADO tipo Aletória

    // validando mensagem de chave pix email inválida, após tentarmos inserir uma chave pix Aletória fora do padrão
    async messRefBancariaChavePixAletoriaInvalida (selector) {

        // Card Erro identificado
        await expect(page.locator('.toast-error > .toast-title')).toBeVisible();

        // Card Endereço Erro identificado - Aviso
        await expect(page.locator('.toast-error > .toast-title')).toBeVisible();
        await expect(page.locator('.toast-error > .toast-title')).toHaveText('Erro identificado');

        // Card Erro identificado - mensagem
        await expect(page.locator('.toast-error > .toast-message')).toBeVisible();
        await expect(page.locator('.toast-error > .toast-message')).toHaveText('Chave Pix Aleatória não informada ou inválida. A chave aleatória deve ser informada com os traços que separa cada conjunto da chave aleatória, ao todo são 4 traços.');
    }


    //---------------------

    //arrastar referencia bancaria para fazer a edição
    async arrastarEditarRefBancaria (selector) {
        
        // Card de endereço adicionado - simulação de arrastar e soltar
        const card = page.locator('.md-whiteframe-2dp');
        await card.dispatchEvent('mousedown', { button: 0 });
        await card.dispatchEvent('mousemove', { clientX: 100, clientY: 0 }); // Ajuste clientX para a posição desejada
        await card.dispatchEvent('mouseup');
    }

    //clicar no lápis para editar referencia bancária
    async clicarEditarRefBancaria (selector) {

        // Ícone lápis
        await expect(page.locator('.btn-remove-item-list > :nth-child(1) > .md-raised > .ng-binding')).toBeVisible();

        // Botão inteiro
        await expect(page.locator('.btn-remove-item-list > :nth-child(1) > .md-raised')).toBeVisible();
        await expect(page.locator('.btn-remove-item-list > :nth-child(1) > .md-raised')).not.toHaveAttribute('disabled');

        // Clicar no botão inteiro
        await page.locator('.btn-remove-item-list > :nth-child(1) > .md-raised').click({ force: true });

        // Interceptar a chamada GET para '/services/v3/forma_pagamento'
        await page.route('**/services/v3/forma_pagamento', route => route.continue());

        // Esperar a resposta da API
        await page.waitForResponse(response => 
            response.url().includes('/services/v3/forma_pagamento') && response.status() === 200, 
            { timeout: 40000 }
        );
    }
}