export class MenuOpcoes {

    constructor(page) {
        this.page = page
    }

    //Validar e clicar no menu de opções
    async iconeMenuOpcoes (selector) {

        // Ícone do menu de opções
        const menuIcon = page.locator('[aria-label="Menu de opções"] > .ng-binding');
        await expect(menuIcon).toBeVisible();
        await expect(menuIcon).not.toBeDisabled();

        // Clicar no ícone do menu de opções
        await menuIcon.click({ force: true });
    }

    //validando topo da página - parte colorida
    async topoPagina (selector) {

        // Topo da página - parte colorida
        const topoElement = page.locator('.topo > .md-toolbar-tools');
        await expect(topoElement).toBeVisible();
    }

    async imageMenu (selector) {

        // Validando imagem no início do modal menu
        const imageElement = page.locator('.md-primary > .logo > .md-default-theme > img');
        await expect(imageElement).toBeVisible();
        await expect(imageElement).not.toBeDisabled();
    }

    //Ícone do computador para validar se realmente saiu do pedido web
    async iconeComputadorLogin (selector) {

        // Ícone do computador
        const computerIcon = page.locator('[ng-click="clienteStatsOpen()"] > .ng-binding');
        await expect(computerIcon).toBeVisible();
        await expect(computerIcon).not.toBeDisabled();

        // Validando campo Buscar produto
        const searchField = page.locator('#searchText');
        await expect(searchField).toBeVisible();
        await expect(searchField).not.toBeDisabled();

        // Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
        const searchFieldLabel = page.locator('label[for="searchText"]');
        await expect(searchFieldLabel).toHaveText('Buscar produtos');
    }

    //Validando opção Ínicio, do menu de opções
    async inicioOpcaoMenu (selector) {

        // Ícone Início 
        const homeIcon = page.locator('md-icon[md-svg-src="images/icons/home.svg"]');
        await homeIcon.scrollIntoViewIfNeeded();
        await page.waitForTimeout(300);
        await expect(homeIcon).toBeVisible();

        // Opção Início no menu de opções
        const inicioOption = page.locator('a[aria-label="Início"]');
        await expect(inicioOption).toBeVisible();
        await expect(inicioOption).not.toBeDisabled();

        // Opção Início no menu de opções
        await expect(inicioOption).toHaveAttribute('aria-label', 'Início');
        await inicioOption.click({ force: true });
    }

    //Validando opção Departamentos, do menu de opções
    async departamentoOpcaoMenu (selector) {

        // Ícone Departamentos 
        const departamentosIcon = page.locator('md-icon[md-svg-src="images/icons/departamentos.svg"]');
        await departamentosIcon.scrollIntoViewIfNeeded();
        await expect(departamentosIcon).toBeVisible();

        // Opção Departamentos no menu de opções
        const departamentosOption = page.locator('a[aria-label="Departamentos"]');
        await expect(departamentosOption).toBeVisible();
        await expect(departamentosOption).not.toBeDisabled();

        // Opção Departamentos no menu de opções
        await expect(departamentosOption).toHaveAttribute('aria-label', 'Departamentos');
        await departamentosOption.click({ force: true });

        // Validando se entrou no Departamentos
        const breadcrumbDepartamentos = page.locator('.breadcrumbDepartamentos');
        await expect(breadcrumbDepartamentos).toBeVisible();
        await expect(breadcrumbDepartamentos).toContainText('Departamentos');
    }

    //Validando opção Serviços, do menu de opções
    async servicosOpcaoMenu (selector) {

        // Ícone Serviços 
        const servicesIcon = page.locator('md-icon[md-svg-src="images/icons/services.svg"]');
        await servicesIcon.scrollIntoViewIfNeeded();
        await expect(servicesIcon).toBeVisible();

        // Opção Serviços no menu de opções
        const servicesOption = page.locator('a[aria-label="Serviços"]');
        await expect(servicesOption).toBeVisible();
        await expect(servicesOption).not.toBeDisabled();

        // Opção Serviços no menu de opções
        await expect(servicesOption).toHaveAttribute('aria-label', 'Serviços');
        await servicesOption.click({ force: true });

        // Validando se entrou no Serviços
        const servicesValidation = page.locator('[ng-click="alterarOrdenacaoPorDescricao()"]');
        await expect(servicesValidation).toBeVisible();
        await expect(servicesValidation).not.toBeDisabled();
    }

    //Validando opção Pedidos Pendentes, do menu de opções
    async pedidosPendentesOpcaoMenu (selector) {

        // Ícone Pedidos pendentes 
        const pedidosIcon = page.locator('md-icon[md-svg-src="images/icons/pedido.svg"]');
        await pedidosIcon.scrollIntoViewIfNeeded();
        await expect(pedidosIcon).toBeVisible();

        // Opção Pedidos pendentes no menu de opções
        const pedidosOption = page.locator('a[aria-label="Pedidos pendentes"]');
        await expect(pedidosOption).toBeVisible();
        await expect(pedidosOption).not.toBeDisabled();

        // Opção Pedidos pendentes no menu de opções
        await expect(pedidosOption).toHaveAttribute('aria-label', 'Pedidos pendentes');
        await pedidosOption.click({ force: true });

        // Validando se entrou no Pedidos pendentes
        const pedidosHeader = page.locator('.header');
        await expect(pedidosHeader).toBeVisible();
        await expect(pedidosHeader).toContainText('PEDIDOS PENDENTES');
    }

    //Validando opção Cliente, do menu de opções
    async clienteOpcaoMenu (selector) {

        // Ícone Cliente
        const clienteIcon = page.locator('md-icon[md-svg-src="images/icons/cliente.svg"]');
        await clienteIcon.scrollIntoViewIfNeeded();
        await expect(clienteIcon).toBeVisible();

        // Opção Cliente no menu de opções
        const clienteOption = page.locator('a[aria-label="Cliente"]');
        await expect(clienteOption).toBeVisible();
        await expect(clienteOption).not.toBeDisabled();

        // Opção Cliente no menu de opções
        await expect(clienteOption).toHaveAttribute('aria-label', 'Cliente');
        await clienteOption.click({ force: true });

        // Validando se entrou no Cliente
        const clienteValidation = page.locator('.md-default');
        await expect(clienteValidation).toBeVisible();
        await expect(clienteValidation).not.toBeDisabled();
    }

    //Validando opção Cliente Completo, do menu de opções
    async clienteCompletoOpcaoMenu (selector) {

        // Ícone Cliente completo
        const clienteCompletoIcon = page.locator('md-icon[md-svg-src="images/icons/cliente_completo.svg"]');
        await clienteCompletoIcon.scrollIntoViewIfNeeded();
        await expect(clienteCompletoIcon).toBeVisible();

        // Opção Cliente completo no menu de opções
        const clienteCompletoOption = page.locator('a[aria-label="Cliente completo"]');
        await expect(clienteCompletoOption).toBeVisible();
        await expect(clienteCompletoOption).not.toBeDisabled();

        // Opção Cliente completo no menu de opções
        await expect(clienteCompletoOption).toHaveAttribute('aria-label', 'Cliente completo');
        await clienteCompletoOption.click({ force: true });

        // Validando se entrou no Cliente completo
        const clienteCompletoValidation = page.locator('#menu_items_pri > .on');
        await expect(clienteCompletoValidation).toBeVisible();
        await expect(clienteCompletoValidation).not.toBeDisabled();
    }

    //Validando opção Pós Venda, do menu de opções
    async posVendaOpcaoMenu (selector) {

        // Ícone Pós-venda
        const posVendaIcon = page.locator('md-icon[md-svg-src="images/icons/pos-venda.svg"]');
        await posVendaIcon.scrollIntoViewIfNeeded();
        await expect(posVendaIcon).toBeVisible();

        // Opção Pós-venda no menu de opções
        const posVendaOption = page.locator('a[aria-label="Pós-venda"]');
        await expect(posVendaOption).toBeVisible();
        await expect(posVendaOption).not.toBeDisabled();

        // Opção Pós-venda no menu de opções
        await expect(posVendaOption).toHaveAttribute('aria-label', 'Pós-venda');
        await posVendaOption.click({ force: true });

        // Validando se entrou no Pós-venda
        const posVendaHeader = page.locator('.header');
        await expect(posVendaHeader).toBeVisible();
    }

    //Validando opção Intenção de compra, do menu de opções
    async intencaoCompraOpcaoMenu (selector) {

        // Ícone Intenção de compra
        const intencaoCompraIcon = page.locator('md-icon[md-svg-src="images/icons/intencao.svg"]');
        await intencaoCompraIcon.scrollIntoViewIfNeeded();
        await expect(intencaoCompraIcon).toBeVisible();

        // Opção Intenção de compra no menu de opções
        const intencaoCompraOption = page.locator('button[aria-label="Intenção de compra"]');
        await expect(intencaoCompraOption).toBeVisible();
        await expect(intencaoCompraOption).not.toBeDisabled();

        // Opção Intenção de compra no menu de opções
        await expect(intencaoCompraOption).toHaveAttribute('aria-label', 'Intenção de compra');
        await intencaoCompraOption.click({ force: true });

        // Validando se entrou no Intenção de compra
        const intencaoCompraHeader = page.locator('.header');
        await expect(intencaoCompraHeader).toBeVisible();
    }

    //Validando opção Propósta de crédito, do menu de opções
    async propostaCreditoOpcaoMenu (selector) {

        // Ícone Proposta de crédito
        const propostaCreditoIcon = page.locator('md-icon[md-svg-src="images/icons/aprovacao_credito.svg"]');
        await propostaCreditoIcon.scrollIntoViewIfNeeded();
        await expect(propostaCreditoIcon).toBeVisible();

        // Opção Proposta de crédito no menu de opções
        const propostaCreditoOption = page.locator('a[aria-label="Proposta de crédito"]');
        await expect(propostaCreditoOption).toBeVisible();
        await expect(propostaCreditoOption).not.toBeDisabled();

        // Opção Proposta de crédito no menu de opções
        await expect(propostaCreditoOption).toHaveAttribute('aria-label', 'Proposta de crédito');
        await propostaCreditoOption.click({ force: true });

        // Validando se entrou no Proposta de crédito
        const propostaCreditoHeader = page.locator('.header');
        await expect(propostaCreditoHeader).toBeVisible();
    }

    //Validando opção Configurações, do menu de opções
    async configuracoesOpcaoMenu (selector) {

        // Ícone Configurações
        const configuracoesIcon = page.locator('md-icon[md-svg-src="images/icons/settings.svg"]');
        await configuracoesIcon.scrollIntoViewIfNeeded();
        await expect(configuracoesIcon).toBeVisible();

        // Opção Configurações no menu de opções
        const configuracoesOption = page.locator('a[aria-label="Configurações"]');
        await expect(configuracoesOption).toBeVisible();
        await expect(configuracoesOption).not.toBeDisabled();

        // Opção Configurações no menu de opções
        await expect(configuracoesOption).toHaveAttribute('aria-label', 'Configurações');
        await configuracoesOption.click({ force: true });

        // Validando se entrou no Configurações
        const configuracoesValidation = page.locator('ui-view.ng-scope > :nth-child(2)');
        await expect(configuracoesValidation).toBeVisible();
    }

    //Validando opção Minha performance, do menu de opções
    async minhaPerformanceOpcaoMenu (selector) {

        // Ícone Minha performance
        const minhaPerformanceIcon = page.locator('md-icon[md-svg-src="images/icons/performance.svg"]');
        await minhaPerformanceIcon.scrollIntoViewIfNeeded();
        await expect(minhaPerformanceIcon).toBeVisible();

        // Opção Minha performance no menu de opções
        const minhaPerformanceOption = page.locator('a[aria-label="Minha performance"]');
        await expect(minhaPerformanceOption).toBeVisible();
        await expect(minhaPerformanceOption).not.toBeDisabled();

        // Opção Minha performance no menu de opções
        await expect(minhaPerformanceOption).toHaveAttribute('aria-label', 'Minha performance');
        await minhaPerformanceOption.click({ force: true });

        // Validando se entrou no Minha performance
        const headerElement = page.locator('.header');
        await expect(headerElement).toBeVisible();
    }

    //validando opção Sair, já fora da opção menu de opções
    async botaoSair (selector) {

        // Opção Minha performance no menu de opções
        const minhaPerformanceOption = page.locator('.rodape > ._md-button-wrap > div.md-button > .md-no-style');
        await expect(minhaPerformanceOption).toBeVisible();
        await expect(minhaPerformanceOption).not.toBeDisabled();

        // Opção Minha performance no menu de opções
        await expect(minhaPerformanceOption).toHaveAttribute('aria-label', 'Sair');
        await minhaPerformanceOption.click({ force: true });
    }
}