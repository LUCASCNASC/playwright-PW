import { gerarCpf, gerarNomeAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarEmailAleatorio, gerarNomeEmpresa }  from '../gerarDados';

export class GeralClienteSimples {

    constructor(page) {
        this.page = page
    }

    //Menu de opções
    async iconeMenuOpcoes (selector) {

        //Ícone do menu de opções
        const menuDeOpcoes = page.locator('[aria-label="Menu de opções"] > .ng-binding');
        await expect(menuDeOpcoes).toBeVisible();
        await expect(menuDeOpcoes).not.toHaveAttribute('disabled', '');

        // Clicar no ícone do menu de opções
        await menuDeOpcoes.click({force: true});
    }

    //Escolher opção cliente no menu de opções
    async opcaoClienteSimples (selector) {

        //Opção Cliente no menu de opções
        const clienteLink = page.locator('a[aria-label="Cliente"]');
        await expect(clienteLink).toHaveAttribute('aria-label', 'Cliente');

        // Opção Cliente no menu de opções
        await clienteLink.scrollIntoViewIfNeeded();
        await clienteLink.click({force: true});
    }

    //Botão SALVAR, do cliente simples
    async salvarClienteSimples (selector) {

        //Botão SALVAR
        const salvarBotao = page.locator('.layout-align-end-center > .md-raised');
        await salvarBotao.scrollIntoViewIfNeeded();
        await expect(salvarBotao).toBeVisible();
        await expect(salvarBotao).not.toHaveAttribute('disabled', '');

        // Clica no botão SALVAR
        await salvarBotao.click({force: true});
    }

    //Botão arrastar para pessoa jurídica - arrastar e validar
    async arrastarPessJuridica (selector) {

        //Arrastar para Pessoa jurídica
        const label = page.locator('.flex-md-100 > .md-auto-horizontal-margin > .md-label');
        await expect(label).toBeVisible();
        await expect(label).toContainText(' Pessoa Física/Pessoa Júridica ');

        // Clicar no elemento
        await label.click({force: true});
    }

    //Primeira mensagem de Registro salvo com sucesso!
    async messPrimeiroRegistSalvoSucesso (selector) {

        //Card de mensagem de Registro salvo com sucesso!
        await expect(page.locator('.toast')).toBeVisible();

        // Verificar se o título do toast está visível e contém o texto 'Aviso'
        await expect(page.locator('.toast-title')).toBeVisible();
        await expect(page.locator('.toast-title')).toHaveText('Aviso');

        // Verificar se a mensagem do toast está visível e contém o texto 'Registro salvo com sucesso!'
        await expect(page.locator('.toast-message')).toBeVisible();
        await expect(page.locator('.toast-message')).toHaveText('Registro salvo com sucesso!');
    }

    //logar no sistema novamente, para realizar as alterações no cadastro
    async logarNovamente (selector) {

        //Inserir Usuário para logar novamente
        await page.locator('#txtusername').type('sabium.automacao');

        // Inserir Senha para logar novamente
        await page.locator('#txtpassword').type('123.automacao');

        // Interceptar a requisição GET para '/images/icons/discount.svg'
        await page.route('**/images/icons/discount.svg', route => route.continue());

        // Clicar no botão Entrar, para logar novamente
        await page.locator('.test_btnSalvarCliente').click({force: true});

        // Esperar pela requisição interceptada
        await page.waitForResponse(response => response.url().includes('/images/icons/discount.svg') && response.status() === 200, { timeout: 40000 });
    }

    //clicar para sair do sistema
    async clicarSairSistema (selector) {

        //Clicar no botão Sair
        await page.locator('.rodape > ._md-button-wrap > div.md-button > .md-no-style').click({force: true});
    }

    //validar e clicar em SIM na mensagem "Deseja visualizar este cadastro?", quando quero alterar data de nascimento de um cadastro de cliente simples
    async desejoVisualizarCadastro (selector) {

        //Mensagem se desejo visualizar o cadastro
        const titulo = page.locator('.md-title');
        await expect(titulo).toBeVisible();
        await expect(titulo).toContainText('Este CPF / CNPJ já está cadastrado para');
        await expect(titulo).toContainText(', deseja visualizar este cadastro?');

        // Validar Não para se desejo visualizar este cadastro
        const botaoNao = page.locator('.md-cancel-button');
        await expect(botaoNao).toBeVisible();
        await expect(botaoNao).not.toHaveAttribute('disabled', ''); 

        // Validar Sim para se desejo visualizar este cadastro
        const botaoSim = page.locator('.md-confirm-button');
        await expect(botaoSim).toBeVisible();
        await expect(botaoSim).not.toHaveAttribute('disabled', '');

        // Clicar em Sim para se desejo visualizar este cadastro
        await botaoSim.click({force: true});
    }

    //validar trial quando alteramos a data de nascimento do cliente simples
    async autorizarTrialAltDataNasc (selector) {

        const idSupervisorTrial = "393";
        const nomeSupervidorTrial = "T.A. USUÁRIO AUTOMAÇÃO";
        const senhaSupervisor = "123.automacao";

        // Card de Autorização do Supervisor

        // Título Autorização do Supervisor
        await expect(page.locator('.md-toolbar-tools > .ng-binding')).toBeVisible();
        await expect(page.locator('.md-toolbar-tools > .ng-binding')).toHaveText('Autorização do Supervisor');

        // Título da coluna Trial
        await expect(page.locator('thead > tr > :nth-child(1)')).toBeVisible();
        await expect(page.locator('thead > tr > :nth-child(1)')).toHaveText('Trial');

        // Informação da coluna Trial
        await expect(page.locator('tbody > .ng-scope > :nth-child(1)')).toBeVisible();

        // Título da coluna Descrição
        await expect(page.locator('thead > tr > :nth-child(2)')).toBeVisible();
        await expect(page.locator('thead > tr > :nth-child(2)')).toHaveText('Descrição');

        // Informação da coluna Descrição
        await expect(page.locator('tbody > .ng-scope > :nth-child(2)')).toBeVisible();

        // Título da coluna Status
        await expect(page.locator('thead > tr > :nth-child(3)')).toBeVisible();
        await expect(page.locator('thead > tr > :nth-child(3)')).toHaveText('Status');

        // Informação da coluna Status
        const statusCell = page.locator('td.ng-binding', { hasText: 'Pendente' });
        await expect(statusCell).toBeVisible();
        await expect(statusCell).toHaveText('Pendente');
        await expect(statusCell).toHaveCSS('background-color', 'rgb(234, 7, 7)');

        // Título da coluna Permissão / Usuário
        await expect(page.locator('thead > tr > :nth-child(4)')).toBeVisible();
        await expect(page.locator('thead > tr > :nth-child(4)')).toHaveText('Permissão / Usuário');

        // Informação da coluna Permissão / Usuário
        await expect(page.locator('tbody > .ng-scope > :nth-child(4)')).toBeVisible();
        await expect(page.locator('tbody > .ng-scope > :nth-child(4)')).toHaveText('Sim');

        // Validando Texto Supervisor
        await expect(page.locator('tbody > :nth-child(2) > .ng-binding')).toBeVisible();
        await expect(page.locator('tbody > :nth-child(2) > .ng-binding')).toHaveText('Supervisor');

        // Validando ID do supervisor
        await expect(page.locator('[ng-model="idUsuario"]')).toBeVisible();
        await expect(page.locator('[ng-model="idUsuario"]')).toHaveValue(idSupervisorTrial);

        // Validando nome do Supervisor
        await expect(page.locator('[ng-model="nomeUsuario"]')).toBeVisible();
        await expect(page.locator('[ng-model="nomeUsuario"]')).toHaveValue(nomeSupervidorTrial);

        // Validando texto Senha
        await expect(page.locator('tbody > :nth-child(3) > :nth-child(1)')).toBeVisible();
        await expect(page.locator('tbody > :nth-child(3) > :nth-child(1)')).toHaveText('Senha');

        // Validando campo de senha do supervisor
        const senhaField = page.locator(':nth-child(3) > [colspan="2"] > .ng-pristine');
        await expect(senhaField).toBeVisible();
        await expect(senhaField).toHaveValue('');
        await senhaField.type(senhaSupervisor);

        // Clicar no botão CONFIRMAR
        await page.locator('button', { hasText: 'Confirmar' }).click();
    }
}