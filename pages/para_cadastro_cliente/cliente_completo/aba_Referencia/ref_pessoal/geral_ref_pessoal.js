import { gerarCpf, gerarNomeAleatorio, gerarEmailAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarNomeEmpresa, gerarRelacionamento }  from '../../../../gerarDados';
import { gerarChavePixTelefone, gerarChavePixTelefoneErrada, gerarChavePixEmailErrada, gerarChavePixCpfCnpjErrada } from '../../../../gerarDadosPIX'

export class GeralRefPessoal {

    constructor(page) {
        this.page = page
    }

    //validar e clicar na aba Bancária, dentro de Referencias
    async clicarAbaRefPessoal (selector) {

        //validando botão Pessoal
        await expect(page.locator('#menu_items_sec > .on')).toBeVisible();
        await expect(page.locator('#menu_items_sec > .on')).not.toHaveAttribute('disabled', '');
        //.and('have.text', 'Bancária')

        await page.route('**/views/cliente/refEtapaBancariaLista.html', route => route.continue());
        const [response] = await Promise.all([
        page.waitForResponse('**/views/cliente/refEtapaBancariaLista.html', { timeout: 40000 }),
        page.locator('#menu_items_sec > :nth-child(3)').click()
]);
    }

    //validando informações da tela antes de adicionar qualquer coisa - aba referencia Pessoal
    async validarAbaVazia (selector) {

        //validando título quando entramos na aba Pessoal
        await expect(page.locator('h3')).toBeVisible();
        await expect(page.locator('h3')).toHaveText('Referências / Pessoal');

        //validando botão + 
        await expect(page.locator('.layout-align-end-end > .md-fab')).toBeVisible();
        await expect(page.locator('.layout-align-end-end > .md-fab')).not.toHaveAttribute('disabled', '');

        //mensagem quando não tem nada adicionado na aba Pessoal
        await expect(page.locator('.text-align-center')).toBeVisible();
        await expect(page.locator('.text-align-center')).toHaveText('Não foi encontrado nenhum registro');

        await expect(page.locator('.btn')).toBeVisible();
        await expect(page.locator('.btn')).not.toHaveAttribute('disabled', '');
        //.and('contain', 'SALVAR')
    }

    //clicar no botão + para adicionar uma nova referencia pessoal
    async clicarAddNova (selector) {

        await page.route('**/views/cliente/modalClienteRefPessoal.html', route => route.continue());
        const [response] = await Promise.all([
        page.waitForResponse('**/views/cliente/modalClienteRefPessoal.html', { timeout: 40000 }),
        page.locator('.layout-align-end-end > .md-fab').click()
]);
    }

    //validar informações do modal Referencia Pessoal antes de preencher as informações
    async modalVazio (selector) {

        //título modal 
        await expect(page.locator('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .flex')).toBeVisible();
        await expect(page.locator('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .flex')).toHaveText('Referência pessoal');

        //botão X
        await expect(page.locator('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .md-icon-button > .ng-binding')).toBeVisible();
        await expect(page.locator('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .md-icon-button > .ng-binding')).not.toHaveAttribute('disabled', '');

        //campo Nome
        await expect(page.locator('#txtNomeRefPes')).toBeVisible();
        await expect(page.locator('#txtNomeRefPes')).not.toHaveAttribute('disabled', '');

        //informação campo Nome
        await expect(page.locator('label[for="txtNomeRefPes"]')).toHaveText('Nome');

        //campo Email
        await expect(page.locator('#txtEmailRefPes')).toBeVisible();
        await expect(page.locator('#txtEmailRefPes')).not.toHaveAttribute('disabled', '');

        //informação campo Email
        await expect(page.locator('label[for="txtEmailRefPes"]')).toHaveText('Email');

        //campo Telefone
        await expect(page.locator('#txtTelefoneRefPes')).toBeVisible();
        await expect(page.locator('#txtTelefoneRefPes')).not.toHaveAttribute('disabled', '');

        //informação campo Telefone
        await expect(page.locator('label[for="txtTelefoneRefPes"]')).toHaveText('Telefone');

        //campo Relacionamento
        await expect(page.locator('#txtRelacionamentoRefPes')).toBeVisible();
        await expect(page.locator('#txtRelacionamentoRefPes')).not.toHaveAttribute('disabled', '');

        //informação campo Relacionamento
        await expect(page.locator('label[for="txtRelacionamentoRefPes"]')).toHaveText('Relacionamento');

        //campo Data inclusão
        await expect(page.locator('#txtDtInclusaoRefPes')).toBeVisible();
        await expect(page.locator('#txtDtInclusaoRefPes')).toHaveAttribute('disabled', '');

        //informação Data inclusão
        await expect(page.locator('label[for="txtDtInclusaoRefPes"]')).toHaveText('Data inclusão');
                
        //validar botão SALVAR, desabilitado
        await expect(page.locator('#btnModalAddRefPessoal')).toBeVisible();
        await expect(page.locator('#btnModalAddRefPessoal')).toHaveAttribute('disabled', '');
    }

    //clicar para salvar Referencia Pessoal
    async clicarSalvar (selector) {

        await expect(page.locator('button:has-text("Salvar")')).toBeVisible();

        //validando botão salvar habilitado
        await expect(page.locator('#btnModalAddRefPessoal')).toBeVisible();
        await expect(page.locator('#btnModalAddRefPessoal')).not.toHaveAttribute('disabled', '');

        //clicar no botão SALVAR
        await page.locator('#btnModalAddRefPessoal').click();
    }

    // validando mensagem Referencia Pessoal incluída com sucesso Incluído com sucesso, após incluírmos a Referencia Pessoal
    async messRefPessoalIncluidaSucesso (selector) {

        //Card Endereço incluído com sucesso.
        await expect(page.locator('.toast-success')).toBeVisible();

        //Card Endereço incluído com sucesso. - Aviso
        await expect(page.locator('.toast-success > .toast-title')).toBeVisible();
        await expect(page.locator('.toast-success > .toast-title')).toHaveText('Aviso');

        //Card Endereço incluído com sucesso. - Referencia Pessoal incluído com sucesso.
        await expect(page.locator('.toast-success > .toast-message')).toBeVisible();
        await expect(page.locator('.toast-success > .toast-message')).toHaveText('Referência Pessoal incluída com sucesso.');
    }

    //validando informações que foram adicionadas no cadastro de referencia Pessoal
    async infosAdicionada (selector) {

        const hoje = new Date();
        const dataAtual = hoje.toLocaleDateString('pt-BR')

        //nome da pessoa
        await expect(page.locator('.flex-gt-sm-70 > :nth-child(1) > .ng-binding')).toBeVisible();

        //relacionamento
        await expect(page.locator('.flex-gt-sm-70 > :nth-child(3)')).toBeVisible();

        //telefone
        await expect(page.locator('[ng-show="(item.telefone)"]')).toBeVisible();

        //email
        await expect(page.locator('[ng-show="(item.email)"]')).toBeVisible();

        //data inclusão
        await expect(page.locator('.layout-align-gt-sm-center-end > .list-title > b')).toBeVisible();
        //.and('contain', 'Data Inclusão:')

        //valor da data de inclusão
        await expect(page.locator('.layout-align-gt-sm-center-end > .list-title')).toBeVisible();
        await expect(page.locator('.layout-align-gt-sm-center-end > .list-title')).toContainText(dataAtual);
    }

    async modalRefPessoalVazio (selector) {

        //título modal 
        await expect(page.locator('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .flex')).toBeVisible();
        await expect(page.locator('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .flex')).toHaveText('Referência pessoal');

        //botão X
        await expect(page.locator('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .md-icon-button > .ng-binding')).toBeVisible();
        await expect(page.locator('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .md-icon-button > .ng-binding')).not.toHaveAttribute('disabled', '');

        //campo Nome
        await expect(page.locator('#txtNomeRefPes')).toBeVisible();
        await expect(page.locator('#txtNomeRefPes')).not.toHaveAttribute('disabled', '');

        //informação campo Nome
        await expect(page.locator('label[for="txtNomeRefPes"]')).toHaveText('Nome');

        //campo Email
        await expect(page.locator('#txtEmailRefPes')).toBeVisible();
        await expect(page.locator('#txtEmailRefPes')).not.toHaveAttribute('disabled', '');

        //informação campo Email
        await expect(page.locator('label[for="txtEmailRefPes"]')).toHaveText('Email');

        //campo Telefone
        await expect(page.locator('#txtTelefoneRefPes')).toBeVisible();
        await expect(page.locator('#txtTelefoneRefPes')).not.toHaveAttribute('disabled', '');

        //informação campo Telefone
        await expect(page.locator('label[for="txtTelefoneRefPes"]')).toHaveText('Telefone');

        //campo Relacionamento
        await expect(page.locator('#txtRelacionamentoRefPes')).toBeVisible();
        await expect(page.locator('#txtRelacionamentoRefPes')).not.toHaveAttribute('disabled', '');

        //informação campo Relacionamento
        await expect(page.locator('label[for="txtRelacionamentoRefPes"]')).toHaveText('Relacionamento');

        //campo Data inclusão
        await expect(page.locator('#txtDtInclusaoRefPes')).toBeVisible();
        await expect(page.locator('#txtDtInclusaoRefPes')).toHaveAttribute('disabled', '');

        //informação Data inclusão
        await expect(page.locator('label[for="txtDtInclusaoRefPes"]')).toHaveText('Data inclusão');
                
        //validar botão SALVAR, desabilitado
        await expect(page.locator('#btnModalAddRefPessoal')).toBeVisible();
        await expect(page.locator('#btnModalAddRefPessoal')).toHaveAttribute('disabled', '');
    }
    
}
