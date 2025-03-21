import { gerarCpf, gerarNomeAleatorio, gerarEmailAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarNomeEmpresa,
         gerarRelacionamento, gerarObservação }  from '../../../../gerarDados';
import { gerarChavePixTelefone, gerarChavePixTelefoneErrada, gerarChavePixEmailErrada, gerarChavePixCpfCnpjErrada } from '../../../../gerarDadosPIX'

export class GeralRefComercial {

    constructor(page) {
        this.page = page
    }

    //validar e clicar na aba Comercial, dentro de Referencias
    async clicarAbaRefComercial (selector) {

        // Validando botão Comercial
        const btnComercial = page.locator('#menu_items_sec > .on');
        await expect(btnComercial).toBeVisible();
        await expect(btnComercial).not.toHaveAttribute('disabled', 'true');
        //await expect(btnComercial).toHaveText('Comercial');

        // Interceptando a requisição GET para /views/cliente/refEtapaComercialLista.html
        await page.route('**/views/cliente/refEtapaComercialLista.html', route => route.fulfill({
        status: 200,
        body: 'mocked response'
        }));

        // Clicando botão Comercial
        await page.locator('#menu_items_sec > :nth-child(2)').click();

        // Esperando a requisição ser interceptada
        await page.waitForResponse('**/views/cliente/refEtapaComercialLista.html', { timeout: 40000 });
    }

    //validando informações da tela antes de adicionar qualquer coisa - aba referencia Comercial
    async validarAbaRefComercialVazia (selector) {

        // Validando título quando entramos na aba Comercial
        await expect(page.locator('h3')).toBeVisible();
        await expect(page.locator('h3')).toHaveText('Referências / Comercial');

        // Validando botão +
        const btnAdicionar = page.locator('.layout-align-end-end > .md-fab');
        await expect(btnAdicionar).toBeVisible();
        await expect(btnAdicionar).not.toHaveAttribute('disabled', 'true');

        // Mensagem quando não tem nada adicionado na aba Comercial
        const msgSemRegistro = page.locator('.text-align-center');
        await expect(msgSemRegistro).toBeVisible();
        await expect(msgSemRegistro).toHaveText('Não foi encontrado nenhum registro');

        // Validando botões SALVAR
        const btnSalvar = page.locator('.btn');
        await expect(btnSalvar).toBeVisible();
        await expect(btnSalvar).not.toHaveAttribute('disabled', 'true');
        //await expect(btnSalvar).toContainText('SALVAR');
    }

    //clicar no botão + para adicionar uma nova referencia Comercial
    async clicarAddNovaRefComercial (selector) {

        // Interceptando a requisição GET para /views/cliente/modalClienteRefComercial.html
        await page.route('**/views/cliente/modalClienteRefComercial.html', route => route.fulfill({
            status: 200,
            body: 'mocked response'
        }));
        
        // Clicar no botão +
        await page.locator('.layout-align-end-end > .md-fab').click();
        
        // Esperando a requisição ser interceptada
        await page.waitForResponse('**/views/cliente/modalClienteRefComercial.html', { timeout: 40000 });
    }

    //validar informações do modal Referencia Comercial antes de preencher as informações
    async modalRefComercialVazio (selector) {

        // Título modal
        await expect(page.locator('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .flex')).toBeVisible();
        await expect(page.locator('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .flex')).toHaveText('Referência comercial');

        // Botão X
        const botaoX = page.locator('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .md-icon-button > .ng-binding');
        await expect(botaoX).toBeVisible();
        await expect(botaoX).not.toHaveAttribute('disabled', 'true');

        // Campo Empresa
        const campoEmpresa = page.locator('#txtEmpresaRefCom');
        await expect(campoEmpresa).toBeVisible();
        await expect(campoEmpresa).toHaveValue('');
        await expect(campoEmpresa).not.toHaveAttribute('disabled', 'true');

        // Informação campo Empresa
        await expect(page.locator('label[for="txtEmpresaRefCom"]')).toHaveText('Empresa');

        // Campo Contato
        const campoContato = page.locator('#txtContatoRefCom');
        await expect(campoContato).toBeVisible();
        await expect(campoContato).toHaveValue('');
        await expect(campoContato).not.toHaveAttribute('disabled', 'true');

        // Informação campo Contato
        await expect(page.locator('label[for="txtContatoRefCom"]')).toHaveText('Contato');

        // Campo Telefone
        const campoTelefone = page.locator('#txtTelefoneRefCom');
        await expect(campoTelefone).toBeVisible();
        await expect(campoTelefone).toHaveValue('');
        await expect(campoTelefone).not.toHaveAttribute('disabled', 'true');

        // Informação campo Telefone
        await expect(page.locator('label[for="txtTelefoneRefCom"]')).toHaveText('Telefone');

        // Campo Email
        const campoEmail = page.locator('#txtEmailRefCom');
        await expect(campoEmail).toBeVisible();
        await expect(campoEmail).toHaveValue('');
        await expect(campoEmail).not.toHaveAttribute('disabled', 'true');

        // Informação campo Email
        await expect(page.locator('label[for="txtEmailRefCom"]')).toHaveText('Email');

        // Campo Observação
        const campoObservacao = page.locator('#txtObsRefCom');
        await expect(campoObservacao).toBeVisible();
        await expect(campoObservacao).toHaveValue('');
        await expect(campoObservacao).not.toHaveAttribute('disabled', 'true');

        // Informação campo Observação
        await expect(page.locator('label[for="txtObsRefCom"]')).toHaveText('Observação');

        // Validar botão SALVAR, desabilitado
        const botaoSalvar = page.locator('#btnModalAddRefPessoal');
        await expect(botaoSalvar).toBeVisible();
        await expect(botaoSalvar).toHaveAttribute('disabled', 'true');
    }

    //clicar para salvar Referencia Comercial
    async clicarSalvarRefComercial (selector) {

        // Verificando a visibilidade do botão Salvar
        await expect(page.locator('button', { hasText: 'Salvar' })).toBeVisible();

        // Validando que o botão Salvar está habilitado
        const btnSalvar = page.locator('#btnModalAddRefPessoal');
        await expect(btnSalvar).toBeVisible();
        await expect(btnSalvar).not.toHaveAttribute('disabled', 'true');

        // Clicar no botão Salvar
        await btnSalvar.click();
    }

    // validando mensagem Referencia Comercial incluída com sucesso Incluído com sucesso, após incluírmos a Referencia Comercial
    async messRefComercialIncluidaSucesso (selector) {

        // Card Endereço incluído com sucesso.
        await expect(page.locator('.toast-success')).toBeVisible();

        // Card Endereço incluído com sucesso. - Aviso
        await expect(page.locator('.toast-success > .toast-title')).toBeVisible();
        await expect(page.locator('.toast-success > .toast-title')).toHaveText('Aviso');

        // Card Endereço incluído com sucesso. - Referência Comercial incluída com sucesso.
        await expect(page.locator('.toast-success > .toast-message')).toBeVisible();
        await expect(page.locator('.toast-success > .toast-message')).toHaveText('Referência Comercial incluída com sucesso.');
    }

    //validando informações que foram adicionadas no cadastro de referencia Comercial
    async infosRefComercialAdicionada (selector) {

        // Nome da pessoa
        await expect(page.locator('.md-whiteframe-2dp > .ng-scope > :nth-child(1) > .ng-binding')).toBeVisible();

        // Contato
        await expect(page.locator('[ng-show="(item.contato)"]')).toBeVisible();

        // Telefone
        await expect(page.locator('[ng-show="(item.telefone)"]')).toBeVisible();

        // Email
        await expect(page.locator('[ng-show="(item.email)"]')).toBeVisible();
    }
}
