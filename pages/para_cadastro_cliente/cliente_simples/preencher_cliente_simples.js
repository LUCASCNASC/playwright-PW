import { gerarCpf, gerarNomeAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarEmailAleatorio, gerarNomeEmpresa }  from '../../gerarDados';

export class PreencherClienteSimples {

    constructor(page) {
        this.page = page
    }

    //Campo Data Nascimento - validar e preencher
    async dataNascimento (selector) {

        // Verificar se o ícone de data de nascimento está visível e não possui o atributo 'disabled'
        const dataNascimentoIcon = page.locator(':nth-child(3) > .layout-xs-column > .md-block > .validaData > .md-datepicker-button');
        await expect(dataNascimentoIcon).toBeVisible();
        await expect(dataNascimentoIcon).not.toHaveAttribute('disabled', '');

        // Campo Data de nascimento - validando mensagem dentro do campo antes de preencher
        const dataNascimentoLabel = page.locator('label[aria-hidden="false"]');
        await expect(dataNascimentoLabel).toHaveText('Data de nascimento');

        // Campo data de nascimento
        const dataNascimentoInput = page.locator('input[ng-focus="ctrl.setFocused(true)"]');
        await expect(dataNascimentoInput).toBeVisible();
        await expect(dataNascimentoInput).toHaveValue('');
        await page.waitForTimeout(200);

        // Digitar a data de nascimento
        const dataNascimentoField = page.locator('text=Data de nascimento').locator('..').locator('input');
        await dataNascimentoField.type('30/09/1998', {force: true});
    }

    //Preencher campo CPF com CPF
    async cpfCliente (selector) {

        const cpf = gerarCpf(); // Gera um CPF válido

        // Campo CPF - validando mensagem dentro do campo antes de preencher
        const cpfLabel = page.locator('label[for="txtCpf"]');
        await expect(cpfLabel).toHaveText('CPF');

        // Campo CPF
        const cpfInput = page.locator('#txtCpf');
        await expect(cpfInput).toBeVisible();
        await expect(cpfInput).toHaveValue('');
        await cpfInput.type(cpf, {force: true});
    }

    //Preencher campo CNPJ com CNPJ
    async cnpjCliente (selector) {

        const cnpj = gerarCNPJ(); // Gera um CNPJ válido

        // Campo CNPJ - validando mensagem dentro do campo antes de preencher
        const cnpjLabel = page.locator('label[for="txtCNPJ"]');
        await expect(cnpjLabel).toHaveText('CNPJ');

        // Campo CNPJ
        const cnpjInput = page.locator('#txtCNPJ');
        await expect(cnpjInput).toBeVisible();
        await expect(cnpjInput).toHaveValue('');
        await cnpjInput.type(cnpj, { force: true });
    }

    //Campo Nome completo - cliente CPF
    async nomeCompletoCPF (selector) {

        const nomeCompleto = gerarNomeAleatorio();

        // Campo Nome Completo - validando mensagem dentro do campo antes de preencher
        const nomeCompletoLabel = page.locator('label[for="txtNomeCompleto"]');
        await expect(nomeCompletoLabel).toHaveText('Nome Completo');

        // Campo Nome Completo
        const nomeCompletoInput = page.locator('#txtNomeCompleto');
        await expect(nomeCompletoInput).toBeVisible();
        await expect(nomeCompletoInput).toHaveValue('');
        await nomeCompletoInput.type(nomeCompleto, { force: true });
    }

    //Campo Nome completo - cliente CNPJ
    async nomeCompletoCNPJ (selector) {

        const nomeCompletoEmpresa = gerarNomeEmpresa();

        // Campo Nome Completo - validando mensagem dentro do campo antes de preencher
        const nomeCompletoLabel = page.locator('label[for="txtNomeCompleto"]');
        await expect(nomeCompletoLabel).toHaveText('Nome Completo');

        // Campo Nome Completo
        const nomeCompletoInput = page.locator('#txtNomeCompleto');
        await expect(nomeCompletoInput).toBeVisible();
        await expect(nomeCompletoInput).toHaveValue('');
        await page.waitForTimeout(200);
        await nomeCompletoInput.type(nomeCompletoEmpresa, { force: true });
    }

    //Selecionar sexo da pessoa física
    async sexoPessoaFisica (selector) {

        // Campo Sexo
        const campoSexo = page.locator('.md-default-theme[ng-model="cliente.idtiposexo"]');
        await campoSexo.scrollIntoViewIfNeeded();
        await expect(campoSexo).toBeVisible();
        await expect(campoSexo).toHaveValue('');

        // Campo Sexo - clicar
        await campoSexo.click({ force: true });

        // Selecionar masculino
        const opcaoMasculino = page.locator('.md-text.ng-binding', { hasText: 'Masculino' });
        await opcaoMasculino.click({ force: true });
    }

    //Campo CEP - inserir e pesquisar
    async pesquisarCEP (selector) {

        const CEPcadastro = "87065300";

        // Campo CEP - validando mensagem dentro do campo antes de preencher
        const cepLabel = page.locator('label[for="txtCep"]');
        await expect(cepLabel).toHaveText('CEP');

        // Campo CEP
        const cepInput = page.locator('#txtCep');
        await cepInput.scrollIntoViewIfNeeded();
        await page.waitForTimeout(200);
        await expect(cepInput).toBeVisible();
        await expect(cepInput).toHaveValue('');
        await cepInput.type(CEPcadastro, { force: true });

        // Lupa de pesquisa do CEP
        const pesquisaCepIcone = page.locator('.md-icon-float > .ng-binding');
        await expect(pesquisaCepIcone).toBeVisible();
        await expect(pesquisaCepIcone).not.toHaveAttribute('disabled', '');

        // Interceptar a requisição GET para '/services/v3/cidade?uf=PR'
        await page.route('**/services/v3/cidade?uf=PR', route => route.continue());

        // Clicar na lupa de pesquisa do CEP
        await pesquisaCepIcone.click({ force: true });

        // Esperar pela requisição interceptada
        await page.waitForResponse(response => response.url().includes('/services/v3/cidade?uf=PR') && response.status() === 200, { timeout: 40000 });
    }

    //Campo Número - validar e preencher
    async numeroEndereco (selector) {

        const numero_rendereco = '66';

        // Campo Número - validando mensagem dentro do campo antes de preencher
        const numeroLabel = page.locator('label[for="txtNumero"]');
        await expect(numeroLabel).toHaveText('Número');

        // Campo Número, do endereço
        const numeroInput = page.locator('#txtNumero');
        await expect(numeroInput).toBeVisible();
        await expect(numeroInput).toHaveValue('');
        await numeroInput.type(numero_rendereco, { force: true });
    }

    //Preenchendo rota do cadastro de cliente
    async rotaCliente (selector) {

        const rota = '560';

        // Campo Código da rota - validando mensagem dentro do campo antes de preencher
        const codigoRotaLabel = page.locator('label[for="codigo_rota"]');
        await expect(codigoRotaLabel).toHaveText('Código da rota');

        // Interceptar a requisição GET para '/views/carrinho/modalRotas.html'
        await page.route('**/views/carrinho/modalRotas.html', route => route.continue());

        // Preencher campo rota 1
        const campoRota1 = page.locator('.rota-frete > .md-icon-right > .ng-binding');
        await expect(campoRota1).toBeVisible();
        await expect(campoRota1).toHaveValue('');
        await campoRota1.type(rota, { force: true });

        // Esperar pela requisição interceptada
        await page.waitForResponse(response => response.url().includes('/views/carrinho/modalRotas.html') && response.status() === 200, { timeout: 40000 });

        // Lupa do campo Rota 1
        await expect(campoRota1).toBeVisible();
        await expect(campoRota1).not.toHaveAttribute('disabled', '');

        // Campo rota 2 - validando mensagem dentro do campo antes de preencher
        const rota2Label = page.locator('label[for="txtBuscaRotaModal"]');
        await expect(rota2Label).toHaveText('Rota');

        // Preencher campo rota 2
        const campoRota2 = page.locator('#txtBuscaRotaModal');
        await expect(campoRota2).toBeVisible();
        await expect(campoRota2).toHaveValue('');
        await campoRota2.type(rota, { force: true });

        // Lupa do campo Rota 2
        const lupaRota2 = page.locator('md-icon[aria-label="Pesquisar"]');
        await expect(lupaRota2).toBeVisible();
        await expect(lupaRota2).not.toHaveAttribute('disabled', '');

        // Interceptar a requisição GET para '/services/v3/rota?idrota=560'
        await page.route('**/services/v3/rota?idrota=560', route => route.continue());

        // Clicar na lupa do campo Rota 2
        const pesquisarIcon = page.locator('md-icon[ng-click="pesquisar()"]');
        await pesquisarIcon.click({ force: true });

        // Esperar pela requisição interceptada
        await page.waitForResponse(response => response.url().includes('/services/v3/rota?idrota=560') && response.status() === 200, { timeout: 40000 });

        // Escolher última informação da rota
        await page.locator('text=560 - T.A. ROTA AUTOMAÇÃO MARINGÁ').click();

        // Interceptar a requisição GET para '/services/v3/local_entrega?rota=560'
        await page.route('**/services/v3/local_entrega?rota=560', route => route.continue());

        // Escolher a informação da rota de entrega
        await page.locator('text=560 - T.A. CIDADE AUTOMAÇÃO').click();

        // Esperar pela requisição interceptada
        await page.waitForResponse(response => response.url().includes('/services/v3/local_entrega?rota=560') && response.status() === 200, { timeout: 40000 });
    }
}