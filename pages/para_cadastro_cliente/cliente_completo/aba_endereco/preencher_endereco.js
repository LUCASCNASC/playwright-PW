export class PreencherEndereco {

    constructor(page) {
        this.page = page
    }

    //selecionar tipo de endereço
    async tipoEndereco (selector) {

        // Selecionar tipo de endereço
        await page.locator('.md-text.ng-binding', { hasText: 'Padrão' }).click({ force: true });
    }

    //preencher campo CEP no cadastro de endereço e pesquisar
    async cepEndereco (selector) {

        const CEPcadastro = "87065300";

        // Preenchendo campo CEP
        await page.locator('#txtCepEndereco').fill(CEPcadastro, { force: true });

        // Lupa de pesquisa de CEP
        await expect(page.locator('.md-icon-float > .ng-binding')).toBeVisible();

        // Interceptar a requisição de cidade
        await page.route('/services/v3/cidade?uf=PR', route => route.continue());

        // Clicar na lupa de pesquisa de CEP
        await page.locator('.md-icon-float > .ng-binding').click({ force: true });

        // Esperar pela requisição interceptada
        await page.waitForResponse(response => 
        response.url().includes('/services/v3/cidade?uf=PR') && 
        response.status() === 200,
        { timeout: 40000 }
);
    }

    //preencher campo Numero no cadastro de endereço
    async numeroEndereco (selector) {

        const numero_endereco = "66";

        // Preenchendo campo Número
        await page.locator('#txtNumEndereco').fill(numero_endereco, { force: true });
    }
}