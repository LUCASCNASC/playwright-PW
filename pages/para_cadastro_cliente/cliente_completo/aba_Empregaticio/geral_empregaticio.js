export class GeralEmpregaticio {

    constructor(page) {
        this.page = page
    }

    //Validar e clicar na aba Empregaticio
    async clicarAbaEmpregat (selector) {

        // Validando aba Empregaticio
        await page.locator('#menu_items_pri > :nth-child(6)').isVisible();
        await page.locator('#menu_items_pri > :nth-child(6)').isEnabled();
        // await expect(menuItem).toHaveText('Anexos');

        // Interceptar a requisição da aba Empregaticio
        await page.route('/views/cliente/clienteEmpregaticioLista.html', route => route.continue());

        // Clicar na aba Empregaticio
        await page.locator('#menu_items_pri > :nth-child(6)').click();

        // Esperar pela requisição interceptada
        await page.waitForResponse(response => 
        response.url().includes('/views/cliente/clienteEmpregaticioLista.html') && 
        response.status() === 200,
        { timeout: 40000 }
);
    }

    //validando informações da tela antes de adicionar qualquer coisa
    async validarAbaEmpregatVazia (selector) {

        // Validando título quando entramos na aba
        await expect(page.locator('h3')).toBeVisible();
        await expect(page.locator('h3')).toHaveText('Empregatício');

        // Validando botão +
        await expect(page.locator('.layout-align-end-end > .md-fab')).toBeVisible();
        await expect(page.locator('.layout-align-end-end > .md-fab')).toBeEnabled();

        // Mensagem quando não tem nada adicionado na aba
        await expect(page.locator('.text-align-center')).toBeVisible();
        await expect(page.locator('.text-align-center')).toHaveText('Não foi encontrado nenhum registro');

        // Validando botão SALVAR
        await expect(page.locator('.btn')).toBeVisible();
        await expect(page.locator('.btn')).toBeEnabled();
        // await expect(page.locator('.btn')).toContainText('SALVAR');
    }

    //clicar no botão + para adicionar uma nova referencia bancária
    async clicarAddNovoEmpregat (selector) {

        // Interceptar a requisição da modal Empregaticio
        await page.route('/services/v3/dados_tabela/tipocomprovanterenda', route => route.continue());

        // Clicar no botão +
        await page.locator('.layout-align-end-end > .md-fab').click();

        // Esperar pela requisição interceptada
        await page.waitForResponse(response => 
        response.url().includes('/services/v3/dados_tabela/tipocomprovanterenda') && 
        response.status() === 200,
        { timeout: 40000 }
);
    }

    //validar informações do modal Empregaticio antes de preencher as informações
    async modalEmpregatVazio (selector) {

        // Título modal 
        await expect(page.locator('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .flex')).toBeVisible();
        await expect(page.locator('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .flex')).toHaveText('Empregatício');

        // Botão X
        await expect(page.locator('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .md-icon-button > .ng-binding')).toBeVisible();
        await expect(page.locator('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .md-icon-button > .ng-binding')).toBeEnabled();

        // Campo CNPJ
        await expect(page.locator('#txtCnpjEmpr')).toBeVisible();
        await expect(page.locator('#txtCnpjEmpr')).toBeEnabled();

        // Informação campo CNPJ
        await expect(page.locator('label[for="txtCnpjEmpr"]')).toHaveText('CNPJ');

        // Campo Telefone
        await expect(page.locator('#txtTelEmp')).toBeVisible();
        await expect(page.locator('#txtTelEmp')).toBeEnabled();

        // Informação campo Telefone
        await expect(page.locator('label[for="txtTelEmp"]')).toHaveText('Telefone');

        // Campo Empresa
        await expect(page.locator('#txtNomeEmp')).toBeVisible();
        await expect(page.locator('#txtNomeEmp')).toBeEnabled();

        // Informação campo Empresa
        await expect(page.locator('label[for="txtNomeEmp"]')).toHaveText('Empresa');

        // Campo Ramo atividade
        await expect(page.locator('#txtRamoAtividade')).toBeVisible();
        await expect(page.locator('#txtRamoAtividade')).toBeEnabled();

        // Informação campo Ramo atividade
        await expect(page.locator('label[for="txtRamoAtividade"]')).toHaveText('Ramo atividade');

        // Campo CEP
        await expect(page.locator('#txtCepEmp')).toBeVisible();
        await expect(page.locator('#txtCepEmp')).toBeEnabled();

        // Informação campo CEP
        await expect(page.locator('label[for="txtCepEmp"]')).toHaveText('CEP');

        // Lupa do campo CEP
        await expect(page.locator(':nth-child(3) > .md-icon-float > .ng-binding')).toBeVisible();
        await expect(page.locator(':nth-child(3) > .md-icon-float > .ng-binding')).toBeEnabled();

        // Campo Endereço
        await expect(page.locator('#txtEnderecoEmp')).toBeVisible();
        await expect(page.locator('#txtEnderecoEmp')).toBeEnabled();

        // Informação campo Endereço
        await expect(page.locator('label[for="txtEnderecoEmp"]')).toHaveText('Endereço');

        // Campo Número
        await expect(page.locator('#txtNumEmp')).toBeVisible();
        await expect(page.locator('#txtNumEmp')).toBeEnabled();

        // Informação campo Número
        await expect(page.locator('label[for="txtNumEmp"]')).toHaveText('Número');

        // Campo Complemento
        await expect(page.locator('#txtComplEmp')).toBeVisible();
        await expect(page.locator('#txtComplEmp')).toBeEnabled();

        // Informação campo Complemento
        await expect(page.locator('label[for="txtComplEmp"]')).toHaveText('Complemento');

        // Campo Bairro
        await expect(page.locator('#txtBairroEmp')).toBeVisible();
        await expect(page.locator('#txtBairroEmp')).toBeEnabled();

        // Informação campo Bairro
        await expect(page.locator('label[for="txtBairroEmp"]')).toHaveText('Bairro');

        // Campo Estado
        await expect(page.locator('#txtUfEmp')).toBeVisible();
        await expect(page.locator('#txtUfEmp')).toBeEnabled();

        // Informação campo Estado
        await expect(page.locator('label[for="txtUfEmp"]')).toHaveText('Estado');

        // Campo Cidade
        await expect(page.locator('#txtCidadeEmp')).toBeVisible();
        await expect(page.locator('#txtCidadeEmp')).toBeEnabled();

        // Informação campo Cidade
        await expect(page.locator('label[for="txtCidadeEmp"]')).toHaveText('Cidade');

        // Ícone calendário Admissão
        await expect(page.locator('#txtAdmiEmp > .md-datepicker-button')).toBeVisible();
        await expect(page.locator('#txtAdmiEmp > .md-datepicker-button')).toBeEnabled();

        // Informação campo data Admissão 
        await expect(page.locator('text=Admissão').locator('..').locator('input')).toBeVisible();

        // Campo Salário
        await expect(page.locator('#txtSalarioEmp')).toBeVisible();
        await expect(page.locator('#txtSalarioEmp')).toBeEnabled();

        // Informação campo Salário
        await expect(page.locator('label[for="txtSalarioEmp"]')).toHaveText('Salário');

        // Ícone calendário ▋
    }
}