export class PreencherRota {

    constructor(page) {
        this.page = page
    }

    //preencher Rota no cadastro de rota e escolher as opções certas
    async rotaCompleta (selector) {

        const rota_cadastro = "560"

        //Campo Rota - validando mensagem dentro do campo antes de preencher
        await expect(page.locator('label[for="txtRota"]')).toHaveText('Rota');

        //Inserindo Rota 
        await page.locator('#txtRota').fill(rota_cadastro);

        await page.waitForTimeout(200);

        await page.route('**/services/v3/rota?idrota=560', route => route.continue());
        //Clicando na lupa de rota
        await page.locator('.layout-gt-sm-column > .md-block > .ng-binding').click({force: true});
        await page.waitForResponse('**/services/v3/rota?idrota=560', { timeout: 40000 });

        //Clicando na rota maringá - segunda rota
        await page.locator('v-pane-header.ng-scope > div').click({force: true});

        await page.waitForTimeout(200);

        await page.route('**/services/v3/local_entrega?rota=560', route => route.continue());
        //Clicando rota centro - terceira rota
        await page.locator('text=560 - T.A. ROTA AUTOMAÇÃO MARINGÁ').click();

        await page.locator('text=560 - T.A. CIDADE AUTOMAÇÃO').click();
        await page.waitForResponse('**/services/v3/local_entrega?rota=560', { timeout: 40000 });
    }

    //selecionar tipo de endereço do modal de rota Padrão
    async tipoEnderecoRota (selector) {

        //Clicar no campo tipo de endereço
        await page.locator('#txtTpEnderecoRota').click({force:true});

        //Clicar no tipo de endereço Padrão
        await page.locator('.md-text.ng-binding').filter({ hasText: 'Padrão' }).click({force:true});
    }
}