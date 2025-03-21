export class GeralRota {

    constructor(page) {
        this.page = page
    }

    //Validar e clicar na aba ROTA
    async clicarAbaRota (selector) {

        // Validando aba Rota
        await expect(page.locator('#menu_items_pri > :nth-child(3)')).toBeVisible();
        await expect(page.locator('#menu_items_pri > :nth-child(3)')).toHaveText('Rotas');

        await page.route('**/views/cliente/clienteRotasLista.html', route => route.continue());

        // Clicar na aba Rota
        const [response] = await Promise.all([
        page.waitForResponse('**/views/cliente/clienteRotasLista.html', { timeout: 40000 }),
        page.locator('#menu_items_pri > :nth-child(3)').click()
]);
    }

    //botão + para adicionar um nova Rota
    async clicarAdicionarNovaRota (selector) {

        //Botão +, para adicionar Rota
        await expect(page.locator('.layout-align-end-end > .md-fab')).toBeVisible();
        await expect(page.locator('.layout-align-end-end > .md-fab')).not.toHaveAttribute('disabled', '');

        //Botão +, para adicionar Rota
        await page.locator('.layout-align-end-end > .md-fab').click();
    }

    //validar informações do modal rota enquanto ainda está vazio
    async modalRotaVazioValidar (selector) {

        //Card Rotas - título Rotas
        await expect(page.locator('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')).toBeVisible();
        await expect(page.locator('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')).toHaveText('Rotas');

        //Card Rotas - botão X
        await expect(page.locator('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button > .ng-binding')).toBeVisible();
        await expect(page.locator('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button > .ng-binding')).not.toHaveAttribute('disabled', '');

        //Campo Tipo de endereço - validando mensagem dentro do campo antes de preencher
        await expect(page.locator('label[for="txtTpEnderecoRota"]')).toHaveText('Tipo de endereço');

        //Card Rotas - Campo Tipo de endereço
        await expect(page.locator('#txtTpEnderecoRota')).toBeVisible();
        await expect(page.locator('#txtTpEnderecoRota')).toHaveValue('');

        //Card Rotas - Campo Rota
        await expect(page.locator('#txtRota')).toBeVisible();
        await expect(page.locator('#txtRota')).toHaveValue('');

        //Card Rotas - Lupa de rota
        await expect(page.locator('.layout-gt-sm-column > .md-block > .ng-binding')).toBeVisible();
    }

    // validando mensagem Rota Incluída com sucesso, após incluírmos a rota no cadastro
    async messRotaIncluidaSucesso (selector) {

        //Card Rota incluída com sucesso.
        await expect(page.locator('#toast-container > :nth-child(1)')).toBeVisible();

        //Card Rota incluída com sucesso. - Aviso
        await expect(page.locator(':nth-child(1) > .toast-title')).toBeVisible();
        await expect(page.locator(':nth-child(1) > .toast-title')).toHaveText('Aviso');

        //Card Rota incluída com sucesso. - Rota incluída com sucesso.
        await expect(page.locator(':nth-child(1) > .toast-message')).toBeVisible();
        await expect(page.locator(':nth-child(1) > .toast-message')).toHaveText('Rota incluída com sucesso.');
    }

    //validando informações que foram adicionadas no cadastro de rota
    async infosRotaAdicionada (selector) {

        //Card de rota adicionada
        await expect(page.locator('.md-whiteframe-2dp')).toBeVisible();
        // await expect(page.locator('.md-whiteframe-2dp')).toContainText('Grupo: 5');
        // await expect(page.locator('.md-whiteframe-2dp')).toContainText('Rota: 1');
        // await expect(page.locator('.md-whiteframe-2dp')).toContainText('Cidade: 1');
        // await expect(page.locator('.md-whiteframe-2dp')).toContainText('Tipo endereço: 1');
    }
}