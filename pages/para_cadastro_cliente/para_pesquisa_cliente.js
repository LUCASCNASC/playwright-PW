export class PesquisaCliente {

    constructor(page) {
        this.page = page
    }

    //validando mensagem "Aguarde carregando..."
    async messAguardeCarregando (selector) {

        //Mensagem de "Aguarde carregando..."
        await expect(page.locator('.md-dialog-fullscreen > .carregando')).toBeVisible().toHaveText('Aguarde carregando...')
    }

    //clicando na lupa pesquisa de cliente
    async clicarLupaPesquisaCliente (selector) {

        //clicar na lupa de pesquisa de clientes
        await expect(page.locator('.md-block > .ng-binding')).toBeVisible().click()
    }

    //clicando cliente CPF pesquisado
    async clicarCPFPesquisado (selector) {

        //Card de clientes - Conteúdo que a pesquisa trouxe
        await expect(page.locator('button[aria-label="CPF AUTOMACAO SABIUM - LUCAS CAMARGO 117.415.410-18   - MARINGA/PR"]')).toBeVisible().not.toHaveAttribute('disabled').click()
    }

    //clicando cliente CNPJ pesquisado
    async clicarCNPJPesquisado (selector) {

        //Card de clientes - Conteúdo que a pesquisa trouxe
        await expect(page.locator('button[aria-label="CNPJ AUTOMACAO SABIUM - LUCAS CAMARGO 24.468.163/0001-61   - MARINGA/PR"]')).toBeVisible().not.toHaveAttribute('disabled').click()
    }

    //pesquisar cliente por numero de CPF
    async inserirCPF (selector) {

        const numeroCPF = "117.415.410-18"

        //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
        await page.fill('.click-cliente > .informe-o-cliente > .cliente-header', numeroCPF);
    }

    //digitar cliente por numero de CPF
    async digitarNovamenteCPF (selector) {

        const numeroCPF = "117.415.410-18"

        //Card de clientes - campo para digitar cliente
        await page.locator('#txtBuscaClienteModal').fill('');
        await page.waitForTimeout(100);
        await expect(page.locator('#txtBuscaClienteModal')).toHaveValue('');
        await page.waitForTimeout(100);
        await page.locator('#txtBuscaClienteModal').type(numeroCPF);
    }

    //pesquisar cliente por numero de CNPJ
    async inserirCNPJ (selector) {

        const numeroCNPJ = "24468163000161"

        //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
        cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
            .wait(500)
            .type(numeroCNPJ,'{downArrow}')
    }

    //digitar cliente por numero de CNPJ
    async digitarNovamenteCNPJ (selector) {

        const numeroCNPJ = "24468163000161"

        //Card de clientes - campo para digitar cliente
        await page.locator('.click-cliente > .informe-o-cliente > .cliente-header').click();
        await page.waitForTimeout(500);
        await page.locator('.click-cliente > .informe-o-cliente > .cliente-header').type(numeroCNPJ);
        await page.keyboard.press('ArrowDown');
    }

    //pesquisar cliente por descrição de CPF
    async inserirDescricaoCPF (selector) {

        const descricaoCPF = "CPF AUTOMAÇÃO SABIUM - LUCAS CAMARGO"

        //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
        await page.locator('.click-cliente > .informe-o-cliente > .cliente-header').click();

        //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
        await page.waitForTimeout(500);
        await page.locator('#txtBuscaCliente').type(descricaoCPF);
        await page.keyboard.press('ArrowDown');
    }

    //digitar cliente por descrição de CPF
    async digitarNovamenteDescriCPF (selector) {

        const descricaoCPF = "CPF AUTOMAÇÃO SABIUM - LUCAS CAMARGO"

        //Card de clientes - campo para digitar cliente
        await page.locator('#txtBuscaClienteModal').fill('');
        await page.waitForTimeout(100);
        await expect(page.locator('#txtBuscaClienteModal')).toHaveValue('');
        await page.waitForTimeout(100);
        await page.locator('#txtBuscaClienteModal').type(descricaoCPF);
    }

    //pesquisar cliente por descrição de CNPJ
    async inserirDescriCNPJ (selector) {

        const descricaoCNPJ = "CNPJ AUTOMAÇÃO SABIUM - LUCAS CAMARGO"

        // inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
        await page.locator('.click-cliente > .informe-o-cliente > .cliente-header').click();

        // inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
        await page.waitForTimeout(500);
        await page.locator('#txtBuscaCliente').type(descricaoCNPJ);
        await page.keyboard.press('ArrowDown');
    }

    //digitar cliente por descrição de CNPJ
    async digitarNovamenteDescriCNPJ (selector) {

        const descricaoCNPJ = "CNPJ AUTOMAÇÃO SABIUM - LUCAS CAMARGO"

        //Card de clientes - campo para digitar cliente
        await page.locator('#txtBuscaClienteModal').fill('');
        await page.waitForTimeout(100);
        await expect(page.locator('#txtBuscaClienteModal')).toHaveValue('');
        await page.waitForTimeout(100);
        await page.locator('#txtBuscaClienteModal').type(descricaoCNPJ);
    }
}